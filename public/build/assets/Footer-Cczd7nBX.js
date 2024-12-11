import{j as e,a as i,r as n}from"./app-BmA-uiUy.js";function x({title:s,url:r}){return e.jsx("li",{children:e.jsx(i,{href:route(r),className:"block px-6 py-4 mx-4 text-sm text-gray-700 hover:bg-gray-100 rounded-xl transition",children:s})})}function h(){const[s,r]=n.useState(!1),[l,a]=n.useState(!1);n.useState(!1);const c=[{title:"Медицинское образование",url:"medical.education"},{title:"Кадровые ресурсы",url:"human.resources"},{title:"Электронное здравоохранение",url:"electronic.health"},{title:"Аккредитация",url:"medical.accreditation"},{title:"Оценка технологий здравоохранения",url:"health.rate"},{title:"Клинические протоколы",url:"clinical.protocols"},{title:"Междурародное сотрудничество",url:"medical.education"},{title:"Рейтинг медицинских организаций",url:"medical.education"},{title:"Медицинская наука",url:"medical.education"},{title:"Лекарственная политика",url:"medical.education"},{title:"Первичная медико-санитарная помощь",url:"medical.education"},{title:"Национальные счета здравоохранения",url:"medical.education"}];return n.useEffect(()=>{const t=()=>{r(window.scrollY>10)};return window.addEventListener("scroll",t),()=>{window.removeEventListener("scroll",t)}},[]),e.jsx("header",{className:`fixed top-0 text-gray-600 font-medium body-font z-50 w-full ease-in duration-150 ${s?"bg-white shadow-md":"bg-transparent"}`,children:e.jsxs("div",{className:"container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center",children:[e.jsx(i,{href:route("home"),className:"hidden lg:flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0",children:e.jsxs("span",{className:"text-xs uppercase",children:["национальный научный центр развития ",e.jsx("br",{}),"здравоохранения им. салидат каирбековой"]})}),e.jsxs("nav",{className:"hidden md:ml-auto md:mr-auto lg:flex flex-wrap items-center text-base justify-center",children:[e.jsxs("div",{className:"relative group mr-8",children:[e.jsxs("button",{className:"group-hover:text-gray-900 focus:outline-none flex items-center cursor-pointer",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"mr-2 h-4 w-4 transition-transform group-hover:rotate-180",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})}),"Направления"]}),e.jsxs("div",{className:`fixed left-1/2 -translate-x-1/2 transform mt-8 bg-white border-[1px] border-gray-300 shadow-lg rounded-xl py-2 z-50 
    transition-all duration-150 ease-in-out opacity-0 scale-95 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible flex`,style:{transformOrigin:"top center"},children:[e.jsx("ul",{className:"w-96 py-2 border-r",children:c.slice(0,6).map((t,o)=>e.jsx(x,{title:t.title,url:t.url},o))}),e.jsx("ul",{className:"w-96 py-2",children:c.slice(6).map((t,o)=>e.jsx(x,{title:t.title,url:t.url},o))})]}),e.jsx("div",{className:"absolute inset-0 -top-8 -bottom-8 cursor-pointer"})]}),e.jsx("a",{className:"mr-8 hover:text-gray-900",children:"Услуги"}),e.jsx("a",{className:"mr-8 hover:text-gray-900",children:"О центре"}),e.jsx("a",{className:"mr-8 hover:text-gray-900",children:"Филиалы"}),e.jsx("a",{className:"mr-8 hover:text-gray-900",children:"Новости"})]}),e.jsxs("div",{className:"hidden lg:flex flex-wrap items-end justify-end",children:[e.jsx("button",{className:"mx-1 inline-flex items-center hover:border-b-2 border-black py-1 px-3 focus:outline-none text-sm mt-4 md:mt-0 transition-all ease-in duration-150",children:"EN"}),e.jsx("button",{className:"mx-1 inline-flex items-center border-b-2 border-black py-1 px-3 focus:outline-none text-sm text-gray-900 mt-4 md:mt-0 transition-all ease-in duration-150",children:"RU"}),e.jsx("button",{className:"mx-1 inline-flex items-center hover:border-b-2 border-black py-1 px-3 focus:outline-none text-sm mt-4 md:mt-0 transition-all ease-in duration-150",children:"KZ"})]}),e.jsxs("div",{className:"lg:hidden flex justify-between w-full",children:[e.jsx(i,{href:route("home"),className:"flex font-medium items-start text-gray-900 mb-4 md:mb-0",children:e.jsx("span",{className:"text-2xl uppercase",children:"NNCRZ"})}),e.jsx("button",{onClick:()=>a(!l),className:"text-gray-900 focus:outline-none content-center mb-4",children:l?e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})}):e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16m-7 6h7"})})})]}),e.jsxs("div",{className:`fixed inset-0 bg-white text-gray-800 flex flex-col items-center justify-center transform
                transition-transform duration-300 ${l?"translate-x-0":"-translate-x-full"}`,children:[e.jsx("button",{onClick:()=>a(!1),className:"absolute top-5 right-5 text-gray-400 hover:text-white",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),e.jsxs("nav",{className:"flex flex-col items-center space-y-10 text-3xl",children:[e.jsx("a",{href:"#",className:"hover:text-gray-400",children:"Направления"}),e.jsx("a",{href:"#",className:"hover:text-gray-400",children:"Услуги"}),e.jsx("a",{href:"#",className:"hover:text-gray-400",children:"О центре"}),e.jsx("a",{href:"#",className:"hover:text-gray-400",children:"Филиалы"}),e.jsx("a",{href:"#",className:"hover:text-gray-400",children:"Новости"})]}),e.jsx("button",{className:"mx-1 inline-flex items-center bg-gray-50 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-xs mt-4 md:mt-0",children:"EN"}),e.jsx("button",{className:"mx-1 inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-xs mt-4 md:mt-0",children:"RU"}),e.jsx("button",{className:"mx-1 inline-flex items-center bg-gray-50 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-xs mt-4 md:mt-0",children:"KZ"})]})]})})}const m=({title:s,links:r})=>e.jsxs("div",{className:"lg:w-1/4 md:w-1/2 w-full px-4",children:[e.jsx("h2",{className:"font-semibold text-gray-900 md:text-base text-sm mb-3",children:s}),e.jsx("nav",{className:"list-none mb-10",children:r.map((l,a)=>e.jsx("li",{children:e.jsx(i,{href:l.url,className:"text-gray-600 hover:text-gray-800",children:l.label})},a))})]}),u=()=>{const s=[{label:"Направления",url:"/#"},{label:"Услуги",url:"/#"},{label:"Филиалы",url:"/#"},{label:"Новости",url:"/#"},{label:"Вакансии",url:"/#"}],r=[{label:"Новости ННЦРЗ",url:"/#"},{label:"Новости по направлениям",url:"/#"},{label:"Новости филалов",url:"/#"},{label:"Салитат Каирбекова",url:"/#"}];return e.jsxs("footer",{className:"text-gray-600 body-font",children:[e.jsx("div",{className:"container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col",children:e.jsxs("div",{className:"flex-grow flex flex-wrap -mb-10 md:mt-0 mt-10 md:text-left text-center",children:[e.jsx(m,{title:"Главное меню",links:s}),e.jsx(m,{title:"О центре",links:r}),e.jsxs("div",{className:"lg:w-1/4 md:w-1/2 w-full px-4",children:[e.jsx("h2",{className:"font-semibold text-gray-900 md:text-base text-sm mb-3",children:"Контактная информация"}),e.jsxs("nav",{className:"list-none mb-10",children:[e.jsx("li",{children:e.jsx("a",{href:"mailto:a.skakova@nrchd.kz",className:"text-gray-600 hover:text-gray-800 hover:underline",children:"a.skakova@nrchd.kz"})}),e.jsx("li",{children:e.jsx("a",{href:"mailto:s.zhaldybaeva@nrchd.kz",className:"text-gray-600 hover:text-gray-800 hover:underline",children:"s.zhaldybaeva@nrchd.kz"})})]})]}),e.jsxs("div",{className:"lg:w-1/4 md:w-1/2 w-full px-4",children:[e.jsx("h2",{className:"font-semibold text-gray-900 md:text-base text-sm mb-3",children:"График работы"}),e.jsxs("nav",{className:"list-none mb-10",children:[e.jsx("li",{children:e.jsx("a",{className:"text-gray-600 hover:text-gray-800",children:"Пн...Пт, с 9:00 до 18:00"})}),e.jsx("li",{children:e.jsx("a",{className:"text-gray-600 hover:text-gray-800",children:"Перерыв с 13:00 до 14:00"})})]})]})]})}),e.jsx("div",{className:"bg-gray-100",children:e.jsxs("div",{className:"container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row",children:[e.jsxs("p",{className:"inline text-gray-500 md:text-sm text-xs text-center sm:text-left",children:["Республиканское государственное предприятие на праве хозяйственного ведения ",e.jsx("br",{}),"«Национальный научный центр развития здравоохранения имени Салитат Каирбековой»"]}),e.jsx("span",{className:"inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start",children:e.jsx("p",{className:"text-gray-500 text-sm text-center sm:text-left",children:"2024"})})]})})]})};export{u as F,h as H};