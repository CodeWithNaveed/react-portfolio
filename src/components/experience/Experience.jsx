import React from 'react'
import certificate from '../../assets/certificate.jpg'

export default function Experience() {
  return (
    <section id='experience' className='relative overflow-hidden flex flex-col text-gray-300 body-font bg-[#0a192f]'>
        <div className='absolute top-[100px] left-64 inset-x-0 flex items-start justify-center'>
            <div className='h-96 w-96 bg-gradient-to-br from-[#1e3a8a] blur-2xl invisible opacity-40 rounded-full'></div>
            <div className='h-96 w-96 bg-gradient-to-r from-[#3b82f6] opacity-40 blur-2xl rounded-full'></div>
        </div>
        <div className='container m-auto flex px-8 py-24 md:flex-row flex-col items-center justify-center'>
            <div data-aos='fade-right' data-aos-delay='400' className='relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 '>
                <div className='md:h-[450px] h-[400px] md:w-[300px] w-[300px] md:right-36 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400 absolute rounded-md transform rotate-3 -top-8 shadow-[0_0_40px_rgba(59,130,246,0.7)] z-0'></div>
                <img src={certificate} className='object-contain w-[300px] h-[450px] rounded relative z-10 block m-auto' alt="Experience" />
            </div>
            <div data-aos='fade-left' data-aos-delay='400' className='lg:flex-grow md:w-1/2 lg:pl-8 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center'>
                <h1 className='title-font sm:text-4xl text-3xl mb-4 mt-7 font-medium text-blue-400'>Experience</h1>
                <p className='mb-8 text-white leading-relaxed'>I have gained hands-on experience in frontend and full-stack development through multiple internships and personal projects. My work includes:</p>
                <ul className='list-disc list-inside text-white'>
                    <li>Frontend Developer Intern at Shulateck Solutions - Worked on UI/UX enhancements and optimized web performance.</li>
                    <li>Web Developer Intern at Code Alpha - Contributed to building and maintaining web applications.</li>
                    <li>Frontend Developer Intern at Intern Intelligence - Focused on responsive design and React-based UI development.</li>
                    <li>Developed a movie promotional website using React, Express, MongoDB, and Node.js, integrating TMDB API.</li>
                    <li>Worked on a MERN stack YouTube and booking app clone.</li>
                </ul>
                <p className='mt-4 text-white'>My contributions have been recognized with certificates and positive feedback from mentors.</p>
            </div>
        </div>
    </section>
  )
}