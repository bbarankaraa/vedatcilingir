"use client"
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { FaWhatsappSquare } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <section className="bg-black text-white py-12 flex flex-col items-center justify-center space-y-10 lg:px-24 px-2">
            <motion.div
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <Link href={"https://wa.me/905359501682"} className="flex flex-col justify-center items-center group">
                    <FaWhatsappSquare size={42} className="group-hover:text-red-500 duration-200" />
                    <h3 className="text-xl font-semibold text-slate-400 group-hover:text-red-500 duration-200">
                        WhatsApp Bilgi Hattı
                    </h3>
                </Link>
            </motion.div>
            <motion.h2
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-3xl lg:text-4xl uppercase font-semibold"
            >
                En Yakın Çilingir
            </motion.h2>

            <Separator />

            <div className="flex flex-col justify-center items-center gap-3">
                <motion.h2
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="uppercase text-red-500 text-center text-3xl lg:text-4xl font-bold"
                >
                    15 dakikada kapınızdayız
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-center text-gray-300"
                >
                    5. Levent Çilingir uzman çilingir servis ağı ile siz en yakın çilingir personelini yönlendirerek
                    15 Dakikadan daha kısa sürede bulunduğunuz ilçeye, mahalleye ulaşarak çilingir hizmetini sağlamaktadır.
                </motion.p>
            </div>
        </section>
    )
}
export default Contact
