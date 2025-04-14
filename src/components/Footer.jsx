import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaLinkedin, FaLinkedinIn, FaTwitter, FaWhatsapp } from 'react-icons/fa'


const Footer = () => {

  const year = new Date().getFullYear();
  console.log(year);

  return (
    <footer className='bg-gray-900 p-16'>
      <div
        className='flex flex-col space-y-4  m-auto'
      >
        <div className='flex space-x-4 m-auto'>
          <Link
            to="/"
          >
            <FaInstagram
              className='text-2xl text-orange-600  rounded-md transition ease-in-out delay-150  hover:-translate-y-2 hover:scale-110 hover:text-orange-800 duration-300'
            />
          </Link>
          <Link
            to="/"
          >
            <FaLinkedin
              className='text-2xl text-orange-600  rounded-md transition ease-in-out delay-150  hover:-translate-y-2 hover:scale-110 hover:text-orange-800 duration-300'
            />
          </Link>              
          <Link
            to="/"
          >
            <FaTwitter
              className='text-2xl text-orange-600  rounded-md transition ease-in-out delay-150  hover:-translate-y-2 hover:scale-110 hover:text-orange-800 duration-300'
            />
          </Link>              
          <Link
            to="/"
          >
            <FaWhatsapp
              className='text-2xl text-orange-600  rounded-md transition ease-in-out delay-150  hover:-translate-y-2 hover:scale-110 hover:text-orange-800 duration-300'
            />
          </Link>
        </div>
        <div className='flex m-auto space-x-4 text-gray-200'>
          <Link
            to="/"
            className='transition ease-in-out delay-150 hover:scale-110 hover:text-orange-600 hover:-translate-y-1'
          >Home</Link>
          <Link
            to="/"
            className='transition ease-in-out delay-150 hover:scale-110 hover:text-orange-600 hover:-translate-y-1'
          >Services</Link>
          <Link
            to="/about"
            className='transition ease-in-out delay-150 hover:scale-110 hover:text-orange-600 hover:-translate-y-1'
          >About Me</Link>
          <Link
            to="/contact"
            className='transition ease-in-out delay-150 hover:scale-110 hover:text-orange-600 hover:-translate-y-1'
          >Contacts</Link>
          <Link
            to="/projects"
            className='transition ease-in-out delay-150 hover:scale-110 hover:text-orange-600 hover:-translate-y-1'
          >Projects</Link>
        </div>
      </div>
      <p className='text-gray-200 text-center mt-3 text-xs'>@ {year} Hannah | All rights Reserved</p>
    </footer>
  )
}

export default Footer