import React from 'react'
import { Link } from 'react-router-dom'

const Linker = ({ text, bg, to, isExternal }) => {
  const className = `${bg} py-2 px-4  text-center text-gray-200 cursor-pointer rounded-lg`;
  return isExternal ? (
      <a href={to} className={className} target='_blank'>
        {text}
      </a>)
      :
    ( <Link
        to={to}
        className={className}>
          {text}
      </Link>)
}

export default Linker