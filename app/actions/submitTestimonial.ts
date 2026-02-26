"use server"
import { createClient } from 'next-sanity';

const writeClient = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    token: process.env.SANITY_API_WRITE_TOKEN, // Use the Write token
    useCdn: false,
    apiVersion: '2023-05-03',
});

export async function submitTestimonial(formData: FormData) {
    const name = formData.get("name") as string;
    const company = formData.get("company") as string;
    const feedback = formData.get("feedback") as string;

    try {
        await writeClient.create({
            _type: 'testimonials',
            name,
            company,
            feedback,
            approved: false, // Always false until you check it in Studio
        });
        return { success: true };
    } catch (error) {
        console.error(error);
        return { success: false };
    }
}