import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp } from 'react-icons/fa'


const Footer = () => {

  const year = new Date().getFullYear();
  console.log(year);
  
  return (
    <footer className='bg-gray-900 p-16'>
        <div
            className='flex flex-col space-y-4  m-auto'
        >
            <div className='flex space-x-4 m-auto'>
              <FaInstagram
                className='text-2xl text-orange-600  rounded-md transition ease-in-out delay-150  hover:-translate-y-2 hover:scale-110 hover:text-orange-800 duration-300'
              />
              <FaLinkedinIn
                className='text-2xl text-orange-600  rounded-md transition ease-in-out delay-150  hover:-translate-y-2 hover:scale-110 hover:text-orange-800 duration-300'
              />
              <FaTwitter
                className='text-2xl text-orange-600  rounded-md transition ease-in-out delay-150  hover:-translate-y-2 hover:scale-110 hover:text-orange-800 duration-300'
              />
              <FaWhatsapp
                className='text-2xl text-orange-600  rounded-md transition ease-in-out delay-150  hover:-translate-y-2 hover:scale-110 hover:text-orange-800 duration-300'
              />
            </div>
            <div className='flex m-auto space-x-4 text-gray-200'>
              <Link
                to="/"
                className='transition ease-in-out delay-150 hover:scale-110 hover:text-orange-600 hover:-translate-y-1'
              >FAQ</Link>
              <Link
                to="/"
                className='transition ease-in-out delay-150 hover:scale-110 hover:text-orange-600 hover:-translate-y-1'
              >Services</Link>
              <Link
                to="/"
                className='transition ease-in-out delay-150 hover:scale-110 hover:text-orange-600 hover:-translate-y-1'
              >About Me</Link>
              <Link
                to="/"
                className='transition ease-in-out delay-150 hover:scale-110 hover:text-orange-600 hover:-translate-y-1'
              >Contacts</Link>
              <Link
                to="/"
                className='transition ease-in-out delay-150 hover:scale-110 hover:text-orange-600 hover:-translate-y-1'
              >Privacy Policy</Link>
            </div>
        </div>
        <p className='text-gray-200 text-center mt-3 text-xs'>@ {year} Hannah | All rights Reserved</p>
    </footer>
  )
}

export default Footer