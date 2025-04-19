import React from 'react'

const Project = ({ item }) => {
    return (
        <div className='flex flex-col border rounded-xl py-6 px-4 items-center space-y-4'>
            <img
                className='rounded-xl h-96'
                src={item.image}
                alt={item.title}
            />
            <h2 className='text-2xl text-center font-bold'>{item.title}</h2>
            <p 
                className="text-gray-900 "
            >
                {item.details}
            </p>
            <div className='flex items-center space-x-5'>
                <button className='border-2 px-6 py-3 rounded-3xl'>GitHub</button>
                <button className='border-2 px-6 py-3 rounded-3xl'>Live Demo</button>
            </div>
        </div>
    )
}

export default Project