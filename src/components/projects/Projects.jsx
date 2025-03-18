import React from 'react';
import Slider from 'react-slick';
import './project.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';
import img4 from '../../assets/img4.png';
import img5 from '../../assets/img5.png';
import img6 from '../../assets/img6.png';
import img7 from '../../assets/img7.png';
import img8 from '../../assets/img8.png';
import img9 from '../../assets/img9.png';
import img10 from '../../assets/img10.png';


export default function Projects() {
  const listProjects = [
    { 
      image: img7, 
      title: 'Booking App (MERN)', 
      demo_link: ' ',
      repo_link: ' '  
    },
    { 
      image: img6, 
      title: 'YouTube Clone (MERN)', 
      demo_link: 'https://you-tube-clone-eight-pink.vercel.app/', 
      repo_link: 'https://github.com/CodeWithNaveed/YouTube-clone-react-client' 
    },
    { 
      image: img5, 
      title: 'Tesla Clone (React)', 
      demo_link: 'https://tesla-clone-psi-five.vercel.app/',
      repo_link: 'https://github.com/CodeWithNaveed/tesla-clone' 
    },
    { 
      image: img4, 
      title: 'Apple Clone', 
      demo_link: 'https://naveed-apple-clone.netlify.app/', 
      repo_link: 'https://github.com/CodeWithNaveed/Apple_Clone' 
    },
    {
      image: img3, 
      title: 'Amazon Clone', 
      demo_link: 'https://naveed-amazon-clone.netlify.app/', 
      repo_link: 'https://github.com/CodeWithNaveed/Amazon_Clone' 
    },
    { 
      image: img2, 
      title: 'OLX-clone', 
      demo_link: 'https://naveed-olx-clone.netlify.app/', 
      repo_link: 'https://github.com/CodeWithNaveed/OLX-clone' 
    },
    {
      image: img10, 
      title: 'Our Menu', 
      demo_link: 'https://naveed-dom-assignment.netlify.app/our%20manu/index.html', 
      repo_link: 'https://github.com/CodeWithNaveed/DOM-assignment/tree/main/our%20manu'
    },
    {
      image: img9, 
      title: 'usePopcorn (React)', 
      demo_link: 'https://react-project-09.vercel.app/', 
      repo_link: 'https://github.com/CodeWithNaveed/react-project-09'
    },
    {
      image: img8, 
      title: 'Todo App (React, Context API & Local Storage)', 
      demo_link: 'https://context-api-local-storage-rho.vercel.app/', 
      repo_link: 'https://github.com/CodeWithNaveed/contextAPI-LocalStorage'
    },
    { 
      image: img1, 
      title: 'Country App', 
      demo_link: 'https://country-app-ap.netlify.app/', 
      repo_link: 'https://github.com/CodeWithNaveed/country-app-Api-' 
    },
  ];

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section id='projects' className='relative overflow-hidden flex flex-col text-white body-font'>
      <div className='container px-8 pt-24 pb-12 mx-auto'>
        <h2 data-aos='fade-up' data-aos-delay='400' className='text-4xl font-bold text-center mb-12 text-blue-500'>My Projects</h2>
        <Slider {...settings}>
          {listProjects.map((project, index) => (
            <div key={index} className='p-4'>
              <div className='h-[350px] w-full border-2 border-blue-500 shadow-lg border-opacity-60 rounded-lg overflow-hidden bg-gray-900 flex flex-col'>
                <img src={project.image} alt={project.title} className='w-full h-[180px] object-fill object-center' />
                <div className='p-4 flex flex-col flex-grow justify-between'>
                  <h2 className='text-xl font-medium text-blue-400 mb-2'>{project.title}</h2>
                  <div className='flex gap-4'>
                    <a href={project.demo_link} target='_blank' rel='noopener noreferrer' className='text-white bg-blue-600 px-6 py-2 rounded-full hover:bg-blue-700'>Demo</a>
                    <a href={project.repo_link} target='_blank' rel='noopener noreferrer' className='text-white bg-blue-600 px-6 py-2 rounded-full hover:bg-blue-700'>GitHub</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
