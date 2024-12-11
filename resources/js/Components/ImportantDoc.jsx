import React from 'react';
import FileAccordChlank from './FileAccordChlank';

function ImportantDoc({ bgcolor, title, description, filetype, img }) {
  return (
    <section class="text-gray-600 body-font">
        <div class="container px-5 pt-12 mx-auto">
            <div class={`flex flex-col md:flex-row-reverse justify-end items-center	 px-5 md:py-8 pb-5 ${bgcolor} rounded-2xl`}>
                <div className="flex w-full md:w-1/2 p-4 my-4 md:ml-24 ml-0">
                    <div className='flex'>
                        <h1 className="sm:text-xl text-lg font-semibold title-font text-gray-900">{title}</h1>
                    </div>
                </div>
                <FileAccordChlank description={description} filetype={filetype} img={img} />
            </div>
        </div>
    </section>
  )
}

export default ImportantDoc