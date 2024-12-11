import { Head } from '@inertiajs/react';
import React from 'react';
import LayoutDirection from '@/Layouts/LayoutDirection';
import FolderChlank from '@/Components/FolderChlank';
import News from '@/Components/News';
import ImportantDoc from '@/Components/ImportantDoc';

export default function MedicalAccreditation() {
  return (
    <>
    <Head title="NNCRZ" />
    <section className="text-gray-600 body-font pb-8">
        <div className="container px-5 py-12 mx-auto">
            <div className='flex flex-wrap px-12 text-justify mb-4'>
                <p className="tracking-wide leading-relaxed">
                    Эффективность, доступность и безопасность — важнейшие аспекты развития здравоохранения в Республике
                    Казахстан. Для обеспечения этих стандартов в ННЦРЗ работает Департамент аккредитации. Аккредитация
                    медицинских организаций — ключевой инструмент для повышения качества медицинских услуг. Процесс
                    включает:
                    <ul className='list-disc list-inside px-12 my-4'>
                        <li>Добровольное участие заявителя.</li>
                        <li>Самооценку на основе стандартов аккредитации и собственных нормативов.</li>
                        <li>Внешнюю оценку качества по установленным стандартам.</li>
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
        <div className="container px-5 pt-8 mx-auto">
            <div className='flex md:flex-row flex-wrap'>
                <FolderChlank h1="Руководства" color="bg-yellow-200" colorsec="bg-yellow-300" />
                <FolderChlank h1="Эксперты внешней оценки" color="bg-yellow-200" colorsec="bg-yellow-300" />
                <FolderChlank h1="Обучающие материалы" color="bg-yellow-200" colorsec="bg-yellow-300" />
                <FolderChlank h1="Действующие стандарты и критерии аккредитации" color="bg-yellow-200"
                    colorsec="bg-yellow-300" />
                <FolderChlank h1="Архив стандартов" color="bg-yellow-200" colorsec="bg-yellow-300" />
            </div>
        </div>
    </section>
    <News />
    <ImportantDoc bgcolor="bg-yellow-200" title="Проверьте себя в списке аккредитованных медицинских организаций"
        description="Итоги аккредитации за 2024 год" filetype="pdf" img={2} />
    </>
  )
}

MedicalAccreditation.layout = (page) => <LayoutDirection img="medicalaccreditation" h1="Аккредитация медицинских организаций">{page}</LayoutDirection>
