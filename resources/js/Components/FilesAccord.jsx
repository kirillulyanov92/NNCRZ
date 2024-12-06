import React from 'react';
import FileAccordChlank from './FileAccordChlank';
import FileAccordTitle from './FileAccordTitle';

function FilesAccord() {
  return (
    <section class="text-gray-600 body-font">
    <div class="container px-5 mx-auto">
      <div class="flex flex-wrap px-5 pb-5 bg-green-100 rounded-2xl">
        <FileAccordTitle title="Научно-медицинская экспертиза" />
        <FileAccordChlank description="МР по оформлению и утверждению НМР" filetype="pdf" img={2} />
        <FileAccordChlank description="О проведении НМЭ" filetype="doc" img={1}/>
        <FileAccordChlank description="Приказ о научно-медицинской экспертизе" filetype="pdf" img={2}/>
        <FileAccordChlank description="Приказ о рабочем органе" filetype="doc" img={1}/>
        <FileAccordTitle title="Повышение квалификации для среднего медперсонала" />
        <FileAccordChlank description="Совершенствование системы оценки медицинских технологий" filetype="pdf" img={2}/>
        <FileAccordTitle title="Повышение квалификации для врачей" />
        <FileAccordChlank description="Совершенствование системы оценки медицинских технологий" filetype="pdf" img={2}/>
      </div>
    </div>
  </section>
  )
}

export default FilesAccord