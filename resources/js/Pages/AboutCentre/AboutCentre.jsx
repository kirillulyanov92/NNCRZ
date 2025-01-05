import { Head } from '@inertiajs/react';
import React from 'react';
import LayoutDirection from '@/Layouts/LayoutDirection';
import FolderChlank from '@/Components/FolderChlank';
import ImportantDoc from '@/Components/ImportantDoc';
import FileAccordTitle from '@/Components/FileAccordTitle';
import FileAccordChlank from '@/Components/FileAccordChlank';
import NameDoctor from '@/Components/NameDoctor';

export default function AboutCentre() {
    const allNameDoctors = [
      { name: "Константинов Константин Константинопольский", about: "Профессор, доктор медицинских наук, заведующий кафедрой нейрофизиодогии Кахахского Национальгого Медицинского Университета"},
      { name: "Иванов Иван Иванович", about: "Заведующий кафедрой нейрофизиодогии Кахахского Национальгого Медицинского Университета"},
      { name: "Сидоров Сидор Сидорович", about: "Профессор, доктор медицинских наук"},
      { name: "Сергеев Сергей Сергеевич", about: "Профессор, доктор медицинских наук, заведующий кафедрой нейрофизиодогии Кахахского Национальгого Медицинского Университета"},
      { name: "Николаев Николай Николаевич", about: "Доктор медицинских наук, заведующий кафедрой нейрофизиодогии Кахахского Национальгого Медицинского Университета"},
      { name: "Александрова Александра Александровна", about: "Профессор, доктор медицинских наук, заведующий кафедрой нейрофизиодогии Кахахского Национальгого Медицинского Университета"},
      { name: "Александрова Александра Александровна", about: "Профессор, доктор медицинских наук"},
      { name: "Николаев Николай Николаевич", about: "Заведующий кафедрой нейрофизиодогии Кахахского Национальгого Медицинского Университета"},
      { name: "Сергеев Сергей Сергеевич", about: "Профессор, доктор медицинских наук, заведующий кафедрой нейрофизиодогии Кахахского Национальгого Медицинского Университета"},
      { name: "Николаев Николай Николаевич", about: "Профессор, доктор медицинских наук, заведующий кафедрой нейрофизиодогии Кахахского Национальгого Медицинского Университета"},
      { name: "Александрова Александра Александровна", about: "Профессор, доктор медицинских наук, заведующий кафедрой нейрофизиодогии Кахахского Национальгого Медицинского Университета"},
      { name: "Сергеев Сергей Сергеевич", about: "Профессор, доктор медицинских наук, заведующий кафедрой нейрофизиодогии Кахахского Национальгого Медицинского Университета"},

    ];

    const allNameWatchers = [
      { name: "Константинов Константин Константинопольский", about: "Профессор, доктор медицинских наук, заведующий кафедрой нейрофизиодогии Кахахского Национальгого Медицинского Университета"},
      { name: "Иванов Иван Иванович", about: "Заведующий кафедрой нейрофизиодогии Кахахского Национальгого Медицинского Университета"},
      { name: "Сидоров Сидор Сидорович", about: "Профессор, доктор медицинских наук"},
      { name: "Сергеев Сергей Сергеевич", about: "Профессор, доктор медицинских наук, заведующий кафедрой нейрофизиодогии Кахахского Национальгого Медицинского Университета"},
      { name: "Николаев Николай Николаевич", about: "Доктор медицинских наук, заведующий кафедрой нейрофизиодогии Кахахского Национальгого Медицинского Университета"},
      { name: "Александрова Александра Александровна", about: "Профессор, доктор медицинских наук, заведующий кафедрой нейрофизиодогии Кахахского Национальгого Медицинского Университета"},
      { name: "Александрова Александра Александровна", about: "Профессор, доктор медицинских наук"},
      { name: "Николаев Николай Николаевич", about: "Заведующий кафедрой нейрофизиодогии Кахахского Национальгого Медицинского Университета"},
      { name: "Сергеев Сергей Сергеевич", about: "Профессор, доктор медицинских наук, заведующий кафедрой нейрофизиодогии Кахахского Национальгого Медицинского Университета"},
      { name: "Николаев Николай Николаевич", about: "Профессор, доктор медицинских наук, заведующий кафедрой нейрофизиодогии Кахахского Национальгого Медицинского Университета"},
      { name: "Александрова Александра Александровна", about: "Профессор, доктор медицинских наук, заведующий кафедрой нейрофизиодогии Кахахского Национальгого Медицинского Университета"},
      { name: "Сергеев Сергей Сергеевич", about: "Профессор, доктор медицинских наук, заведующий кафедрой нейрофизиодогии Кахахского Национальгого Медицинского Университета"},

    ];


  return (
    <>
    <Head title="NNCRZ"/>
    <section className="text-gray-600 body-font pb-8">
      <div className="container px-5 py-12 mx-auto">
        <div className='flex flex-wrap px-12 text-justify mb-4'>
          <p className="tracking-wide leading-relaxed">
            Национальный научный центр развития здравоохранения постоянно внедряет лучшие мировые практики в протоколы
            лечения и профилактики заболеваний, что позволяет как развивать медицину, основанную на доказательствах
            (доказательную медицину), так совершенствовать формулярную систему.
          </p>
          <br />
          <p className="tracking-wide leading-relaxed">
            Политика Департамента в отрасли лекарственного обеспечения направлена на рациональное использование
            медикаментов для исключения негативных медицинских, социальных, а также экономических последствий для
            системы здравоохранения.
          </p>
        </div>
        <div className="flex justify-center mt-4">
          <button className="cursor-pointer text-black inline-flex items-center border-gray-900 border-[1px]
        rounded-xl p-3 transition-all duration-150 ease-in">
            Читать далее
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
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
                <FolderChlank h1="Финансовая отчетность" color="bg-fuchsia-100" colorsec="bg-fuchsia-200" />
            </div>
        </div>
    </section>

    <ImportantDoc bgcolor="bg-fuchsia-100" title="Документы, регламентирующие деятельность научного центра"
        description="Устав ННЦРЗ" filetype="pdf" img={2} />
    
    <section class="text-gray-600 body-font">
      <div class="container px-5 pt-24 mx-auto">
        <div class="flex flex-wrap px-5 pb-5 bg-fuchsia-100 rounded-2xl">
          <FileAccordTitle title="Стратегия развития" />
          <FileAccordChlank description="Стратегия на 2032" filetype="pdf" img={2} />
          <FileAccordChlank description="План развития национальных управляющих холдингов, национальных холдингов и национальных компаний" filetype="pdf" img={2} />
          <FileAccordTitle title="Финансовая отчетность" />
          <FileAccordChlank description="Отчет за 2022 г" filetype="pdf" img={2} />
          <FileAccordChlank description="План развития национальных управляющих холдингов, национальных холдингов и национальных компаний" filetype="pdf" img={2} />
          <FileAccordTitle title="Закупки" />
          <FileAccordChlank description="Отчет за 2022 г" filetype="pdf" img={2} />
          <FileAccordChlank description="План развития национальных управляющих холдингов, национальных холдингов и национальных компаний" filetype="pdf" img={2} />
          <FileAccordTitle title="Нормативные документы" />
          <FileAccordChlank description="План развития национальных управляющих холдингов, национальных холдингов и национальных компаний" filetype="pdf" img={2} />
          <FileAccordChlank description="План развития национальных управляющих холдингов, национальных холдингов и национальных компаний" filetype="pdf" img={2} />
          <FileAccordChlank description="План развития национальных управляющих холдингов, национальных холдингов и национальных компаний" filetype="pdf" img={2} />
          <FileAccordChlank description="План развития национальных управляющих холдингов, национальных холдингов и национальных компаний" filetype="pdf" img={2} />
          <FileAccordChlank description="План развития национальных управляющих холдингов, национальных холдингов и национальных компаний" filetype="pdf" img={2} />
          <FileAccordChlank description="План развития национальных управляющих холдингов, национальных холдингов и национальных компаний" filetype="pdf" img={2} />
        </div>
      </div>
    </section>

    <section class="text-gray-600 body-font">
      <div class="container px-5 pt-24 mx-auto">
        <div class="flex flex-col text-left w-full">
          <h1 class="sm:text-2xl text-2xl font-semibold title-font text-gray-900 mb-6">Руководство</h1>
        </div>
        <div class="flex flex-wrap -m-2">
          {allNameDoctors.map((namedoctor, index) =>(
          <NameDoctor key={index} name={namedoctor.name} about={namedoctor.about} />))}
        </div>
      </div>
    </section>

    <section class="text-gray-600 body-font">
      <div class="container px-5 pt-12 mx-auto">
        <div class="flex flex-col text-left w-full">
          <h1 class="sm:text-2xl text-2xl font-semibold title-font text-gray-900 mb-6">Наблюдательный совет</h1>
        </div>
        <div class="flex flex-wrap -m-2">
          {allNameWatchers.map((namewatcher, index) =>(
          <NameDoctor key={index} name={namewatcher.name} about={namewatcher.about} />))}
        </div>
      </div>
    </section>

    </>
  )
}

AboutCentre.layout = (page) => <LayoutDirection img="headcentre" h1="О центре">{page}</LayoutDirection>
