"use client"
import { motion } from "framer-motion";

const MapEmbed = () => (
<motion.div
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}
className="overflow-hidden rounded-2xl shadow-md"
>
<iframe
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.189294379788!2d28.924493!3d41.070314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab707f233a7b9%3A0x2f0e25e39f1c3e15!2sAlibeyk%C3%B6y%2C%20Istanbul!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
width="100%"
height="400"
style={{ border: 0 }}
allowFullScreen=""
loading="lazy"
referrerPolicy="no-referrer-when-downgrade"
></iframe>
</motion.div>
);
export default MapEmbed