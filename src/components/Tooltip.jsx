import React from 'react'

const Tooltip = ({ textContent, children }) => {
  return (
    <div className="relative group w-fit">
        {children}

        <div className="
            absolute bottom-full mb-2 left-1/2 -translate-x-1/2
            opacity-0 translate-y-1
            group-hover:opacity-100 group-hover:translate-y-0
            transition-all duration-200
            pointer-events-none
            bg-neutral-900/90 backdrop-blur-md
            text-white text-sm px-3 py-1.5 rounded-lg
            shadow-xl
        ">
            {textContent}
        </div>
    </div>
  )
}

export default Tooltip