import{r as a,j as e,a as i}from"./app-B2K3cJBW.js";function c(){const[s,l]=a.useState(!1),[t,r]=a.useState(!1);return a.useEffect(()=>{const n=()=>{l(window.scrollY>50)};return window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)}},[]),e.jsx("header",{className:`fixed top-0 text-gray-600 body-font z-50 w-full ease-in duration-150 ${s?"bg-white shadow-md":"bg-transparent"}`,children:e.jsxs("div",{className:"container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center",children:[e.jsx(i,{href:route("home"),className:"hidden lg:flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0",children:e.jsxs("span",{className:"text-xs uppercase",children:["национальный научный центр развития ",e.jsx("br",{}),"здравоохранения им. салидат каирбековой"]})}),e.jsxs("nav",{className:"hidden md:ml-auto md:mr-auto lg:flex flex-wrap items-center text-base justify-center",children:[e.jsx("a",{className:"mr-5 hover:text-gray-900",children:"Направления"}),e.jsx("a",{className:"mr-5 hover:text-gray-900",children:"Услуги"}),e.jsx("a",{className:"mr-5 hover:text-gray-900",children:"О центре"}),e.jsx("a",{className:"mr-5 hover:text-gray-900",children:"Филиалы"}),e.jsx("a",{className:"mr-5 hover:text-gray-900",children:"Новости"})]}),e.jsxs("div",{className:"hidden lg:flex flex-wrap items-end text-base justify-end",children:[e.jsx("button",{className:"mx-1 inline-flex items-center bg-gray-50 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-xs mt-4 md:mt-0",children:"EN"}),e.jsx("button",{className:"mx-1 inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-xs mt-4 md:mt-0",children:"RU"}),e.jsx("button",{className:"mx-1 inline-flex items-center bg-gray-50 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-xs mt-4 md:mt-0",children:"KZ"})]}),e.jsxs("div",{className:"lg:hidden flex justify-between w-full",children:[e.jsx("a",{className:"flex font-medium items-start text-gray-900 mb-4 md:mb-0",children:e.jsx("span",{className:"text-2xl uppercase",children:"NNCRZ"})}),e.jsx("button",{onClick:()=>r(!t),className:"text-gray-900 focus:outline-none content-center mb-4",children:t?e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})}):e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16m-7 6h7"})})})]}),e.jsxs("div",{className:`fixed inset-0 bg-white text-gray-800 flex flex-col items-center justify-center transform
                transition-transform duration-300 ${t?"translate-x-0":"-translate-x-full"}`,children:[e.jsx("button",{onClick:()=>r(!1),className:"absolute top-5 right-5 text-gray-400 hover:text-white",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),e.jsxs("nav",{className:"flex flex-col items-center space-y-10 text-3xl",children:[e.jsx("a",{href:"#",className:"hover:text-gray-400",children:"Направления"}),e.jsx("a",{href:"#",className:"hover:text-gray-400",children:"Услуги"}),e.jsx("a",{href:"#",className:"hover:text-gray-400",children:"О центре"}),e.jsx("a",{href:"#",className:"hover:text-gray-400",children:"Филиалы"}),e.jsx("a",{href:"#",className:"hover:text-gray-400",children:"Новости"})]}),e.jsx("button",{className:"mx-1 inline-flex items-center bg-gray-50 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-xs mt-4 md:mt-0",children:"EN"}),e.jsx("button",{className:"mx-1 inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-xs mt-4 md:mt-0",children:"RU"}),e.jsx("button",{className:"mx-1 inline-flex items-center bg-gray-50 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-xs mt-4 md:mt-0",children:"KZ"})]})]})})}const x=({title:s,links:l})=>e.jsxs("div",{className:"lg:w-1/4 md:w-1/2 w-full px-4",children:[e.jsx("h2",{className:"font-semibold text-gray-900 md:text-base text-sm mb-3",children:s}),e.jsx("nav",{className:"list-none mb-10",children:l.map((t,r)=>e.jsx("li",{children:e.jsx(i,{href:t.url,className:"text-gray-600 hover:text-gray-800",children:t.label})},r))})]}),m=()=>{const s=[{label:"Направления",url:"/#"},{label:"Услуги",url:"/#"},{label:"Филиалы",url:"/#"},{label:"Новости",url:"/#"},{label:"Вакансии",url:"/#"}],l=[{label:"Новости ННЦРЗ",url:"/#"},{label:"Новости по направлениям",url:"/#"},{label:"Новости филалов",url:"/#"},{label:"Салитат Каирбекова",url:"/#"}];return e.jsxs("footer",{className:"text-gray-600 body-font",children:[e.jsx("div",{className:"container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col",children:e.jsxs("div",{className:"flex-grow flex flex-wrap -mb-10 md:mt-0 mt-10 md:text-left text-center",children:[e.jsx(x,{title:"Главное меню",links:s}),e.jsx(x,{title:"О центре",links:l}),e.jsxs("div",{className:"lg:w-1/4 md:w-1/2 w-full px-4",children:[e.jsx("h2",{className:"font-semibold text-gray-900 md:text-base text-sm mb-3",children:"Контактная информация"}),e.jsxs("nav",{className:"list-none mb-10",children:[e.jsx("li",{children:e.jsx("a",{href:"mailto:a.skakova@nrchd.kz",className:"text-gray-600 hover:text-gray-800 hover:underline",children:"a.skakova@nrchd.kz"})}),e.jsx("li",{children:e.jsx("a",{href:"mailto:s.zhaldybaeva@nrchd.kz",className:"text-gray-600 hover:text-gray-800 hover:underline",children:"s.zhaldybaeva@nrchd.kz"})})]})]}),e.jsxs("div",{className:"lg:w-1/4 md:w-1/2 w-full px-4",children:[e.jsx("h2",{className:"font-semibold text-gray-900 md:text-base text-sm mb-3",children:"График работы"}),e.jsxs("nav",{className:"list-none mb-10",children:[e.jsx("li",{children:e.jsx("a",{className:"text-gray-600 hover:text-gray-800",children:"Пн...Пт, с 9:00 до 18:00"})}),e.jsx("li",{children:e.jsx("a",{className:"text-gray-600 hover:text-gray-800",children:"Перерыв с 13:00 до 14:00"})})]})]})]})}),e.jsx("div",{className:"bg-gray-100",children:e.jsxs("div",{className:"container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row",children:[e.jsxs("p",{className:"inline text-gray-500 md:text-sm text-xs text-center sm:text-left",children:["Республиканское государственное предприятие на праве хозяйственного ведения ",e.jsx("br",{}),"«Национальный научный центр развития здравоохранения имени Салитат Каирбековой»"]}),e.jsx("span",{className:"inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start",children:e.jsx("p",{className:"text-gray-500 text-sm text-center sm:text-left",children:"2024"})})]})})]})};function d(){return e.jsx("section",{className:"text-gray-600 body-font",children:e.jsx("div",{className:"container mx-auto flex px-5 pb-24 items-center justify-center flex-col",children:e.jsxs("div",{className:"relative w-full flex flex-col items-center content-center",children:[e.jsx("img",{className:"inset-0 w-full h-96 object-cover rounded-2xl",alt:"catalog-program",src:"./img/banner.png"}),e.jsxs("div",{className:"absolute text-center h-full w-full align-middle items-center md:content-center content-end justify-between",children:[e.jsx("div",{className:"flex justify-center mb-1",children:e.jsx("img",{className:"w-24 h-24",src:"https://img.icons8.com/emoji/96/open-book-emoji.png",alt:"open-book-emoji"})}),e.jsx("h1",{className:"title-font sm:text-4xl text-3xl md:mb-4 mb-6 font-semibold text-gray-900",children:"Каталог образовательных программ"}),e.jsx("div",{className:"flex justify-center px-4 md:mb-0 mb-8",children:e.jsx("button",{className:"md:w-auto w-full items-center text-white bg-green-900 border-0 py-3 px-6 transition ease-in duration-150 focus:outline-none hover:bg-green-600 hover:shadow-lg rounded-lg text-lg",children:"Перейти в каталог"})})]})]})})})}export{d as B,m as F,c as H};
