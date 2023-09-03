import React from 'react';

import CountUp from 'react-countup';

import { useInView } from 'react-intersection-observer';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return <section  className='section' id='about' ref={ref}> 
  <div className='container mx-auto'>
    <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
      {   }
      <motion.div 
      variants={fadeIn('right', 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: false, amount: 0.3}}
      className='flex-1 bg-about bg-contain bg-no-repeat h-[400px] mix-blend-lighten bg-top'></motion.div>
      {   }
      <motion.div 
      variants={fadeIn('left', 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: false, amount: 0.3}}
        className='flex-1'>
        <h2 className='h2 text-accent'>About Me</h2>
        <h3 className='h3 mb-4'>I'm a FreeLancer Front-End Developer</h3>
        <p className='mb-6'>a passionate front-end developer with a 
        love for creating beautiful and user-friendly websites.
         My journey in the world of web development began with
         a curiosity for turning ideas into interactive digital experiences.</p>
            {       }
        <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
          <div>
            <div className='text-[40px] font-tertiary mb-2'>
              {
                inView ?
                
                
                <CountUp start={0} end={3} duration={3} />
               :null }
               
            </div>
            <div className='front-primary text-sm tracking=[2px]'>years of <br/>Experience
            </div>
          </div>

          <div>
            <div className='text-[40px] font-tertiary mb-2'>
              {
                inView ?
                
                
                <CountUp start={0} end={3} duration={3} />
               :null }k+
            </div>
            <div className='front-primary text-sm tracking=[2px]'>projects <br/>complete
            </div>
          </div>
          <div>
            <div className='text-[40px] font-tertiary mb-2'>
              {
                inView ?
                
                
                <CountUp start={0} end={3} duration={3} />
               :null }k+
              
            </div>
            <div className='front-primary text-sm tracking=[2px]'>satisfied  <br/>costumer
            </div>
          </div>

        </div>
        <div className='flex gap-x-8 items-center'>
          <button className='btn btn-lg'>Contact me</button>
          <a href='#' className=' btn-link text-gradient'>
            My Portfolio
          </a>
        </div>
      </motion.div>
    </div>
  </div>
  </section>;
};

export default About;
