import React from 'react'
import { Link } from 'react-router-dom'

const Linker = ({ text, bg, ref }) => {
  return (
  <Link
    to={ref}
    className={`${bg} py-2 px-4  text-center text-gray-200 cursor-pointer rounded-lg`}>
      {text}
  </Link>
)
}

export default Linker