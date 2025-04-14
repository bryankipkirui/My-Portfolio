import React from 'react'
import data from '../data.json';
import Project from '../components/Project';


const Projects = () => {
  return (
    <div className='mt-28'>
      <div className='w-full p-6'>
        <h1 className='text-center text-4xl font-bold'>Projects</h1>
        <div className='flex flex-col my-6 m-auto p-6 w- gap-6 md:flex-row md:flex-wrap md:justify-between'>
          {data.map(item => {
            return <Project
              item={item}
            />
          })}
        </div>
      </div>
    </div>
  )
}

export default Projects