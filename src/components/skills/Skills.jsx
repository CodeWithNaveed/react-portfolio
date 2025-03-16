import React from 'react'
import javascript from '../../assets/javascript.png'
import html from '../../assets/html.png'
import css3 from '../../assets/css3.png'
import webdesign from '../../assets/web-design.png'
import canva from '../../assets/canva.svg'
import react from '../../assets/react.png'

export default function Skills() {
  return (
    <section id='skills' className='relative overflow-hidden flex flex-col text-white body-font'>
        <div className='container flex flex-wrap px-[3rem] py-24 mx-auto items-center'>
            <div 
            data-aos='fade-up' 
            data-aos-delay='200' 
            className='md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pd-10 border-b border-orange-400 px-[1rem]'>
                <h1 data-aos='fade-right' data-aos-delay='500' className='sm:text-4xl text-2xl font-medium title-font mb-2  text-orange-500 '>Skills</h1>
                <p data-aos='fade-right' data-aos-delay='500' className='leading-relaxed text-base'>
                I am an enthusiastic web developer with a passion for creating responsive and
                    visually appealing websites. I have a strong foundation in HTML, CSS,JavaScript, and I
                    strive
                    to enhance my skills to keep up with the latest trends in web development.My goal is to design user-friendly interfaces that provide an enjoyable
                    experience
                    for users across various devices. I enjoy tackling challenges and continuously learning new
                    technologies and frameworks to improve my craft.
                </p>
                <p data-aos='fade-right' data-aos-delay='500' className='leading-relaxed text-base  text-orange-500'>When I'm not coding, you can find me exploring new technologies, contributing
                    to
                    open-source projects, or sharing my knowledge with fellow developers. Let's create something
                    amazing
                    together!</p>
            </div>
            <div data-aos='fade-left' data-aos-delay='500' className='flex flex-col md:w-1/2 md:pl-12'>
            <nav className='flex flex-wrap list-none -mb-1 px-[1rem] '>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={javascript} alt="" className='rounded-full w-24 h-24 object-cover hover:translate-y-[-20px] duration-200'/>
                </li>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={html} alt="" className='rounded-full w-24 h-24 object-cover hover:translate-y-[-20px] duration-200'/>
                </li>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={css3} alt="" className='rounded-full w-24 h-24 object-cover hover:translate-y-[-20px] duration-200'/>
                </li>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={webdesign} alt="" className='rounded-full w-24 h-24 object-cover hover:translate-y-[20px] duration-200'/>
                </li>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={canva} alt="" className='rounded-full w-24 h-24 object-cover hover:translate-y-[20px] duration-200'/>
                </li>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={react} alt="" className='rounded-full w-24 h-24 object-cover hover:translate-y-[20px] duration-200'/>
                </li>
            </nav>
            </div>
        </div>
    </section>
  )
}
