

"use server"
import { Resend } from 'resend';

// Safety check for the API Key
if (!process.env.RESEND_API_KEY) {
    console.warn("RESEND_API_KEY is missing from environment variables.");
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    // Basic server-side validation
    if (!name || !email || !message) {
        return { success: false, error: "Missing fields" };
    }

    try {
        const { data, error } = await resend.emails.send({
            // 1. Change this to contact@tchouanfeboris.com AFTER domain verification
            // from: 'Portfolio <onboarding@resend.dev>',
            from: 'Boris Tchouanfe <contact@tchouanfeboris.com>',
            to: 'borisfeze9@gmail.com',
            subject: `New Message from ${name}`,
            replyTo: email,
            html: `
                <div style="font-family: sans-serif; line-height: 1.5;">
                    <h2>New Portfolio Message</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <hr />
                    <p><strong>Message:</strong></p>
                    <p>${message}</p>
                </div>
            `,
        });

        if (error) {
            console.error("Resend Error:", error);
            return { success: false };
        }

        return { success: true };
    } catch (err) {
        console.error("Server Action Error:", err);
        return { success: false };
    }
}