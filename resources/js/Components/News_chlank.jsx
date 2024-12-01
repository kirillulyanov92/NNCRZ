import React from 'react'

function News_chlank({ date, description }) {
  return (
    <div className="p-4 lg:w-1/2 md:w-full">
        <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
            <div className="flex-grow">
                <p className="leading-relaxed text-base mb-1">{date}</p>
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">{description}</h2>
                <a className="cursor-pointer mt-3 text-black inline-flex items-center border-gray-900 border-[1px] rounded-xl p-3">Читать Новость
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
            </div>
        </div>
    </div>
  )
}

export default News_chlank