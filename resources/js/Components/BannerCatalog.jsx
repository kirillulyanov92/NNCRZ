import React from 'react'

function BannerCatalog() {
  return (
    <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 pb-24 items-center justify-center flex-col">
            <div className='relative w-full flex flex-col items-center content-center'>
                <img className="inset-0 w-full h-96 object-cover rounded-2xl" alt="catalog-program" src="./img/banner.png" />
                <div className="absolute text-center h-full w-full align-middle items-center md:content-center content-end justify-between">
                    <div className='flex justify-center mb-1'>
                        <img className='w-24 h-24' src="https://img.icons8.com/emoji/96/open-book-emoji.png" alt="open-book-emoji"/>
                    </div>
                    <h1 className="title-font sm:text-4xl text-3xl md:mb-4 mb-6 font-semibold text-gray-900">Каталог образовательных программ</h1>
                    <div className="flex justify-center px-4 md:mb-0 mb-8">
                        <button
                            className="md:w-auto w-full items-center text-white bg-green-900 border-0 py-3 px-6 transition ease-in duration-150 focus:outline-none hover:bg-green-600 hover:shadow-lg rounded-lg text-lg">Перейти в каталог</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BannerCatalog