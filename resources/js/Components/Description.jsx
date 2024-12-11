import React from 'react';

function Description({ paragraph }) {
  return (
    <section className="text-gray-600 body-font pb-8">
    <div className="container px-5 py-12 mx-auto">
        <div className='flex flex-wrap px-12 text-justify mb-4'>
            <p className="tracking-wide leading-relaxed">{paragraph}</p>
        </div>

        {/* Кнопка */}
        <div className="flex justify-center mt-4">
            <button className="cursor-pointer text-black inline-flex items-center border-gray-900 border-[1px]
    rounded-xl p-3 transition-all duration-150 ease-in">
                Читать далее
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    fill="currentColor">
                    <rect x="11.5" y="5" width="1" height="14" />
                    <rect x="5" y="11.5" width="14" height="1" />
                </svg>
            </button>
        </div>
    </div>
</section>
  )
}

export default Description