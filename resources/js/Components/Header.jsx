import { Link } from '@inertiajs/react';
import React, {useState, useEffect} from 'react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
  return (
    <header className={`fixed top-0 text-gray-600 body-font z-50 w-full ease-in duration-150 ${ isScrolled
        ? "bg-white shadow-md" : "bg-transparent" }`}>
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Link href={route('home')} className="hidden lg:flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <span className="text-xs uppercase">национальный научный центр развития <br />здравоохранения им.
                    салидат
                    каирбековой</span>
            </Link>
            <nav className="hidden md:ml-auto md:mr-auto lg:flex flex-wrap items-center text-base justify-center">
            <div className="relative group">
                {/* Кнопка */}
                <button className="mr-5 hover:text-gray-900 focus:outline-none flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-4 w-4 transition-transform group-hover:rotate-180" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    Направления
                </button>

                {/* Меню */}
                <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50 transform
      transition-all duration-150 ease-in-out opacity-0 scale-95 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible"
                    style={{ transformOrigin: "top center" }}>
                    <li>
                        <a href="#" className="block px-8 py-4 text-sm text-gray-700 hover:bg-gray-100 transition">
                            Медицинское образование
                        </a>
                    </li>
                    <li>
                        <a href="#" className="block px-8 py-4 text-sm text-gray-700 hover:bg-gray-100 transition">
                            Кадровые ресурсы
                        </a>
                    </li>
                    <li>
                        <a href="#" className="block px-8 py-4 text-sm text-gray-700 hover:bg-gray-100 transition">
                            Электронное здравоохранение

                        </a>
                    </li>
                    <li>
                        <a href="#" className="block px-8 py-4 text-sm text-gray-700 hover:bg-gray-100 transition">
                            Аккредитация медицинских организаций
                        </a>
                    </li>
                    <li>
                        <a href="#" className="block px-8 py-4 text-sm text-gray-700 hover:bg-gray-100 transition">
                            Оценка технологий здравоохранения
                        </a>
                    </li>
                    <li>
                        <a href="#" className="block px-8 py-4 text-sm text-gray-700 hover:bg-gray-100 transition">
                            Клинические протоколы
                        </a>
                    </li>
                </ul>

                {/* Увеличенная зона интерактивности */}
                <div className="absolute inset-0 -top-4 -left-4 -right-4 -bottom-4"></div>
            </div>


    
                <a className="mr-5 hover:text-gray-900">Услуги</a>
                <a className="mr-5 hover:text-gray-900">О центре</a>
                <a className="mr-5 hover:text-gray-900">Филиалы</a>
                <a className="mr-5 hover:text-gray-900">Новости</a>
            </nav>
            <div className='hidden lg:flex flex-wrap items-end text-base justify-end'>
                <button
                    className="mx-1 inline-flex items-center hover:border-b-2 border-black py-1 px-3 focus:outline-none text-xs mt-4 md:mt-0 transition-all ease-in duration-150">EN
                </button>
                <button
                    className="mx-1 inline-flex items-center border-b-2 border-black py-1 px-3 focus:outline-none text-xs mt-4 md:mt-0 transition-all ease-in duration-150">RU
                </button>
                <button
                    className="mx-1 inline-flex items-center hover:border-b-2 border-black py-1 px-3 focus:outline-none text-xs mt-4 md:mt-0 transition-all ease-in duration-150">KZ
                </button>
            </div>

            {/* Бургер-меню (мобильная версия) */}
            <div className="lg:hidden flex justify-between w-full">
                <Link href={route('home')} className="flex font-medium items-start text-gray-900 mb-4 md:mb-0">
                    <span className="text-2xl uppercase">NNCRZ</span>
                </Link>
                <button onClick={()=> setMenuOpen(!menuOpen)}
                    className="text-gray-900 focus:outline-none content-center mb-4"
                    >
                    {menuOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                    )}
                </button>
            </div>
            {/* Мобильное меню на полный экран */}
            <div className={`fixed inset-0 bg-white text-gray-800 flex flex-col items-center justify-center transform
                transition-transform duration-300 ${ menuOpen ? "translate-x-0" : "-translate-x-full" }`}>
                <button onClick={()=> setMenuOpen(false)}
                    className="absolute top-5 right-5 text-gray-400 hover:text-white"
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <nav className="flex flex-col items-center space-y-10 text-3xl">
                    <a href="#" className="hover:text-gray-400">Направления</a>
                    <a href="#" className="hover:text-gray-400">Услуги</a>
                    <a href="#" className="hover:text-gray-400">О центре</a>
                    <a href="#" className="hover:text-gray-400">Филиалы</a>
                    <a href="#" className="hover:text-gray-400">Новости</a>
                </nav>
                <button
                    className="mx-1 inline-flex items-center bg-gray-50 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-xs mt-4 md:mt-0">EN
                </button>
                <button
                    className="mx-1 inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-xs mt-4 md:mt-0">RU
                </button>
                <button
                    className="mx-1 inline-flex items-center bg-gray-50 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-xs mt-4 md:mt-0">KZ
                </button>
            </div>
        </div>
    </header>
  );
}
