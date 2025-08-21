"use client"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const Testimonials = () => {

const reviews = [
        {
            name: "Muhammet Ç.",
            comment: "Vedat Bey çok hızlı geldi, dakikalar içinde kapıyı açtı. Gerçekten işini bilen bir usta.",
            avatar: "/avatar1.jpg"
        },
        {
            name: "Ayşe T.",
            comment: "Gece yarısı aradık, sağ olsun hemen yetişti. Hem güler yüzlü hem de güven veren bir hizmetti.",
            avatar: "/avatar2.jpg"
        },
        {
            name: "Mehmet A.",
            comment: "Fiyat konusunda da makuldü, yaptığı işten memnun kaldık. Vedat Bey’e tekrar teşekkür ederim.",
            avatar: "/avatar3.jpg"
        },
        {
            name: "Elif D.",
            comment: "Kapıda kalmıştık, fazla bekletmeden geldi ve sorunu hemen çözdü. Profesyonel bir yaklaşımı var.",
            avatar: "/avatar4.jpg"
        },
        {
            name: "Ahmet K.",
            comment: "Vedat Bey işini titizlikle yaptı, kapıya zarar vermeden halletti. Kesinlikle tavsiye ederim.",
            avatar: "/avatar5.jpg"
        }
    ];

    return (
        <section className="flex flex-col my-10">
            {/* Başlık animasyonlu */}
            <motion.h2
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-center text-4xl mb-5 font-semibold uppercase"
            >
                Müşteri Yorumlarımız
            </motion.h2>

            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full lg:px-24 px-12 py-12"
            >
                <CarouselContent>
                    {reviews.map((review, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
                                viewport={{ once: true }}
                                className="p-1"
                            >
                                <Card className="hover:shadow-xl transition rounded-2xl">
                                    <CardContent className="p-6 space-y-3">
                                        <div className="flex items-center space-x-2">
                                            <Avatar>
                                                <AvatarImage src={review.avatar} />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                            <span className="font-semibold">{review.name}</span>
                                        </div>
                                        <div className="flex items-center text-yellow-300">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </div>
                                        <motion.p
                                            initial={{ opacity: 0, x: 50 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.6, delay: 0.3 }}
                                            viewport={{ once: true }}
                                            className="text-gray-500 font-light"
                                        >
                                            “{review.comment}”
                                        </motion.p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </section>
    )
}
export default Testimonials
