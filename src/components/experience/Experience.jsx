import React from 'react'
import certificate from '../../assets/certificate.jpg'

export default function Experience() {
  return (

    <section id='experience' className='relative overflow-hidden flex flex-col text-gray-600 body-font'>
        <div className='absolute top-[100px] left-64 inset-x-0 flex items-start justify-center'>
            <div className='h-96 w-96 bg-gradient-to-br from-[#ff910a] blur-2xl invisible opacity-40 rounded-full'></div>
            <div className='h-96 w-96 bg-gradient-to-r from-[#ffdb12] opacity-40 blur-2xl rounded-full'></div>
        </div>
        <div className='container m-auto flex px-8 py-24 md:flex-row flex-col items-center justify-center'>
            <div data-aos='fade-right' data-aos-delay='400' className='relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 '>
             <div className='md:h-[450px] h-[400px]  md:w-[300px] w-[300px] md:right-36 bg-gradient-to-r from-orange-600 via-yellow-500 to-red-400 absolute rounded-md transform rotate-3 -top-8 shadow-[0_0_40px_rgba(225,165,0,0.7)] z-0'></div>
            <img src={certificate} className='object-containe  w-[300px] h-[450px]  rounded relative z-10 block m-auto ' alt="Experience" />
            </div>
        <div data-aos='fade-left' data-aos-delay='400' className='lg:flex-grow md:w-1/2 lg:pl-8 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center '>
            <h1 className='title-font sm:text-4xl text-3xl mb-4 mt-7 font-medium text-orange-500 '>Experience</h1>
            {/* <h2 className='title-font font-bold text-white sm:text-2xl '>2023 :</h2>
            <p className='mb-8 text-white leading-relaxed '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptate soluta, inventore veritatis quo odio repellat ad atque veniam aspernatur consectetur ipsum quis repellendus necessitatibus, ipsam nulla dolor id laudantium!</p> */}
            <h2 className='title-font font-bold text-white sm:text-2xl '>2024 :</h2>
            <p className='mb-8 text-white leading-relaxed '>During my 3-month internship at SAMZ Technologies, I gained hands-on experience in web and mobile app development, working with technologies such as HTML, CSS, JavaScript and React. I contributed to building responsive web pages and mobile applications, focusing on performance and user experience. My efforts were recognized with a certificate of completion for successfully contributing to multiple projects.</p>
        </div>
        </div>
    </section>

  )
}
