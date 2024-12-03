import React from 'react'

function SponsorsChlank({ description }) {
  return (
    <div className="p-4 md:w-1/3 w-full">
        <div className="h-full bg-gray-100 bg-opacity-75 px-8 py-8 rounded-lg overflow-hidden md:text-left text-center relative">
            <h1 className="title-font sm:text-sm text-sm font-medium text-gray-900 capitalize">{description}</h1>
        </div>
    </div>
  )
}

export default SponsorsChlank