"use client"
import Image from "next/image";
import raiyan from '/public/raiyan.png'
import { motion } from 'framer-motion'
import Link from "next/link";
import { AiOutlineCloudDownload } from "react-icons/ai";
import raiyanPortrait from '/public/raiyan-portrait.png'
export default function Home() {
    return (
        <section className="py-6 min-h-screen lg:flex lg:place-items-center">

            {/*Small Screen Image Section | will be hidden in large screen*/}
            <div className="flex pt-4 pb-10 lg:hidden">
                <motion.div
                    initial={{
                        scale: 0,
                        opacity: 0,
                    }}
                    animate={{
                        scale: 1,
                        opacity: 1
                    }}
                    transition={{}} className="mx-auto bg-custom-green-base w-fit rounded-full relative border-4 border-custom-green-base">
                    <Image src={raiyan} alt="Raiyan Takrim" className="rounded-full w-full max-w-36  sm:max-w-40 h-auto" />
                    <div className="absolute right-2 bottom-0 bg-custom-green-base rounded-full h-8 w-8 flex place-content-center place-items-center">
                        <motion.span
                            className="inline-block"
                            animate={{
                                rotate: [0, 10, -10, 10, -10, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        >👋</motion.span>
                    </div>
                </motion.div>
            </div>

            {/* Info Section */}
            <div className="md:mr-16">
                {/* Leading Texts */}
                <motion.div
                    initial={{
                        y: 100,
                        opacity: 0,
                    }}
                    animate={{
                        y: 0,
                        opacity: 1,
                    }}
                    transition={{
                        // duration: 0.5
                    }}
                >
                    <h2 className="text-lg font-mono text-custom-green-base">Hi, my name is </h2>
                    <h1 style={{
                        fontSize: 'clamp(40px, 8vw, 60px)', lineHeight: 1.1,
                    }} className="my-2 font-bold text-slate-lightest">Raiyan Takrim.</h1>
                    <h2 style={{
                        fontSize: 'clamp(40px, 8vw, 60px)', lineHeight: 1.1,
                    }} className="font-bold">I build things for the web.</h2>
                </motion.div>

                {/* Details Section */}
                <motion.div className="my-10"
                    initial={{
                        y: 100,
                        opacity: 0,
                    }}
                    animate={{
                        y: 0,
                        opacity: 1,
                    }}
                    transition={{
                        // duration: 0.5
                    }}>
                    <p>As a Full-Stack Next.js Developer, I turn your ideas into engaging web experiences. I focus on delivering personalized, high-quality solutions that bring your vision to life. Let&apos;s create something amazing together!</p>
                </motion.div>

                {/* CTA Section */}
                <motion.div className="flex mt-4"
                    initial={{
                        opacity: 0,
                        y: 10
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                // transition={{ duration: 0.5 }}
                >
                    <Link href="#" className="text-lg inline-block rounded-md hover:shadow-btn-shadow text-custom-green-base border border-custom-green-base px-6 py-2 transition hover:-translate-x-1 hover:-translate-y-1 mr-6">Contact Me</Link>
                    <Link href='/cv.pdf' download={true} className="dnld-cv flex place-items-center relative after:block after:h-px after:absolute after:w-0 hover:after:w-full after:bottom-2 after:bg-custom-green-base">
                        Download CV
                        <AiOutlineCloudDownload className="ml-2 inline" />
                    </Link>
                </motion.div>
            </div>

            {/* Large Screen Image Section */}
            <div className="hidden lg:block">
                <div className="hover:-translate-x-1 hover:-translate-y-1 transition-transform duration-300 ease-linear hover:before:translate-x-4 hover:before:translate-y-4 before:transition-transform before:duration-300 before:ease-linear">
                    <div className="shadow-lg shadow-navy-base
                    relative after:block after:absolute after:bg-custom-green-base z-50 after:inset-0 after:opacity-30 hover:after:opacity-0 after:transition after:duration-500 after:ease-linear after:rounded-md

                    before:block before:absolute before:inset-0 before:border-2 before:border-custom-green-base before:translate-x-3 before:translate-y-3 before:-z-30 hover:before:translate-x-5 hover:before:translate-y-5 before:transition-transform before:duration-300 before:ease-linear before:rounded-md
                    ">
                        <Image src={raiyanPortrait} alt="Raiyan Takrim's Photo" className="h-auto w-[500px] rounded-md" />
                    </div>
                </div>
            </div>
        </section>
    )
}
