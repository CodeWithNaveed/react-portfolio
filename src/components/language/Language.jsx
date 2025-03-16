import React from 'react';

export default function Language() {
  const languages = [
    { code: 'EN', name: 'English', level: 'Fluent' },
    { code: 'UR', name: 'Urdu', level: 'Native' },
  ];

  return (
    <section
      id='language'
      data-aos='fade-up'
      data-aos-delay='300'
      className='flex flex-col items-center justify-center gap-12 py-20 px-6 md:px-10 bg-gradient-to-b from-[#0b132b] to-[#1c2541] text-white'
    >
      <h2 className='text-4xl font-extrabold text-center mb-8 tracking-wide'>
        Languages
      </h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-12'>
        {languages.map((language, index) => (
          <div
            key={index}
            className='flex flex-col items-center bg-[#1c2541] rounded-xl p-6 shadow-lg hover:scale-105 transition-transform duration-300 w-full sm:w-60'
          >
            <div className='relative w-20 h-20 flex items-center justify-center bg-white rounded-full text-2xl font-semibold text-[#1c2541] shadow-lg'>
              {language.code}
              <div className='absolute w-full h-full rounded-full bg-gradient-to-b from-[#ff9743] to-[#ffe460] opacity-80 blur-xl'></div>
            </div>
            <span className='text-2xl font-semibold mt-4'>{language.name}</span>
            <span className='text-lg text-[#f4a261] font-medium mt-2'>{language.level}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
