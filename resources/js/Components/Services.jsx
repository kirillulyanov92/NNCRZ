import React from 'react';
import ServicesChlank from './ServicesChlank';

function Services() {
  return (
    <section className="text-gray-600 body-font">
        <div className="container px-5 pb-24 mx-auto">
            <div className="flex flex-row w-full justify-between mb-10">
                <div className='flex'>
                    <h1 className="sm:text-2xl text-2xl font-semibold title-font text-gray-900 mb-2">Услуги</h1>
                </div>
                <div className='flex'>
                    <a
                        className="cursor-pointer text-black inline-flex items-center border-gray-900 border-[1px] rounded-xl p-3">Все
                        услуги
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
            </div>
            <div className="flex flex-wrap -m-4">
                <ServicesChlank title="Аккредитация медицинских организаций и организаций здравоохранения"
                    bgcolor="bg-yellow-200" />
                <ServicesChlank title="Экспертиза лекарственных средств" bgcolor="bg-yellow-100" />
                <ServicesChlank title="Научно-медицинская экспертиза" bgcolor="bg-green-100" />
            </div>
        </div>
    </section>
  )
}

export default Services