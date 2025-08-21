"use client"
import { Card, CardContent } from "@/components/ui/card"
import CountUp from "react-countup";
import { TbBriefcaseFilled } from "react-icons/tb";
import { FaCar } from "react-icons/fa";
import { BsDoorOpen } from "react-icons/bs";
import { motion } from "framer-motion";

const Count = () => {
    return (
        <section className="lg:px-24 px-6 py-12">
            <motion.h2
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl mb-7 font-semibold uppercase text-center md:text-left"
            >
                Şuana kadar...
            </motion.h2>

            <div className="p-1 flex flex-col md:flex-row items-center gap-5">

                {/* 1. Kart */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="w-full"
                >
                    <Card>
                        <CardContent className="md:p-6 p-2 space-y-3 text-center">
                            <div className="flex items-center justify-center space-x-2">
                                <BsDoorOpen size={72} />
                            </div>
                            <div className="flex items-center gap-2 justify-center">
                                <CountUp 
                                    end={500} 
                                    className="text-xl md:text-3xl font-bold" 
                                    enableScrollSpy
                                    scrollSpyOnce
                                    duration={2}
                                />
                                <span>+</span>
                            </div>
                            <h2 className="text-gray-500 text-xl font-light">Adet kapı açtık</h2>
                        </CardContent>
                    </Card>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="w-full"
                >
                    <Card>
                        <CardContent className="p-6 space-y-3 text-center">
                            <div className="flex items-center justify-center space-x-2">
                                <FaCar size={72} />
                            </div>
                            <div className="flex items-center gap-2 justify-center">
                                <CountUp 
                                    end={250} 
                                    className="text-xl md:text-3xl font-bold" 
                                    enableScrollSpy
                                    scrollSpyOnce
                                    duration={2}
                                />
                                <span>+</span>
                            </div>
                            <h2 className="text-gray-500 text-xl font-light">Otomobil tamir ettik</h2>
                        </CardContent>
                    </Card>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="w-full"
                >
                    <Card>
                        <CardContent className="p-6 space-y-3 text-center">
                            <div className="flex items-center justify-center space-x-2">
                                <TbBriefcaseFilled size={72} />
                            </div>
                            <div className="flex items-center gap-2 justify-center">
                                <CountUp 
                                    end={120} 
                                    className="text-xl md:text-3xl font-bold" 
                                    enableScrollSpy
                                    scrollSpyOnce
                                    duration={2}
                                />
                                <span>+</span>
                            </div>
                            <h2 className="text-gray-500 text-xl font-light">Kasa açtık</h2>
                        </CardContent>
                    </Card>
                </motion.div>

            </div>
        </section>
    )
}
export default Count
