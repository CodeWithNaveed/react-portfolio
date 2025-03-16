
import React from 'react'
import Slider from 'react-slick'
import './project.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.png'
import img5 from '../../assets/img5.png'
import img6 from '../../assets/img6.png'
import img7 from '../../assets/img7.png'
import img8 from '../../assets/img8.png'
import img9 from '../../assets/img9.png'
import img10 from '../../assets/img10.png'
import img11 from '../../assets/img11.png'
import img12 from '../../assets/img12.png'
import img13 from '../../assets/img13.png'
import img14 from '../../assets/img14.png'
import img15 from '../../assets/img15.png'
import img16 from '../../assets/img16.png'
import img17 from '../../assets/img17.png'

export default function Projects() {
    const listProjects = [
        {id:1, image:img4, title:'Porfolio(HTML,CSS & JS)',demo_link:'https://hunzatalha786.github.io/My-Porfolio/',repo_link:"https://github.com/HunzaTalha786/My-Porfolio"},
        {id:2, image:img5, title:' Pregnancy Diet Exercise App',demo_link:'https://hunzatalha786.github.io/Pregnancy-Diet-And-Exercise-App/',repo_link:'https://github.com/HunzaTalha786/Pregnancy-Diet-And-Exercise-App' },
        {id:3, image:img6, title:'Porfolio(React & TailwindCss)',demo_link:'https://portfolio-with-react-1.netlify.app/',repo_link:'https://github.com/HunzaTalha786/Portfolio-React'},
        {id:4, image:img1, title:'Nike Landing Page',demo_link:'https://hunzatalha786.github.io/Nike-Responsive-Landing-Page/',repo_link:'https://github.com/HunzaTalha786/Nike-Responsive-Landing-Page' },
        {id:5, image:img2, title:'Creativee Landing Page',demo_link:'https://hunzatalha786.github.io/Project-2-Responsive-Landing-Page/',repo_link:'https://github.com/HunzaTalha786/Project-2-Responsive-Landing-Page'},
        {id:6,image:img3, title:'Techno- web',demo_link:'https://hunzatalha786.github.io/Bootstrap/',repo_link:'https://github.com/HunzaTalha786/Bootstrap'},
        {id:7,image:img7, title:'Snake Game',demo_link:'https://hunzatalha786.github.io/Snake-Game/',repo_link:'https://hunzatalha786.github.io/Snake-Game/'  },
        {id:8,image:img8, title:'JavaScript Event Tracker',demo_link:'https://hunzatalha786.github.io/JavaScript-Event-Tracker/',repo_link:'https://github.com/HunzaTalha786/JavaScript-Event-Tracker'  },
        {id:9,image:img9, title:'Array manipulater App',demo_link:"https://hunzatalha786.github.io/Array-Manipulator/",repo_link:"https://github.com/HunzaTalha786/Array-Manipulator" },
        {id:10,image:img10 ,title:"Rock Paper Scissor Game" ,demo_link:"https://hunzatalha786.github.io/Rock-Paper-Scissor-Game/",repo_link:"https://github.com/HunzaTalha786/Rock-Paper-Scissor-Game"  },
        {id:11 , image:img11, title:'Dice Roller App',demo_link:"https://hunzatalha786.github.io/Dice-Roller-App/", repo_link:"https://github.com/HunzaTalha786/Dice-Roller-App"},
        {id:12 , image: img12, title:'Timer(React &Tailwind)',demo_link:"https://timer-useeffect-hook.netlify.app/", repo_link:"https://github.com/HunzaTalha786/Timer-UseEffect-Hook"},
        {id:13 , image: img13, title:'API Data Fetching(React)',demo_link:"https://api-fetching-project.netlify.app/", repo_link:"https://github.com/HunzaTalha786/API-Fetching-UseEfeect-Hook"},
        {id:14 , image: img14, title:'Todo-List(React)',demo_link:"https://project-list12.netlify.app/", repo_link:"https://github.com/HunzaTalha786/Todo-List"},
        {id:15 , image:img15 , title:'Bg-Color Changer(React)',demo_link:"https://react-bg-color-changer2.netlify.app/", repo_link:"https://github.com/HunzaTalha786/Bg-Color-Changer-React"},
        {id: 16, image: img16, title:'Unique Bike(Website)',demo_link:"https://hunzatalha786.github.io/Unique-Bike/", repo_link:"https://github.com/HunzaTalha786/Unique-Bike"},
        {id:17 , image: img17, title:'Stop Watch(React)',demo_link:"https://stopwatch-react1.netlify.app/", repo_link:"https://github.com/HunzaTalha786/Stopwatch-With-React"},
    ];

    const settings = {
      // dots: true,
        infinite: true,
        slidesToShow: 3, // Default for larger screens
        slidesToScroll: 1,
        arrows: true,
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 1024, // For tablets and medium screens
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 768, // For mobile screens
            settings: {
              slidesToShow: 1,
              centerMode: false, 
            },
          },
        ],
      };

  return (
    <section data-aos='fade-up' data-aos-delay='400' id='projects' className='relative overflow-hidden flex flex-col text-white body-font'>
        <div className='container px-8 pt-[9rem] pb-[2rem] mx-auto'>
            <h2 className='text-4xl font-bold text-center mb-12'>My Projects</h2>
            <Slider {...settings}>
                {
                    listProjects.map((project)=>{
                        return(
                        <div key={project.id} className='p-4'>
                            <div className='h-full border-2 border-orange-400 shadow-[0_0_15px_rgba(255,165,0,0.7)] border-opacity-60 rounded-lg overflow-hidden'>
                                <img src={project.image} alt={project.title} className='w-full h-auto lg:h-48 md:h-34 sm:h-24 object-cover object-center' />
                                <div className='p-6'>
                                    <h2 className='tracking-widest text-xl title-font font-medium text-gray-400 mb-1'>{project.title}</h2>
                                    <button className='inline-flex text-white bg-orange-500 border-0 py-2 px-6 
                        focus:outline-none hover:bg-orange-600 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)]
                        rounded-full text-lg mb-3 mt-2'><a href={project.demo_link} target="_blank" rel="noopener noreferrer">Demo</a></button><br />
                                    <button className='inline-flex text-white bg-orange-500 border-0 py-2 px-6 
                        focus:outline-none hover:bg-orange-600 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)]
                        rounded-full text-lg'><a href={project.repo_link} target="_blank" rel="noopener noreferrer">Github Repository</a></button>
                                </div>
                            </div>
                        </div>
                        );
                    })
                }
            </Slider>
        </div>
    </section>
  );
}
