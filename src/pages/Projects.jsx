import React, { useEffect, useState } from 'react'
// import data from '../data.json';
import Project from '../components/Project';


const Datas = () => {
  const [datas, setDatas] = useState([]);
  const url = "http://localhost:8000/data";
  useEffect(()=>{
    const fetchData = async()=>{
      try {
        const res = await fetch(url);
        if (!res.ok){
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setDatas(data);
      } catch (error) {
        console.log("Error:", error)
      }
    }
    fetchData();
  }, [])

  return (
    <div className='mt-28'>
      <div className='w-full p-6'>
        <h1 className='text-center text-4xl font-bold'>Projects</h1>
        <div className='flex flex-col my-6 m-auto p-6 w- gap-6 md:flex-row md:flex-wrap md:justify-between'>
          {datas.map( (item, index) => {
            return <Project
              key={index}
              item={item}
            />
          })}
        </div>
      </div>
    </div>
  )
}

export default Datas