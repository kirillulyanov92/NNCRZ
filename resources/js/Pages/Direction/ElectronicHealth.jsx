import { Head } from '@inertiajs/react';
import React from 'react';
import LayoutDirection from '@/Layouts/LayoutDirection';
import FolderChlank from '@/Components/FolderChlank';

export default function ElectronicHealth() {
  return (
    <>
    <Head title='NNCRZ' />
    <section className="text-gray-600 body-font pb-8">

        <div className="container px-5 py-12 mx-auto">
            <div className='flex flex-wrap px-12 text-justify'>
                
            <p className="tracking-wide leading-relaxed">
                Департамент стандартов электронного здравоохранения ННЦРЗ – это команда экспертов, которые занимаются
                изучением лучших практик в области здравоохранения, разработкой на их основании программ, внедряемых в
                систему здравоохранения РК и последующей оценкой их эффективности. Главные задачи Департамента –
                развитие и совершенствование информационной структуры системы здравоохранения. Для их реализации
                работают два управления:
            <ul className='list-disc list-inside px-12 my-4'>
                <li>Cовершенствования стандартов и регуляторной базы электронного здравоохранения.</li>
                <li>Методологического сопровождения цифровизации здравоохранения.</li>
            </ul>
            </p>
            </div>
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
    <section className="text-gray-600 body-font">
        <div className="container px-5 pt-8 pb-24 mx-auto">
            <div className='flex md:flex-row flex-wrap'>
                <FolderChlank h1="МКБ-11" color="bg-fuchsia-100" colorsec="bg-fuchsia-200" />
                <FolderChlank h1="Нормативно-правовые акты" color="bg-fuchsia-100" colorsec="bg-fuchsia-200" />
                <FolderChlank h1="Стандарты" color="bg-fuchsia-100" colorsec="bg-fuchsia-200" />
            </div>
        </div>
    </section>
    </>    
  )
}

ElectronicHealth.layout = (page) => <LayoutDirection img={'electronichealth'} h1={'Электронное здравоохранение'}>{page}</LayoutDirection>
