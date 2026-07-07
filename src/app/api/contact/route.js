import nodemailer from "nodemailer";
import { siteConfig } from "@/config/site";
import { getContactServiceLabel } from "@/config/services";

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

function buildContactEmailText({ name, email, phone, problem, message }) {
  const problemLabel = getContactServiceLabel(problem) ?? problem;

  return [
    "You received a new Book Free Assessment request from the website.",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Problem: ${problemLabel}`,
    "",
    "Project details:",
    message,
    "",
    `Submitted at: ${new Date().toISOString()}`,
  ].join("\n");
}

async function sendViaFormSubmit({ name, email, phone, problem, message, recipient, origin }) {
  const subject = `New assessment request — ${name}`;
  const problemLabel = getContactServiceLabel(problem) ?? problem;

  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(recipient)}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Origin: origin,
      Referer: `${origin}/`,
    },
    body: JSON.stringify({
      name,
      email,
      phone,
      problem: problemLabel,
      message,
      submitted_at: new Date().toISOString(),
      _subject: subject,
      _replyto: email,
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
    throw new Error(result?.message || "Unable to deliver contact form.");
  }
}

async function sendViaSmtp({ name, email, phone, problem, message, recipient, smtpUser, smtpPass }) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const problemLabel = getContactServiceLabel(problem) ?? problem;
  const subject = `New assessment request — ${name}`;

  await transporter.sendMail({
    from: `"${siteConfig.name} Contact" <${smtpUser}>`,
    to: recipient,
    replyTo: email,
    subject,
    text: buildContactEmailText({ name, email, phone, problem: problemLabel, message }),
  });
}

export async function POST(request) {
  let body;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const problem = typeof body.problem === "string" ? body.problem.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || !email || !phone || !problem || !message) {
    return Response.json({ error: "All fields are required." }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  if (!getContactServiceLabel(problem)) {
    return Response.json({ error: "Please select a valid service." }, { status: 400 });
  }

  if (message.length > 5000) {
    return Response.json({ error: "Message is too long." }, { status: 400 });
  }

  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const recipient = process.env.CONTACT_EMAIL ?? siteConfig.contact.email;
  const origin = getRequestOrigin(request);

  try {
    if (smtpUser && smtpPass) {
      try {
        await sendViaSmtp({ name, email, phone, problem, message, recipient, smtpUser, smtpPass });
      } catch (smtpError) {
        console.error("[contact] SMTP failed, falling back to FormSubmit:", smtpError);
        await sendViaFormSubmit({ name, email, phone, problem, message, recipient, origin });
      }
    } else {
      await sendViaFormSubmit({ name, email, phone, problem, message, recipient, origin });
    }

    return Response.json({ ok: true, message: "Assessment request sent successfully." });
  } catch (error) {
    console.error("[contact] Failed to send assessment request:", error);
    const errorMessage =
      error instanceof Error && error.message
        ? error.message
        : "Unable to send your request right now. Please try again.";

    return Response.json({ error: errorMessage }, { status: 500 });
  }
}
