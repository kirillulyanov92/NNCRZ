import React from 'react';

function FileAccordChlank({ description, filetype, img }) {
  return (
    <div class="p-4 lg:w-1/3">
        <div class="flex flex-col h-[250px] bg-white p-8 rounded-xl text-left content-between justify-between">
            <div className='flex'>
                <h1 class="font-medium leading-relaxed mb-3">{description}</h1>
            </div>
            <div className="flex mt-4 justify-between">
                <button
                    className="cursor-pointer text-black inline-flex items-center border-gray-900 border-[1px] rounded-xl p-3">
                    Открыть
                </button>
                <div className='flex flex-col text-sm my-auto'>
                    <div className='flex flex-row'>
                        <img src={`./img/FileType/${img}.png`} alt="" />

                        <p className='ml-1 uppercase'>{filetype}, 24 KB</p>
                    </div>
                    <p className='text-gray-400 self-end'>27.03.2024</p>

                </div>
            </div>

        </div>
    </div>
  )
}

export default FileAccordChlank