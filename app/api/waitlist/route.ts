import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const {
      fullName,
      email,
      phone,
      linkedIn,
      country,
      role,
      reason,
      heardFrom,
    } = data;

    // Create transporter for Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Professional HTML email template for waitlist
    const htmlContent = `
      <div style="font-family: 'Segoe UI', Roboto, Arial, sans-serif; color: #222; line-height: 1.6; padding: 20px; background-color: #f9f9f9;">
        <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; box-shadow: 0 2px 6px rgba(0,0,0,0.1); padding: 24px;">
          <h2 style="color: #111; margin-bottom: 10px;">📩 New EIT Fellowship Waitlist Submission</h2>
          <p style="font-size: 16px; color: #444;">
            Someone just joined the <strong>EIT Fellowship Waitlist</strong>. Here are their details:
          </p>

          <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />

          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0;"><strong>Full Name:</strong></td><td>${fullName || "—"}</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Email:</strong></td><td>${email || "—"}</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Phone:</strong></td><td>${phone || "—"}</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Country:</strong></td><td>${country || "—"}</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Role / Background:</strong></td><td>${role || "—"}</td></tr>
            <tr><td style="padding: 8px 0;"><strong>LinkedIn / Portfolio:</strong></td><td>${linkedIn || "—"}</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Heard From:</strong></td><td>${heardFrom || "—"}</td></tr>
          </table>

          <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />

          <div>
            <h3 style="margin-bottom: 8px; color: #111;">Reason for Joining:</h3>
            <p style="background-color: #fafafa; padding: 12px; border-radius: 6px; border: 1px solid #eee;">
              ${reason || "No message provided."}
            </p>
          </div>

          <p style="font-size: 14px; color: #888; margin-top: 24px;">
            — This message was sent automatically from your <strong>EIT Fellowship Waitlist</strong> form.
          </p>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"EIT Fellowship Waitlist" <${process.env.GMAIL_USER}>`,
      to: process.env.TO_EMAIL,
      subject: `🎓 New Waitlist Signup — ${fullName}`,
      html: htmlContent,
    });

    return NextResponse.json({ success: true });
  } 
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  catch (error: any) {
    console.error("Email sending error:", error);
    return NextResponse.json({ success: false, error: error.message });
  }
}
