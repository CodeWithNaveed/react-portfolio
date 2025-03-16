import React from 'react';
import Navbar from '../navbar/Navbar';
import NaveedCV from './NaveedCV.pdf';
import heroimg from '../../assets/profile.png';

import { ReactTyped } from "react-typed";

export default function Home() {
    return (
        <div id='home' className='relative overflow-hidden min-h-screen flex flex-col bg-[#0b1120]'>

            {/* Background Gradient - Dark Masculine Theme */}
            <div className='absolute top-0 right-0 w-[750px] h-[750px] bg-gradient-to-r from-[#008cff] 
      via-[#005ea6] to-[#00274d] rounded-full transform rotate-12 -translate-y-20 blur-3xl opacity-60'></div>

            <Navbar />

            {/* Hero Section */}
            <section data-aos='fade-up' data-aos-delay='250' className='text-white relative z-10'>
                <div className='container mx-auto flex px-6 py-24 md:flex-row flex-col items-center'>

                    {/* Text Content */}
                    <div className='md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left'>
                        <div className='relative mb-6'>
                            <h1 className='text-4xl sm:text-5xl font-extrabold text-white leading-tight'>
                                Hi! I'm <span className='text-[#008cff]'>Naveed Ali</span>
                            </h1>
                            <h6 className="text-2xl font-bold text-white mt-4 border-b-4 border-[#008cff] drop-shadow-[2px_2px_2px_rgba(255,255,255,0.2)]">
                                <ReactTyped
                                    className="text-[#008cff]"
                                    strings={[
                                        "Web Developer",
                                        "App Developer",
                                        "MERN Stack Developer",
                                        "Full Stack Developer",
                                        "Frontend Developer",
                                        "Backend Developer",
                                        "UI/UX Designer",
                                        "Building Scalable Web Applications"
                                    ]}
                                    typeSpeed={50}
                                    backSpeed={40}
                                    loop
                                />
                            </h6>
                        </div>

                        <p className='text-lg text-gray-300 mb-8 leading-relaxed max-w-lg '>
                            Passionate about crafting powerful and dynamic web applications. I love problem-solving
                            and building efficient, high-performance UI experiences.
                        </p>

                        {/* Buttons */}
                        <div className='flex space-x-4'>
                            <a href={NaveedCV} download>
                                <button className='px-6 py-3 text-lg font-semibold text-white bg-[#008cff] rounded-full 
                shadow-lg hover:bg-[#005ea6] transition-all duration-300 hover:shadow-[#008cff]/50'>
                                    Download CV
                                </button>
                            </a>
                        </div>
                    </div>

                    {/* Hero Image - Masculine Style */}
                    <div className='md:w-1/2 flex justify-center mt-10 md:mt-0'>
                        <img
                            src={heroimg}
                            alt="Profile"
                            className='w-80 h-80 object-cover rounded-full shadow-2xl border-4 border-[#008cff]'
                        />
                    </div>

                </div>
            </section>
        </div>
    );
}
