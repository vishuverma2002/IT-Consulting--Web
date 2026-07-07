"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { X } from "lucide-react";
import { BiCommentDetail } from "react-icons/bi";
import { IoArrowUp } from "react-icons/io5";
import useDisclosure from "@/hooks/useDisclosure";
import { sendChatMessage } from "@/services/chatService";
import { siteConfig } from "@/config/site";
import "./chat-widget.css";

const WELCOME_MESSAGE = "Hello! How can I help you today?";
const MIN_SEND_DELAY_MS = 700;

function wait(ms) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

export default function FloatingChatWidget() {
  const panelId = useId();
  const inputId = useId();
  const { isOpen, open, close, toggle } = useDisclosure();
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [sentMessages, setSentMessages] = useState([]);
  const inputRef = useRef(null);
  const messagesRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [sentMessages, isOpen]);

  const handleSend = useCallback(
    async (event) => {
      event.preventDefault();
      const trimmed = message.trim();
      if (!trimmed || status === "sending") return;

      setStatus("sending");
      setError("");

      try {
        await Promise.all([
          sendChatMessage({
            message: trimmed,
            pageUrl: typeof window !== "undefined" ? window.location.href : "",
          }),
          wait(MIN_SEND_DELAY_MS),
        ]);

        setSentMessages((prev) => [...prev, trimmed]);
        setMessage("");
        setStatus("success");
      } catch (err) {
        setStatus("error");
        setError(err.message || "Unable to send your message. Please try again.");
      }
    },
    [message, status],
  );

  const handleMessageChange = useCallback((event) => {
    setMessage(event.target.value);
    if (status === "success" || status === "error") {
      setStatus("idle");
      setError("");
    }
  }, [status]);

  return (
    <div data-component="chat-widget" data-open={isOpen ? "true" : "false"}>
      {isOpen ? (
        <section
          id={panelId}
          className="chat-widget-panel"
          role="dialog"
          aria-modal="true"
          aria-labelledby="chat-widget-title"
        >
          <header className="chat-widget-header">
            <button
              type="button"
              className="chat-widget-close"
              onClick={close}
              aria-label="Close chat"
            >
              <X aria-hidden="true" />
            </button>
            <div className="chat-widget-header-center">
              <div className="chat-widget-avatar" aria-hidden="true">
                {siteConfig.name.charAt(0)}
              </div>
              <h2 id="chat-widget-title" className="chat-widget-title">
                {siteConfig.name}
              </h2>
              <p className="chat-widget-subtitle">Ask me anything</p>
            </div>
            <span className="chat-widget-header-spacer" aria-hidden="true" />
          </header>

          <div ref={messagesRef} className="chat-widget-body">
            <p className="chat-widget-timestamp" aria-hidden="true">
              Today
            </p>
            <div className="chat-widget-bubble chat-widget-bubble--bot">
              <p>{WELCOME_MESSAGE}</p>
            </div>
            {sentMessages.map((text, index) => (
              <div key={`${text}-${index}`} className="chat-widget-bubble chat-widget-bubble--user">
                <p>{text}</p>
              </div>
            ))}
            {status === "success" ? (
              <p className="chat-widget-status chat-widget-status--success" role="status">
                Message sent successfully!
              </p>
            ) : null}
            {status === "error" && error ? (
              <p className="chat-widget-status chat-widget-status--error" role="alert">
                {error}
              </p>
            ) : null}
          </div>

          <form className="chat-widget-form" onSubmit={handleSend}>
            <div className="chat-widget-input-wrap">
              <input
                ref={inputRef}
                id={inputId}
                type="text"
                className="chat-widget-input"
                placeholder="iMessage"
                value={message}
                onChange={handleMessageChange}
                disabled={status === "sending"}
                autoComplete="off"
                aria-label="Type your message"
              />
              <button
                type="submit"
                className={`chat-widget-send${status === "sending" ? " chat-widget-send--loading" : ""}`}
                disabled={!message.trim() || status === "sending"}
                aria-label={status === "sending" ? "Sending message" : "Send message"}
                aria-busy={status === "sending"}
              >
                {status === "sending" ? (
                  <span className="chat-widget-send-spinner" aria-hidden="true" />
                ) : (
                  <IoArrowUp aria-hidden="true" />
                )}
              </button>
            </div>
          </form>

          <p className="chat-widget-footer">
            Powered by {siteConfig.name}
          </p>
        </section>
      ) : null}

      <button
        type="button"
        className={`chat-widget-fab${isOpen ? " chat-widget-fab--open" : ""}`}
        aria-expanded={isOpen}
        aria-controls={panelId}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        onClick={toggle}
      >
        <span className="chat-widget-fab-glow" aria-hidden="true" />
        <span className="chat-widget-fab-shine" aria-hidden="true" />
        {!isOpen ? (
          <>
            <span className="chat-widget-fab-ring chat-widget-fab-ring--1" aria-hidden="true" />
            <span className="chat-widget-fab-ring chat-widget-fab-ring--2" aria-hidden="true" />
            <span className="chat-widget-fab-ring chat-widget-fab-ring--3" aria-hidden="true" />
            <span className="chat-widget-fab-badge" aria-hidden="true" />
            <span className="chat-widget-fab-label" aria-hidden="true">
              Chat with us
            </span>
          </>
        ) : null}
        <span className="chat-widget-fab-icon" aria-hidden="true">
          {isOpen ? <X /> : <BiCommentDetail />}
        </span>
      </button>
    </div>
  );
}
