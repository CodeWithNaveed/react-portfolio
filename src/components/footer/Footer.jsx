import React from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className='bg-[#0b132b] text-white py-6 px-4 rounded-t-lg shadow-lg'>
      <div className='w-full mx-auto max-w-screen-xl flex flex-col md:flex-row items-center justify-between'>
        
        {/* Footer Branding */}
        <span className='text-lg font-semibold flex items-center space-x-2'>
          <MdOutlineEmail size={28} />
          <span className='text-gray-400'>Naveed Ali Abbasi</span>
        </span>

        {/* Social Media Links */}
        <ul className='flex space-x-6 mt-4 md:mt-0'>
          <li>
            <a href="https://www.facebook.com/naveedali.abbasi.12/" target='_blank' className='text-gray-400 hover:text-blue-500 transition duration-300'>
              <FaFacebook size={28} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/naveed-ali-9a6a71302/" target='_blank' className='text-gray-400 hover:text-blue-400 transition duration-300'>
              <FaLinkedin size={28} />
            </a>
          </li>
          <li>
            <a href="https://github.com/CodeWithNaveed" target='_blank' className='text-gray-400 hover:text-gray-200 transition duration-300'>
              <FaGithub size={28} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
