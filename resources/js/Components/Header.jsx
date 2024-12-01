import React, {useState, useEffect} from 'react'

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
  return (
    <header className={`fixed top-0 text-gray-600 body-font z-50 w-full ease-in duration-150  ${ isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <span className="text-xs uppercase">национальный научный центр развития <br />здравоохранения им. салидат
                    каирбековой</span>
            </a>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                <a className="mr-5 hover:text-gray-900">Направления</a>
                <a className="mr-5 hover:text-gray-900">Услуги</a>
                <a className="mr-5 hover:text-gray-900">О центре</a>
                <a className="mr-5 hover:text-gray-900">Филиалы</a>
                <a className="mr-5 hover:text-gray-900">Новости</a>
            </nav>
            <button
                className="mx-1 inline-flex items-center bg-gray-50 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-xs mt-4 md:mt-0">EN
            </button>
            <button
                className="mx-1 inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-xs mt-4 md:mt-0">RU
                {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg> */}
            </button>
            <button
                className="mx-1 inline-flex items-center bg-gray-50 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-xs mt-4 md:mt-0">KZ
            </button>
        </div>
    </header>
  );
}
