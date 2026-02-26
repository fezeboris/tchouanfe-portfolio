"use client";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
    const phoneNumber = "237690166974"; // Your number
    const message = "Hello Boris, I saw your portfolio and would like to discuss a project.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-28 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-500/30 transition-shadow hover:shadow-green-500/50"
        >
            <MessageCircle size={30} fill="currentColor" />
            {/* Small pulse effect to attract eye */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
        </motion.a>
    );
}