import nodemailer from "nodemailer";
import { siteConfig } from "@/config/site";

function getRequestOrigin(request) {
  const origin = request.headers.get("origin");
  if (origin) return origin;

  const referer = request.headers.get("referer");
  if (referer) {
    try {
      return new URL(referer).origin;
    } catch {
      // Ignore malformed referer values.
    }
  }

  return process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
}

async function sendViaFormSubmit({ message, pageUrl, recipient, origin }) {
  const subject = `New website chat message — ${siteConfig.name}`;

  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(recipient)}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Origin: origin,
      Referer: `${origin}/`,
    },
    body: JSON.stringify({
      message,
      page: pageUrl || "Unknown page",
      sent_at: new Date().toISOString(),
      _subject: subject,
      _captcha: "false",
      _template: "table",
    }),
  });

  let result = null;
  let resultText = "";

  try {
    resultText = await response.text();
    result = resultText ? JSON.parse(resultText) : null;
  } catch {
    result = resultText ? { message: resultText } : null;
  }

  const messageText = typeof result?.message === "string" ? result.message.toLowerCase() : "";
  const succeeded =
    response.ok &&
    (result?.success === true ||
      result?.success === "true" ||
      messageText.includes("success") ||
      messageText.includes("thank") ||
      result?.message === "The form was submitted successfully." ||
      (response.ok && !result));

  if (!succeeded) {
    throw new Error(result?.message || "Unable to deliver chat message.");
  }
}

async function sendViaSmtp({ message, pageUrl, recipient, smtpUser, smtpPass }) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const subject = `New website chat message — ${siteConfig.name}`;
  const text = [
    "You received a new message from the website chat widget.",
    "",
    "Message:",
    message,
    "",
    pageUrl ? `Page: ${pageUrl}` : null,
    `Sent at: ${new Date().toISOString()}`,
  ]
    .filter(Boolean)
    .join("\n");

  await transporter.sendMail({
    from: `"${siteConfig.name} Chat" <${smtpUser}>`,
    to: recipient,
    replyTo: recipient,
    subject,
    text,
  });
}

export async function POST(request) {
  let body;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const message = typeof body.message === "string" ? body.message.trim() : "";
  const pageUrl = typeof body.pageUrl === "string" ? body.pageUrl.trim() : "";

  if (!message) {
    return Response.json({ error: "Message is required." }, { status: 400 });
  }

  if (message.length > 2000) {
    return Response.json({ error: "Message is too long." }, { status: 400 });
  }

  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const recipient = process.env.CONTACT_EMAIL ?? siteConfig.contact.email;
  const origin = getRequestOrigin(request);

  try {
    if (smtpUser && smtpPass) {
      try {
        await sendViaSmtp({ message, pageUrl, recipient, smtpUser, smtpPass });
      } catch (smtpError) {
        console.error("[chat] SMTP failed, falling back to FormSubmit:", smtpError);
        await sendViaFormSubmit({ message, pageUrl, recipient, origin });
      }
    } else {
      await sendViaFormSubmit({ message, pageUrl, recipient, origin });
    }

    return Response.json({ ok: true, message: "Message sent successfully." });
  } catch (error) {
    console.error("[chat] Failed to send message:", error);
    const errorMessage =
      error instanceof Error && error.message
        ? error.message
        : "Unable to send your message right now. Please try again.";

    return Response.json({ error: errorMessage }, { status: 500 });
  }
}
