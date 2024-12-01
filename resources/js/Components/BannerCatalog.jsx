import React from 'react'

function BannerCatalog() {
  return (
    <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 pb-24 items-center justify-center flex-col">
            <div className='relative w-full flex flex-col items-center content-center rounded-3xl'>
                <img className="inset-0 w-full h-full object-cover rounded-2xl" alt="hero" src="./img/banner.png" />
                <div className="absolute text-center h-full w-full align-middle  items-center content-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Каталог образовательных программ</h1>
                    <div className="flex justify-center">
                        <button
                            className="inline-flex text-white bg-green-900 border-0 py-2 px-6 transition ease-in duration-150 focus:outline-none hover:bg-green-600 hover:shadow-lg rounded-lg text-lg">Перейти в каталог</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BannerCatalog