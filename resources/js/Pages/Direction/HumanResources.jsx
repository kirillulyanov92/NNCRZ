import { Head } from '@inertiajs/react';
import React from 'react';
import LayoutDirection from '@/Layouts/LayoutDirection';
import FolderChlank from '@/Components/FolderChlank';
import ChartHead from '@/Components/ChartHead'
import FileAccordTitle from '@/Components/FileAccordTitle';
import FileAccordChlank from '@/Components/FileAccordChlank';

export default function HumanResources() {
  return (
    <>
    <Head title="NNCRZ" />
    <section className="text-gray-600 body-font pb-8">
        <div className="container px-5 py-12 mx-auto">
          <div className='flex flex-wrap px-12 text-justify'>
            <p className="tracking-wide leading-relaxed">
                Департамент медицинского образования и науки – подразделение ННЦРЗ, главная миссия которого –
                содействовать развитию и модернизации медицинского образования и науки и способствовать внедрению
                инновационных технологий в отрасли и разработки эффективных управленческих решений.
            </p>
            <p className="tracking-wide my-4">
                Департамент вправе присваивать и пересматривать статус научной организации в области здравоохранения,
                проводить оценки результативности научной, научно-технической и инновационной деятельности.
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
        <div class="container pt-8 pb-24 mx-auto">
            <div className='flex md:flex-row flex-wrap'>

                <FolderChlank h1="Выпускникам" color="bg-red-100" colorsec="bg-red-200" />
                <FolderChlank h1="Руководителям" color="bg-red-100" colorsec="bg-red-200" />
                <FolderChlank h1="Медработникам" color="bg-red-100" colorsec="bg-red-200" />
            </div>
        </div>
    </section>
    <ChartHead />
    <section class="text-gray-600 body-font">
    <div class="container px-5 pt-24 mx-auto">
      <div class="flex flex-wrap px-5 pb-5 bg-red-100 rounded-2xl">
        <FileAccordTitle title="Кадровый дефицит" />
        <FileAccordChlank description="Моделирование новой формулы дефицита" filetype="xls" img={3} />
        <FileAccordChlank description="Обновленная методика определения дефицита КРЗ" filetype="pdf" img={2}/>
        <FileAccordTitle title="Планирование и прогнозирование кадровых ресурсов здравоохранения" />
        <FileAccordChlank description="Среднесрочный прогноз потребности в медкадрах г. Астана" filetype="xls" img={3}/>
        <FileAccordChlank description="Методика прогнозирования" filetype="pdf" img={2}/>
      </div>
    </div>
  </section>
    </>
  )
}

HumanResources.layout = (page) => <LayoutDirection img={'humanresources'} h1={'Кадровые ресурсы'}>{page}</LayoutDirection>;