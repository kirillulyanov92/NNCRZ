import React from 'react';

function JobsChlank({ title, date, needs }) {
  return (
    <div className="w-full">
        <div className="flex border-2 rounded-lg bg-red-100 border-red-200 border-opacity-50 p-8 sm:flex-row flex-col">
            <div className="flex-grow">
                <p className="leading-relaxed text-base mb-2">{date}</p>
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3 line-clamp-2">{title}</h2>
                <p className="leading-relaxed text-base my-2">{needs}</p>
                <a
                    className="cursor-pointer mt-3 text-black inline-flex items-center border-gray-900 border-[1px] rounded-xl p-3">Открыть вакансию
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

export default JobsChlank