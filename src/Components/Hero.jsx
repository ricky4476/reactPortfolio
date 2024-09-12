import {HERO_CONTENT} from "../constants"
import profilePic from '../assets/shabbir.jpg'
import { motion } from "framer-motion"
import { TypeAnimation } from 'react-type-animation';

const container = (delay) =>({
  hidden: { x: -100, opacity:0},
  visible:{
    x:0,
    opacity:1,
    transition:{duration:0.5, delay}
  }
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center  px-10 lg:items-start">
                <motion.h1 
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className="pb-10 text-5xl font-thin tracking-tight lg:mt-10 lg:text-6xl" >Shabbir Hossain</motion.h1>
                {/* <TypeAnimation sequence={[
                'Front-End Web Developer . ',
                2000,
                // 'PHP(Laravel) Developer .',
                // 2000,
                'React.js Developer .',
                2000,
                'Web Designer .',
                2000,
                'UI/UX Designer .',
                2000,
              ]}
                speed={50}
                className="bg-gradient-to-r from-blue-700 via-slate-400  to-cyan-500 bg-clip-text text-3xl tracking-wide text-transparent "
                wrapper='span'
                repeat={Infinity}
              /> */}
                <motion.span 
                 variants={container(0.8)}
                 initial="hidden"
                 animate="visible"
                
                className="bg-gradient-to-r from-blue-700 via-slate-400  to-cyan-500 bg-clip-text text-3xl tracking-wide text-transparent">
                  Front-End Web Develepoer
                </motion.span>
                <motion.p 
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className="my-2 max-w-xxl py-6  font-light  text-neutral-300">
                  {HERO_CONTENT}
                </motion.p>
            </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center">
              <motion.img 
               initial={{x: 100, opacity:0}}
               animate={{x:0, opacity:1}}
               transition={{duration:1, delay:1.2}}

              className="h-96" src={profilePic} alt="SHABBIR HOSSAIN" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Hero