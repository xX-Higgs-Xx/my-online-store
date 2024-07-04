import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Segmentos = [
    {
        name: "DAMA",
        content: [
            { name: "Vestidos", url: "/sales?category=Vestidos Dama" },
            { name: "Camisas", url: "/sales?category=Camisas Dama" },
            { name: "Ceremonia", url: "/sales?category=Ceremonia Dama" },
            { name: "Gran Gala", url: "/sales?category=GranGala Dama" },
        ]
    },
    {
        name: "CABALLEROS",
        content: [
            { name: "Camisas", url: "/sales?category=Camisas Caballeros" },
            { name: "Polos y Playeras", url: "/sales?category=PolosPlayeras Caballeros" },
            { name: "Chamarras", url: "/sales?category=Chamarras Caballeros" },
            { name: "Ropa Interior", url: "/sales?category=RopaInterior Caballeros" },
            { name: "Trajes", url: "/sales?category=Trajes Caballeros" },
            { name: "Ceremonias", url: "/sales?category=Ceremonias Caballeros" },
            { name: "Pantalones", url: "/sales?category=Pantalones Caballeros" },
            { name: "Shorts", url: "/sales?category=Shorts Caballeros" },
            { name: "Looks Completos", url: "/sales?category=Looks Completos Caballeros" },
            { name: "Blazer", url: "/sales?category=Blazer Caballeros" },
        ]
    },
    {
        name: "UNISEX",
        content: [
            { name: "Camisas", url: "/sales?category=Camisas UNISEX" },
            { name: "Chamarras", url: "/sales?category=Chamarras UNISEX" },
        ]
    },
    {
        name: "HOGAR Y ESTILO DE VIDA",
        content: [
            { name: "Accesorios", url: "/sales?category=Accesorios" },
            { name: "Snacks", url: "/sales?category=Snacks" },
            { name: "Bebidas", url: "/sales?category=Bebidas" },
            { name: "Ropa de Cama", url: "/sales?category=Ropa de Cama" },
        ]
    },
    {
        name: "BOOKS",
        content: [
            { name: "COLECCIÓN 2023", url: "/sales?category=Coleccion 2023" },
            { name: "COLECCIÓN 2022", url: "/sales?category=Coleccion 2022" },
            { name: "COLECCIÓN 2021", url: "/sales?category=Coleccion 2021" },
            { name: "COLECCIÓN 2020", url: "/sales?category=Coleccion 2020" },
        ]
    },
    {
        name: "UNIFORMES EMPRESARIALES",
        content: [
            { name: "Camisas", url: "/sales?category=UNIFORMES Camisas" },
        ]
    },
];

const Navbar = () => {
    const [activeSegment, setActiveSegment] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedSegment, setExpandedSegment] = useState(null);
    const router = useRouter();
    const { isAuthenticated } = useAuth();

    const handleMouseEnter = (name) => {
        setActiveSegment(name);
    };

    const handleMouseLeave = () => {
        setActiveSegment(null);
    };

    const toggleSegment = (name) => {
        setExpandedSegment(expandedSegment === name ? null : name);
    };

    const handleCategoryClick = (url) => {
        router.push(url);
        setActiveSegment(null);
        setMenuOpen(false);
    };

    const goCart = () => {
        router.push('/cart');
    };

    const goToProfileOrLogin = () => {
        if (isAuthenticated) {
            router.push('/profile');
        } else {
            router.push('/login');
        }
    };

    return (
        <nav className="block p-4 z-20 bg-black bg-gradient-to-t from-transparent to-black bg-opacity-0 hover:bg-opacity-100 duration-500 text-white fixed w-full">
            <div className="flex justify-between items-center px-8 pb-2">
                <div className="text-white md:block hidden">
                    <a className="text-xs mr-3 flex items-center duration-500 hover:text-orange-400 hover:border-orange-400 border-b-2 hover:pb-1 border-transparent" href="/antonio-figueroa" target="_blank">
                        Antonio Figueroa
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-up-right" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M17 7l-10 10" />
                            <path d="M8 7l9 0l0 9" />
                        </svg>
                    </a>
                </div>
                <div className="cursor-pointer flex justify-center items-center pb-4">
                    <a href="/">
                        <img src="/logo.png" alt="logo" className="h-12 md:h-20 ml-0" />
                    </a>
                </div>
                <div className="md:hidden">
                    <button className="text-white" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <line x1="4" y1="6" x2="20" y2="6" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="18" x2="20" y2="18" />
                            </svg>
                        )}
                    </button>
                </div>
                <div className="md:flex hidden space-x-4">
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search hover:stroke-orange-400 duration-500" width="26" height="26" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                            <path d="M21 21l-6 -6" />
                        </svg>
                    </a>
                    <a onClick={goCart}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-bag hover:stroke-orange-400 duration-500" width="26" height="26" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z" />
                            <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
                        </svg>
                    </a>
                    <a onClick={goToProfileOrLogin}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-circle hover:stroke-orange-400 duration-500" width="26" height="26" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                            <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                            <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                        </svg>
                    </a>
                </div>
            </div>
            <ul className={`md:flex space-x-4 justify-around px-48 ${menuOpen ? 'hidden' : 'hidden'}`}>
                {Segmentos.map(segment => (
                    <li key={segment.name} className="group relative" onMouseEnter={() => handleMouseEnter(segment.name)} onMouseLeave={handleMouseLeave}>
                        <a href="#" className="border-animation">{segment.name}</a>
                        <ul className={`absolute ${activeSegment === segment.name ? 'block' : 'hidden'} bg-black rounded-lg text-white mt-2 space-y-2 w-40`}>
                            {segment.content.map(item => (
                                <li key={item.name}>
                                    <a href="#" className="block px-4 py-2 hover:text-orange-400" onClick={() => handleCategoryClick(item.url)}>{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
            <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'}`}>
                <div className="flex w-full justify-between px-16 mb-4">
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search hover:stroke-orange-400 duration-500" width="26" height="26" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                            <path d="M21 21l-6 -6" />
                        </svg>
                    </a>
                    <a onClick={goCart}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-bag hover:stroke-orange-400 duration-500" width="26" height="26" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z" />
                            <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
                        </svg>
                    </a>
                    <a onClick={goToProfileOrLogin}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-circle hover:stroke-orange-400 duration-500" width="26" height="26" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                            <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                            <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                        </svg>
                    </a>
                </div>
                <div className="h-px bg-zinc-800 mb-5"></div>
                <ul className="space-y-2">
                    {Segmentos.map(segment => (
                        <li key={segment.name} className="relative">
                            <button className="w-full px-4 py-2 text-white hover:text-orange-400" onClick={() => toggleSegment(segment.name)}>
                                {segment.name}
                            </button>
                            {expandedSegment === segment.name && (
                                <ul className="pl-4">
                                    {segment.content.map(item => (
                                        <li key={item.name}>
                                            <a href="#" className="block px-4 py-2 text-white hover:text-orange-400" onClick={() => handleCategoryClick(item.url)}>- {item.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                    <div className="text-white text-center pt-4">
                        <a className="text-xs flex items-center justify-center duration-500 hover:text-orange-400 hover:border-orange-400 border-b-2 hover:pb-1 border-transparent" href="/antonio-figueroa" target="_blank">
                            Antonio Figueroa
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-up-right ml-1" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M17 7l-10 10" />
                                <path d="M8 7l9 0l0 9" />
                            </svg>
                        </a>
                    </div>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

