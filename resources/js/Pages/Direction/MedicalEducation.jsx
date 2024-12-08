import { Head } from "@inertiajs/react";
import React from 'react';
import LayoutDirection from "@/Layouts/LayoutDirection";
import BannerCatalog from "@/Components/BannerCatalog";
import FilesAccord from "@/Components/FilesAccord";

export default function MedicalEducation() {
  return (
    <>
    <Head title="NNCRZ" />
    <section className="text-gray-600 body-font pb-8">

        <div className="container px-5 py-12 mx-auto">
            <p className="tracking-wide">
                Департамент медицинского образования и науки – подразделение ННЦРЗ, главная миссия которого –
                содействовать развитию и модернизации медицинского образования и науки и способствовать внедрению
                инновационных технологий в отрасли и разработки эффективных управленческих решений.
            </p>
            <p className="tracking-wide mt-4">
                Департамент вправе присваивать и пересматривать статус научной организации в области здравоохранения,
                проводить оценки результативности научной, научно-технической и инновационной деятельности.
            </p>
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
    <BannerCatalog />
    <FilesAccord />
    </>
    
  )
}

MedicalEducation.layout = (page) => <LayoutDirection img={'medicaleducation'} h1={'Медицинское образование'}>{page}</LayoutDirection>;
