"use client"
import { Button } from "@/components/ui/button"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import { motion } from "framer-motion"

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" }
  }),
}

const Hero = () => {
  return (
    <Carousel>
      <CarouselContent className="lg:h-[80vh] h-[50vh]">        
        <CarouselItem className="relative">
          <div className="absolute left-10 lg:left-20 top-20 z-10 text-white font-semibold space-y-4">
            <motion.h1 
              variants={textVariants} 
              initial="hidden" 
              animate="visible" 
              custom={0}
              className="lg:text-7xl text-4xl"
            >
              Alibeyköy Vip <br /> Çilingir Hizmeti
            </motion.h1>
            
            <motion.div
              variants={textVariants}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              <Button className="text-xl cursor-pointer bg-red-500 rounded-none">
                Tıkla Ara
              </Button>
            </motion.div>
          </div>
          <Image src={"/hero1.jpg"} height={1000} width={1000} className="h-full w-full object-cover" alt="hero1" />
        </CarouselItem>
        <CarouselItem className="relative">
          <div className="absolute left-10 lg:left-20 top-20 z-10 text-white font-semibold space-y-3">
            <motion.h1 
              variants={textVariants} 
              initial="hidden" 
              animate="visible" 
              custom={0}
              className="lg:text-7xl text-4xl"
            >
              Alibeyköy <br /> Çilingir Hizmeti
            </motion.h1>

            <motion.p
              variants={textVariants}
              initial="hidden"
              animate="visible"
              custom={1}
              className="text-lg"
            >
              7 Gün 24 Saat hizmetinizdeyiz
            </motion.p>

            <motion.div
              variants={textVariants}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              <Button className="text-xl cursor-pointer bg-red-500 rounded-none">
                Tıkla Ara
              </Button>
            </motion.div>
          </div>
          <Image src={"/hero2.png"} height={1000} width={1000} className="h-full w-full object-cover" alt="hero2" />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default Hero
