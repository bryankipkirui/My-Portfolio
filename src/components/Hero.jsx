import React from 'react'
import image from "../images/img1.jpg"
import Button from './Button'

const Hero = () => {
  return (
    <section className='mt-28 p-4'>
        <div className='flex flex-1 flex-col-reverse md:flex-row'>
            <div className='px-2 py-6 ml-10 w-full md:flex-1 '>
                <h1 className='text-5xl mb-8 text-gray-900 font-extrabold font-sans'>Hi <br/>I'm <span style={{color: "orangered"}}>Bryan</span> <br/> a Frontend Developer</h1>
                <p className='text-md mb-6 text-gray-700'>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className='flex space-x-4'>
                    <Button
                        text='Hire Me'
                        bg='bg-gray-900'
                    />
                    <Button
                        text='Resume'
                        bg='bg-orange-600'
                    />
                </div>
            </div>
            <div className='mb-8 flex m-auto justify-center content-center'>
                <img 
                    className='rounded-full w-2/4 h-96 md:h-[500px]'
                    src={image} 
                    alt="Logan" 
                />
            </div>
        </div>
    </section>
  )
}

export default Hero