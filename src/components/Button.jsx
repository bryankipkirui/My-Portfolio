import React from 'react'

const Button = ({ text, bg }) => {
  return (
  <button
    className={`${bg} py-2 px-4 text-center text-gray-200 rounded-lg`}
  >{text}
  </button>
)
}

export default Button