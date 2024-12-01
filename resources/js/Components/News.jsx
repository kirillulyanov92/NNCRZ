import React from 'react';
import News_chlank from './News_chlank';

function News() {
  return (
    <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="flex flex-row w-full justify-between text-center mb-10">
                <div className='flex'>
                <h1 className="sm:text-2xl text-2xl font-semibold title-font text-gray-900 mb-2">Новости</h1>
                </div>
                {/* <div className="flex justify-center">
                    <div className="w-full h-1 rounded-full bg-gray-500 inline-flex"></div>
                </div> */}
                <div className='flex'>
                <a className="cursor-pointer text-black inline-flex items-center border-gray-900 border-[1px] rounded-xl p-3">Все новости
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
                </div>
            </div>
            <div className="flex flex-wrap -m-4">
                <News_chlank date="2 января, 2024"
                    description="Эксперты ННЦРЗ принимают участие в Казахстанском Фармацевтическом Форуме & Kazakhstan Pharma Awards" />
                <News_chlank date="1 января, 2024"
                    description="25 слушателей завершили курс обучения по внешней комплексной оценке" />
            </div>
        </div>
    </section>
  )
}

export default News
