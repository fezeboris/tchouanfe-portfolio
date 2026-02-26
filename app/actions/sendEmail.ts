"use server"
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    try {
        await resend.emails.send({
            from: 'Portfolio <onboarding@resend.dev>', // After domain verify, use your name
            to: 'borisfeze9@gmail.com',
            subject: `New Message from ${name}`,
            replyTo: email,
            html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
        });
        return { success: true };
    } catch (error) {
        return { success: false };
    }
}