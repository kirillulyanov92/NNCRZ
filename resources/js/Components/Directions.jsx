import React from 'react';
import DirectionsChlank from './DirectionsChlank';

function Directions() {
  return (
    <section className="text-gray-600 body-font">
        <div className="container px-5 pb-24 mx-auto">
            <div className="flex flex-row w-full justify-between text-center mb-10">
                <div className='flex'>
                    <h1 className="sm:text-2xl text-2xl font-semibold title-font text-gray-900 mb-2">Направления</h1>
                </div>
                <div className='flex'>
                    <a
                        className="cursor-pointer text-black inline-flex items-center border-gray-900 border-[1px] rounded-xl p-3">Все
                        направления
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
            </div>
            <div className="flex flex-wrap -m-4">
                <DirectionsChlank imgname={1} title="Медицинская наука" bgcolor="bg-green-100"
                    bgborder="border-green-200" />
                <DirectionsChlank imgname={2} title="Кадровые ресурсы" bgcolor="bg-rose-100"
                    bgborder="border-rose-200" />
                <DirectionsChlank imgname={3} title="Электронное здравоохранение" bgcolor="bg-fuchsia-100"
                    bgborder="border-fuchsia-200" />
                <DirectionsChlank imgname={4} title="Аккредитация" bgcolor="bg-yellow-100"
                    bgborder="border-yellow-200" />
                <DirectionsChlank imgname={5} title="Лекарственная политика" bgcolor="bg-violet-100"
                    bgborder="border-violet-200" />
                <DirectionsChlank imgname={6} title="Клинические протоколы" bgcolor="bg-blue-100"
                    bgborder="border-blue-200" />
            </div>
        </div>
    </section>
     )
}

export default Directions