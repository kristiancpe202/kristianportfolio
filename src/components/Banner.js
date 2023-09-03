import React from 'react';

import Image from '../assets/a1.png';

import { FaGithub, FaFacebook, FaTwitter } from 'react-icons/fa';

import { TypeAnimation } from 'react-type-animation';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';





const Banner = () => {
return ( <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
    <div className="container mx-auto"> 
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        {      }
        <div className='flex-1 text-cneter font-secondary lg:text-left'>
        <motion.h1 
        variants={fadeIn('up', 0.3)} 
        initial="hidden" 
        whileInView={'show'} 
        viewport={{once: false, amount:0.7}} 
        className='text-[55px] font-bold loading-[0.8] lg:text-[110px] mb-4'
        >
            KRISTIAN 
          </motion.h1 >
       
          <motion.div
          variants={fadeIn('up', 0.4)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once: false, amount:0.7}} 
          className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'
          >

            <span className='text-white mr-4'>I am a</span>
            <TypeAnimation sequence={[
              'Developer',
              2000,
              'Front end',
              2000,
              'Back end',
              2000,
            ]}
            speed={50}
            className='text-accent'
            wrapper='span'
            repeat={Infinity}
             />  
              
          </motion.div>
          <motion.p 
          variants={fadeIn('up', 0.4)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once: false, amount:0.7}} 
           className='mb-8 max-w-lg mx-auto lg:mx-0'>
            A hardworking programmer that has an aptitude for creating 
            solution in the last amount of time.
            and is also looking forward to use my
            programming skills for the growth of the organization
            and myself
            </motion.p>
            <motion.div 
            variants={fadeIn('up', 0.6)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once: false, amount:0.7}} 
           className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <button className='btn btn-lg'>Contact me</button>
              <a href='#' className='btn-link text-gradient'>
                My portfolio
            </a>
            </motion.div>
            {     }
            <motion.div
           variants={fadeIn('up', 0.7)} 
           initial="hidden" 
           whileInView={'show'} 
           viewport={{once: false, amount:0.7}} 
           className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href='#'>
                <FaFacebook />
              </a>
              <a href='#'>
                <FaGithub />
              </a>
              <a href='#'>
                <FaTwitter />
              </a>
            </motion.div>
        </div>
        {      }
        <motion.div 
          variants={fadeIn('down', 0.5)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once: false, amount:0.7}} 
        className='hidden lg:flex flex-1 max-x-[320px] lg:max-w-[482px]'>
          < img className='width-[482px] height-[516px]' src={Image} alt=''/>
        </motion.div>
      </div>
    </div>
    </section>




);
};

export default Banner;
