import React from 'react';

function Hero({img, h1}) {
  return (
    /* Main Hero */
    <section className="text-gray-600 body-font">
        <div className="container h-screen my-auto mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="w-full h-full">
                <img className="absolute inset-0 w-full h-full object-cover" alt="hero"
                    src={`./img/HeroImg/${img}.png`} />
                <div
                    className="relative lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-4xl my-auto font-semibold text-gray-900">
                        {h1}
                    </h1>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Hero