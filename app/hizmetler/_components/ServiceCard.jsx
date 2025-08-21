"use client"
import { motion } from "framer-motion";
import Image from "next/image";

const ServiceCard = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
  >
    <div className="relative h-40 w-full overflow-hidden">
      <Image
        src={service.img}
        alt={service.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div className="p-4">
      <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100">
        {service.title}
      </h3>
    </div>
  </motion.div>
);
export default ServiceCard