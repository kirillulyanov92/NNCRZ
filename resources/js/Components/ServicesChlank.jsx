import React from 'react'

function ServicesChlank({title, bgcolor}) {
  return (
    <div className="p-4 lg:w-1/3">
        <div className={`h-full ${bgcolor} border-b-8 bg-opacity-75 px-8 py-10 rounded-lg overflow-hidden text-left relative`}>
            <h1 className="title-font sm:text-xl text-lg font-medium text-gray-900 mb-3">{title}</h1>
            <a
                className="cursor-pointer mt-3 text-black inline-flex items-center border-gray-900 border-[1px] rounded-xl p-3">Перейти
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </a>
        </div>
    </div>

  )
}

export default ServicesChlank