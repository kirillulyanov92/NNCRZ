import { Head } from '@inertiajs/react';
import React from 'react';
import FolderChlank from '@/Components/FolderChlank';
import LayoutDirection from '@/Layouts/LayoutDirection';
import FileAccordTitle from '@/Components/FileAccordTitle';
import FileAccordChlank from '@/Components/FileAccordChlank';

export default function HealthRate() {
  return (
    <>
    <Head title='NNCRZ' />
    <section className="text-gray-600 body-font pb-8">
        <div className="container px-5 py-12 mx-auto">
            <div className='flex flex-wrap px-12 text-justify mb-4'>
                <p className="tracking-wide leading-relaxed">
                    Национальные счета здравоохранения – статистические данные, благодаря которым проводится регулярный,
                    всесторонний и последовательный мониторинг финансовых потоков в системе здравоохранения страны. Это
                    крайне важно для справедливого распределения ресурсов как для профилактики заболеваний, так и
                    лечения населения страны.
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
    <section class="text-gray-600 body-font">
        <div class="container px-5 pt-8 mx-auto">
            <div className='flex md:flex-row flex-wrap'>

                <FolderChlank h1="Отчеты ОМТ" color="bg-fuchsia-100" colorsec="bg-fuchsia-200" />
                <FolderChlank h1="Объединенная комиссия по качеству медицинских услуг" color="bg-fuchsia-100"
                    colorsec="bg-fuchsia-200" />
            </div>
        </div>
    </section>
    <section class="text-gray-600 body-font">
        <div class="container px-5 pt-24 mx-auto">
            <div class="flex flex-wrap px-5 pb-5 bg-fuchsia-100 rounded-2xl">
                <FileAccordTitle title="Приказы" />
                <FileAccordChlank description="1. Расходы на здравохранение по регионам (НС-НР)" filetype="pdf" img={2} />
                <FileAccordChlank description="2. Распределение по мед.помощи по регионам" filetype="pdf" img={2} />
                <FileAccordChlank description="3. Расходы на мед.услуги по виду финансирования по регионам" filetype="pdf" img={2} />

                <FileAccordTitle title="Методические рекомендации" />
                <FileAccordChlank description="Совершенствование системы оценки медицинских технологий" filetype="pdf"
                    img={2} />
            </div>
        </div>
    </section>
    </>
  )
}

HealthRate.layout = (page) => <LayoutDirection img="healthrate" h1="Оценка технологий здравоохранения" >{page}</LayoutDirection>