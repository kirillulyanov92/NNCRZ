import React from 'react';
import FooterNav from './FooterNav';

const FooterLinks = () => {
    const navLinks1 = [
        {label: 'Направления', url:'/#'},
        {label: 'Услуги', url:'/#'},
        {label: 'Филиалы', url:'/#'},
        {label: 'Новости', url:'/#'},
        {label: 'Вакансии', url:'/#'},
    ];
    const navLinks2 = [
        {label: 'Новости ННЦРЗ', url:'/#'},
        {label: 'Новости по направлениям', url:'/#'},
        {label: 'Новости филалов', url:'/#'},
        {label: 'Салитат Каирбекова', url:'/#'},
    ];

    return (
        <footer className="text-gray-600 body-font">
            <div
                className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">

                <div className="flex-grow flex flex-wrap -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    <FooterNav title='Главное меню' links={navLinks1} />
                    <FooterNav title='О центре' links={navLinks2} />
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="font-semibold text-gray-900 md:text-base text-sm mb-3">Контактная
                            информация</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a href="mailto:a.skakova@nrchd.kz"
                                    className="text-gray-600 hover:text-gray-800 hover:underline">a.skakova@nrchd.kz</a>
                            </li>
                            <li>
                                <a href="mailto:s.zhaldybaeva@nrchd.kz"
                                    className="text-gray-600 hover:text-gray-800 hover:underline">s.zhaldybaeva@nrchd.kz</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="font-semibold text-gray-900 md:text-base text-sm mb-3">График работы</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Пн...Пт, с 9:00 до 18:00</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Перерыв с 13:00 до 14:00</a>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="inline text-gray-500 md:text-sm text-xs text-center sm:text-left">Республиканское государственное
                        предприятие на праве хозяйственного ведения <br />
                        «Национальный научный центр развития здравоохранения имени Салитат Каирбековой»</p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <p className="text-gray-500 text-sm text-center sm:text-left">2024</p>
                    </span>
                </div>
            </div>
        </footer>
    );
};


export default FooterLinks