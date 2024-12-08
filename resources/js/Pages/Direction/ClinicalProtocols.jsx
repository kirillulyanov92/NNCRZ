import { Head } from '@inertiajs/react';
import React from 'react';
import LayoutDirection from '@/Layouts/LayoutDirection';
import FolderChlank from '@/Components/FolderChlank';
import FileAccordTitle from '@/Components/FileAccordTitle';
import FileAccordChlank from '@/Components/FileAccordChlank';

export default function ClinicalProtocols() {
  return (
    <>
    <Head title='NNCRZ' />
    <section className="text-gray-600 body-font pb-8">
        <div className="container px-5 py-12 mx-auto">
            <div className='flex flex-wrap px-12 text-justify mb-4'>
                <p className="tracking-wide leading-relaxed">
                    Клинический протокол — научно доказанные рекомендации по профилактике, диагностике, лечению,
                    медицинской реабилитации и паллиативной медицинской помощи при определенном заболевании или
                    состояниях пациентов в соответствии с законодательством Республики Казахстан.
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
        <div className="container pt-8 mx-auto">
            <div className='flex flex-wrap'>
                <FolderChlank h1="Каталог клинпротоколов" color="bg-blue-100" colorsec="bg-blue-200" />
                <FolderChlank h1="Мониторинг клинических протоколов" color="bg-blue-100" colorsec="bg-blue-200" />
                <FolderChlank h1="Объединенная комиссия по качеству медицинских услуг" color="bg-blue-100"
                    colorsec="bg-blue-200" />
                <FolderChlank h1="Мониторинг клинических протоколов" color="bg-blue-100" colorsec="bg-blue-200" />

            </div>
        </div>
    </section>

    <section class="text-gray-600 body-font">
        <div class="container px-5 pt-24 mx-auto">
            <div class="flex flex-wrap px-5 pb-5 bg-blue-100 rounded-2xl">
                <FileAccordTitle title="Приказы" />
                <FileAccordChlank description="Обзор междунар опыта КВИ (15.07.2021)" filetype="pdf" img={2} />
                <FileAccordChlank description="Перечень тем КП для разработки, пересмотра на 2023 год" filetype="pdf" img={2} />
                <FileAccordChlank description="Перечень тем КП для разработки, пересмотра на 2022 год" filetype="pdf" img={2} />

                <FileAccordChlank description="МР по разработке и пересмотру КП" filetype="pdf" img={2} />
                <FileAccordChlank description="Дорожная карта КП" filetype="pdf" img={2} />
                <FileAccordChlank description="По отмене приказов МЗСР РК" filetype="pdf" img={2} />

                <FileAccordChlank description="Перечень тем клинических протоколов на 2021 год" filetype="Google Docs" img={4} />
                <FileAccordChlank description="Приказ МЗ РК №404 от 09.07.2021" filetype="Google Docs" img={4} />

            </div>
        </div>
    </section>
    </>
  )
}

ClinicalProtocols.layout = (page) => <LayoutDirection img="clinicalprotocols" h1="Клинические протоколы" >{page}</LayoutDirection>
