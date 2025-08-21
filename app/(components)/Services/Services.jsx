"use client"
import Image from "next/image"
import { motion } from "framer-motion"

const services = [
  { id: 1, img: "/services1.jpg", title: "7/24 Çilingir" },
  { id: 2, img: "/services2.jpg", title: "Oto Çilingir" },
  { id: 3, img: "/services3.jpg", title: "Kapı Tamiri" },
  { id: 4, img: "/services4.jpg", title: "Göbek Değiştirme" },
  { id: 5, img: "/services5.jpg", title: "Kasa Çilingir" },
]

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1 },
}

const Services = () => {
  return (
    <section className="lg:px-24 px-6 py-12">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-4xl mb-5 font-semibold uppercase"
      >
        Hizmetlerimiz
      </motion.h2>

      <div className="flex flex-col gap-2 lg:gap-0 lg:flex-row items-center justify-between">
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="lg:w-[420px] lg:h-[380px] w-full h-full"
        >
          <div className="relative w-full h-72 md:h-full group overflow-hidden cursor-pointer">
            <Image
              src={services[0].img}
              alt="service"
              width={400}
              height={400}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="absolute bottom-0 left-0 text-white font-semibold text-lg px-3 py-2 bg-red-600">
              {services[0].title}
            </div>
          </div>
        </motion.div>

        {/* Sağdaki küçük grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 items-center lg:gap-5 gap-2"
        >
          {services.slice(1).map((service, i) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative lg:h-full lg:w-full h-40 group overflow-hidden cursor-pointer"
            >
              <Image
                src={service.img}
                alt="service"
                width={400}
                height={400}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="absolute bottom-0 left-0 text-white font-semibold text-sm lg:text-base px-2 py-1 bg-red-600">
                {service.title}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
