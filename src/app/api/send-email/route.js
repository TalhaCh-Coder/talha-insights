import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
   host: "smtp.gmail.com",
   port: 587,
   secure: false,
   auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
   },
});

export async function POST(request) {
   try {
      const { name, email, project_scope, project_details } =
         await request.json();

      const info = await transporter.sendMail({
         from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
         to: "talhaahmaduni022@gmail.com",
         subject: `New Project Inquiry from ${name}`,
         text: `
        Name: ${name}
        Email: ${email}
        Project Scope: ${project_scope}
        Project Details: ${project_details}
      `,
         html: `
        <h2>New Project Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Scope:</strong> ${project_scope}</p>
        <p><strong>Project Details:</strong> ${project_details}</p>
      `,
      });

      console.log("Message sent:", info.messageId);
      return NextResponse.json({
         success: true,
         message: "Email sent successfully",
      });
   } catch (error) {
      console.error("Error sending email:", error);
      return NextResponse.json(
         { success: false, message: "Failed to send email" },
         { status: 500 }
      );
   }
}
