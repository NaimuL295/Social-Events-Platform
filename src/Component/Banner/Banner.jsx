import React from 'react';
import { color, motion } from "motion/react"
import banner from "../../assets/banner.jpg"
const Banner = () => {
  
   return(
<>
<div className='   mx-auto '>  
<motion.div
  className="hero min-h-screen  "
 style={{ backgroundImage: `url(${banner})` }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <motion.div className="max-w-lg"
    
     initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
    >
    <motion.h1 
    className="mb-5 text-4xl font-bold">  Empower Your <motion.span
    animate={{color:["#06b90f ","#549857 " ,"#0fdc18 ","#16b91e ","#16cd00 "],
    transition:{duration:4, repeat:Infinity}
    }}>Community</motion.span>  </motion.h1>
      
      <p className="mb-5  text-base">
      Connect with passionate individuals and make a real difference in your local area. Be part of a
       growing movement of changemakers creating greener, kinder, and more inclusive communities.
      </p>
      <p>  </p>
      <button className="btn bg-green-500 border-none">Explore Events</button>
    </motion.div>
  </div>
</motion.div>
</div>

</>
   )
};

export default Banner;

