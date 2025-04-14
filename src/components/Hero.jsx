import React, { useState } from 'react'
import image from "../images/img2.jpg"
import Linker from './Linker'
import datas from '../data.json'

const Hero = () => {
    const [showMore, setShowMore] = useState(false);

    const statement =datas[0]?.info;
    

    const description = !showMore ? statement.substring(0, 120) + "..." : statement;
    return (
        <section className='mt-28 p-4'>
            <div className='flex flex-1 flex-col-reverse md:flex-row'>
                <div className='px-2 py-6 ml-10 w-full md:flex-1 '>
                    <h1 className='text-5xl mb-8 text-gray-900 font-extrabold font-sans'>Hi <br />I'm <span style={{ color: "orangered" }}>Bryan</span> <br /> a Frontend Developer</h1>
                    <div className='mb-6'>
                    <p className='text-md text-gray-700'>
                       {description} 
                    </p>
                    <button
                        onClick={()=>setShowMore(preVal => !preVal)}
                        className='block text-orange-600 hover:text-orange-900'
                    >
                        {showMore ? "See Less" : "See More"}
                    </button>
                    </div>
                    <div className='flex space-x-4'>
                        <Linker
                            ref='/contact'
                            text='Hire Me'
                            bg='bg-gray-900'
                        />
                        <Linker
                            ref=''
                            text='Resume'
                            bg='bg-orange-600'
                        />
                    </div>
                </div>
                <div className='mb-8 flex m-auto justify-center content-center'>
                    <img
                        className='rounded-full w-3/4 h-96 md:h-[500px] object-cover'
                        src={image}
                        alt="Logan"
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero