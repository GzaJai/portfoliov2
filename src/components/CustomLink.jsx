import React from 'react'

const CustomLink = ({ text, href }) => {
  return (
    <a className='p-3 text-white rounded-4xl text-xl font-semibold hover:bg-white hover:text-indigo-400 cursor-pointer duration-200' href={href}>{text}</a>
  )
}

export default CustomLink