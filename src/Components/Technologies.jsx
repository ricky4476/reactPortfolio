import React from 'react'
import { RiReactjsFill } from 'react-icons/ri'
import { RiJavascriptFill } from 'react-icons/ri'
import { RiHtml5Fill } from 'react-icons/ri'
import { RiCss3Fill } from 'react-icons/ri'
import { RiNodejsFill } from 'react-icons/ri'
import { RiTailwindCssFill } from 'react-icons/ri'
import {animate, motion } from 'framer-motion'
import { GiDuration } from 'react-icons/gi'

const iconVariantions = (duration) =>({
    initial:{y: -10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration ,
            ease: "linear",
            repeat : Infinity,
            repeatType:"reverse"

        }
    }


})

 const Technologies = () => {
  return (
    <div className='border-b  border-neutral-800 pb-25'>
        <motion.h1 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0 ,y:-100}}
        transition={{duration:0.5}}
        className='my-20 text-center text-4xl'>Techonologies </motion.h1>
        <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:1.5}}

        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
            variants={iconVariantions(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 ">
                <RiReactjsFill className='text-6xl text-cyan-700'/>
            </motion.div>
            <motion.div
            variants={iconVariantions(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 ">
                <RiJavascriptFill className='text-6xl text-yellow-700'/>
            </motion.div>
            <motion.div
            variants={iconVariantions(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 ">
                <RiHtml5Fill className='text-6xl text-orange-800'/>
            </motion.div>
            <motion.div
            variants={iconVariantions(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 ">
                <RiCss3Fill className='text-6xl text-blue-700'/>
            </motion.div>
            <motion.div
            variants={iconVariantions(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 ">
                <RiNodejsFill className='text-6xl text-green-400'/>
            </motion.div>
            <motion.div
            variants={iconVariantions(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 ">
                <RiTailwindCssFill className='text-6xl text-cyan-300'/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies