import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const formatValue = (value?: string) => {
  if (!value?.trim()) {
    return "&mdash;";
  }

  return escapeHtml(value.trim());
};

const formatMultiline = (value?: string) => {
  if (!value?.trim()) {
    return "No additional context provided.";
  }

  return escapeHtml(value.trim()).replace(/\n/g, "<br />");
};

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const {
      fullName,
      email,
      phone,
      location,
      linkedIn,
      portfolio,
      availability,
      message,
      roleTitle,
      roleTeam,
    } = data;

    if (
      !fullName ||
      !email ||
      !phone ||
      !location ||
      !availability ||
      !message ||
      !roleTitle
    ) {
      return NextResponse.json(
        { success: false, error: "Missing required fields." },
        { status: 400 },
      );
    }

    if (
      !process.env.GMAIL_USER ||
      !process.env.GMAIL_PASS ||
      !process.env.TO_EMAIL
    ) {
      throw new Error("Email configuration is incomplete.");
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const htmlContent = `
      <div style="font-family: 'Segoe UI', Roboto, Arial, sans-serif; color: #222; line-height: 1.6; padding: 20px; background-color: #f9f9f9;">
        <div style="max-width: 640px; margin: 0 auto; background: white; border-radius: 8px; box-shadow: 0 2px 6px rgba(0,0,0,0.1); padding: 24px;">
          <h2 style="color: #111; margin-bottom: 10px;">New Career Application</h2>
          <p style="font-size: 16px; color: #444;">You have received a new application from the careers page.</p>

          <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />

          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0;"><strong>Role:</strong></td><td>${formatValue(roleTitle)}</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Team:</strong></td><td>${formatValue(roleTeam)}</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Full Name:</strong></td><td>${formatValue(fullName)}</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Email:</strong></td><td>${formatValue(email)}</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Phone:</strong></td><td>${formatValue(phone)}</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Location:</strong></td><td>${formatValue(location)}</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Availability:</strong></td><td>${formatValue(availability)}</td></tr>
            <tr><td style="padding: 8px 0;"><strong>LinkedIn:</strong></td><td>${formatValue(linkedIn)}</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Portfolio / GitHub:</strong></td><td>${formatValue(portfolio)}</td></tr>
          </table>

          <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />

          <div>
            <h3 style="margin-bottom: 8px; color: #111;">Candidate note</h3>
            <p style="background-color: #fafafa; padding: 12px; border-radius: 6px; border: 1px solid #eee;">
              ${formatMultiline(message)}
            </p>
          </div>

          <p style="font-size: 14px; color: #888; margin-top: 24px;">
            This message was sent automatically from your website careers form.
          </p>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Careers Form" <${process.env.GMAIL_USER}>`,
      to: process.env.TO_EMAIL,
      replyTo: email,
      subject: `New Career Application: ${roleTitle} - ${fullName}`,
      html: htmlContent,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown email sending error";

    console.error("Career application email sending error:", error);

    return NextResponse.json(
      { success: false, error: message },
      { status: 500 },
    );
  }
}
