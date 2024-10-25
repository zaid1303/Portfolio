import {RiReactjsLine} from "react-icons/ri"
import {TbBrandNextjs} from "react-icons/tb"
import { SiMongodb } from "react-icons/si"
import { DiRedis } from "react-icons/di"
import { FaNodeJs } from "react-icons/fa"
import { BiLogoPostgresql } from "react-icons/bi"
import { FaDocker } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import {animate, motion} from "framer-motion"

const iconVariants=(duration)=>({
    intial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse"
        }
    }
})


export const Skill=()=>{
    return (
        <div className="pb-24 pt-10" id="skill">
            <h1 className="text-center pb-20">Skills</h1>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <motion.div 
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-nuetral-800 p-3">
                    <RiReactjsLine className="text-6xl text-cyan-400"/>
                </motion.div>
                <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-nuetral-800 p-3">
                    <TbBrandNextjs className="text-6xl"/>
                </motion.div>
                <motion.div
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                 className="rounded-2xl border-4 border-nuetral-800 p-3">
                    <SiMongodb className="text-6xl text-green-500"/>
                </motion.div>
                <motion.div
                variants={iconVariants(3.5)}
                initial="initial"
                animate="animate"
                 className="rounded-2xl border-4 border-nuetral-800 p-3">
                    <BiLogoPostgresql className="text-6xl text-sky-700"/>
                </motion.div>
                <motion.div
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                 className="rounded-2xl border-4 border-nuetral-800 p-3">
                    <FaNodeJs className="text-6xl text-green-500"/>
                </motion.div>
                <motion.div
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                 className="rounded-2xl border-4 border-nuetral-800 p-3">
                    <DiRedis className="text-6xl text-red-700"/>
                </motion.div>
                <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                 className="rounded-2xl border-4 border-nuetral-800 p-3">
                    <FaDocker className="text-6xl"/>
                </motion.div>
                <motion.div
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                 className="rounded-2xl border-4 border-nuetral-800 p-3">
                    <DiJavascript1 className="text-6xl text-yellow-300"/>
                </motion.div>
                <motion.div
                variants={iconVariants(3.5)}
                initial="initial"
                animate="animate"
                 className="rounded-2xl border-4 border-nuetral-800 p-3">
                    <SiTypescript className="text-6xl text-cyan-400"/>
                </motion.div>
            </div>
        </div>
    )
}