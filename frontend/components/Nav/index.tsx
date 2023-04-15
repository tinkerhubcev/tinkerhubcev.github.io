import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
export default function NavBar() {
    const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-white/80 transition ease transform duration-300`;
    const [navbar, setNavbar] = useState(false);
    const icon = {
        hidden: {
            pathLength: 0,
            fill: "rgba(255, 255, 255, 0)"
        },
        visible: {
            pathLength: 1,
            fill: "rgba(255, 255, 255, 1)"
        }
    }
    
    return (
        <nav className="sticky w-11/12 mx-auto top-5 rounded-2xl transition-all ease-in-out duration-300 bg-white/10 backdrop:blur-2xl shadow ">

            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-3 md:block">
                        <a href="/">
                            <motion.svg id="svgLogo" className="block fill-white" viewBox="0 0 2028 594"
                                width="171" height="50">
                                <motion.title>TinkerHub</motion.title>
                                <motion.g id="Layer_2" data-name="Layer 2">
                                    <motion.g id="Layer_2-2" data-name="Layer 2">

                                        <motion.path d="M729,301.39V149.6H676V117.94H820.54V149.6H767.4V301.39Z" variants={icon}
                                            initial="hidden"
                                            animate="visible"
                                            transition={{
                                                default: { duration: 2, ease: "easeInOut" },
                                                fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                                            }}
                                        />
                                        <motion.path
                                            d="M833.51,130.91c0-11.06,8.9-19.19,19.83-19.19s19.83,8.13,19.83,19.19c0,10.81-8.9,19.2-19.83,19.2S833.51,141.72,833.51,130.91Zm1.27,34.2H871.9V301.39H834.78Z"
                                            variants={icon}
                                            initial="hidden"
                                            animate="visible"
                                            transition={{
                                                default: { duration: 2, ease: "easeInOut" },
                                                fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                                            }}
                                        />
                                        <motion.path
                                            d="M896.57,165.11h35.85v24.54h.76c7.75-17.42,21.61-26.57,42.59-26.57,30.25,0,47.29,19.06,47.29,51v87.34H985.94V221.81c0-17.8-8.27-28-25.17-28s-27.08,12.2-27.08,30v77.55H896.57Z" variants={icon}
                                            initial="hidden"
                                            animate="visible"
                                            transition={{
                                                default: { duration: 2, ease: "easeInOut" },
                                                fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                                            }}
                                        />
                                        <motion.path
                                            d="M1131.37,165.11h42.08l-52,58.48,54.53,77.8h-42.71l-39-55.43-9.66,10.43v45h-37.12V117.94h37.12V219.77h.51Z" variants={icon}
                                            initial="hidden"
                                            animate="visible"
                                            transition={{
                                                default: { duration: 2, ease: "easeInOut" },
                                                fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                                            }}
                                        />
                                        <motion.path
                                            d="M1304.65,259.69c-4.07,26.57-28.73,44.12-62.17,44.12-41.7,0-67.12-26.57-67.12-69.92s25.55-71.2,65.72-71.2c39.54,0,64.71,26.32,64.71,67.76v11.32h-93.94v2.29c0,19.19,12.58,32.29,31.27,32.29,13.35,0,24-6.36,27.46-16.66ZM1212.23,219h57.84c-.76-17.41-12.2-28.86-28.6-28.86C1225.32,190.15,1213.5,202,1212.23,219Z" variants={icon}
                                            initial="hidden"
                                            animate="visible"
                                            transition={{
                                                default: { duration: 2, ease: "easeInOut" },
                                                fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                                            }}
                                        />
                                        <motion.path
                                            d="M1324.86,165.11h35.85v24.54h.77c4.7-16.91,16.4-26.19,32.41-26.19a34.28,34.28,0,0,1,10.56,1.4v32.67c-3-1.27-8.14-2.16-13.48-2.16-18.31,0-29,11.18-29,30.38v75.64h-37.12Z" variants={icon}
                                            initial="hidden"
                                            animate="visible"
                                            transition={{
                                                default: { duration: 2, ease: "easeInOut" },
                                                fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                                            }}
                                        />
                                        <motion.path d="M1548.86,301.39V217.87H1448.18v83.52H1425.3V117.94h22.88v79.33h100.68V117.94h22.89V301.39Z" variants={icon}
                                            initial="hidden"
                                            animate="visible"
                                            transition={{
                                                default: { duration: 2, ease: "easeInOut" },
                                                fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                                            }}
                                        />
                                        <motion.path
                                            d="M1712.48,301.39h-21v-22H1691c-8.13,15.38-21.61,23.26-42,23.26-28.86,0-45.76-18.69-45.76-48.69V169.18h22.12V250c0,21.49,10,33,30.51,33,21.48,0,34.45-14.74,34.45-37.24V169.18h22.12Z" variants={icon}
                                            initial="hidden"
                                            animate="visible"
                                            transition={{
                                                default: { duration: 2, ease: "easeInOut" },
                                                fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                                            }}
                                        />
                                        <motion.path
                                            d="M1763.84,279h-.51v22.37h-21.1V117.94h22.12v72.72h.51c8.26-14.49,23.64-22.75,42.33-22.75,33.31,0,55.81,27,55.81,67.37s-22.5,67.38-56.19,67.38C1787.49,302.66,1772.36,294.27,1763.84,279Zm.38-43.74c0,28.48,15.51,47.8,38.27,47.8s37.88-18.68,37.88-47.8-15-47.8-37.88-47.8S1764.22,206.93,1764.22,235.28Z" variants={icon}
                                            initial="hidden"
                                            animate="visible"
                                            transition={{
                                                default: { duration: 2, ease: "easeInOut" },
                                                fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                                            }}
                                        />
                                        <text className="text-9xl font-normal" transform="translate(710 450.78)">
                                            <tspan id="logoName" className="name">CEV</tspan>
                                        </text>
                                    </motion.g>
                                </motion.g>
                            </motion.svg>
                        </a>
                        <div className="md:hidden">
                            <button
                                // className="p-2 text-white rounded-full outline-none focus:border-gray-400 focus:border"
                                className="flex flex-col h-10 w-10  justify-center items-center group"
                                onClick={() => setNavbar(!navbar)}
                            >
                                <div
                                    className={`${genericHamburgerLine} ${navbar
                                        ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                                        : "opacity-50 group-hover:opacity-100"
                                        }`}
                                />
                                <div
                                    className={`${genericHamburgerLine} ${navbar ? "opacity-0" : "opacity-50 group-hover:opacity-100"
                                        }`}
                                />
                                <div
                                    className={`${genericHamburgerLine} ${navbar
                                        ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                                        : "opacity-50 group-hover:opacity-100"
                                        }`}
                                />
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        transition={{
                            default: { duration: 2, ease: "easeInOut" },
                            fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                        }}

                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className="items-center justify-center space-y-8 flex flex-col md:flex-row md:space-x-6 md:space-y-0">
                            <li className="text-white md:text-white/60 md:hover:text-white">
                                <a href="javascript:void(0)">Home</a>
                            </li>
                            <li className="text-white md:text-white/60 md:hover:text-white">
                                <Link href="/events">Events</Link>
                            </li>
                            <li className="text-white md:text-white/60 md:hover:text-white">
                                <a href="javascript:void(0)">About</a>
                            </li>
                            <li className="text-white md:text-white/60 md:hover:text-white">
                                <a href="javascript:void(0)">Contact</a>
                            </li>
                        </ul>
                    </motion.div>

                </div>
            </div>
        </nav>
    );
}
