import React from 'react';
import Footer from '../components/Footer';

const AboutUs = () => {
    return (
        <div className="bg-zinc-300 text-gray-900 min-h-screen flex flex-col">
            <div className="h-screen">
                <header className="bg-black text-white py-4 px-6">
                    <div className="flex justify-between items-center">
                        <a href='/'>
                            <img src="/logo.png" alt="logo" className="h-12 md:h-20" />
                        </a>
                    </div>
                </header>
                <main className="flex-1 container mx-auto py-12 px-4 md:px-28 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                    <section className="bg-white shadow-lg rounded-lg p-6">
                        <h2 className="text-xl font-semibold mb-4 text-gray-700">Nuestra Misión</h2>
                        <p className="text-gray-600 text-lg">
                            Transformamos la moda para nuestros clientes en tendencias exclusivas bajo el sello de la elegancia, llevamos la pasión por el diseño hasta la más fina hebra, hacemos de la caballerosidad, tendencia.
                        </p>
                    </section>
                    <section className="bg-white shadow-lg rounded-lg p-6">
                        <h2 className="text-xl font-semibold mb-4 text-gray-700">Nuestra Visión</h2>
                        <p className="text-gray-600 text-lg">
                            Mantenernos como una firma exclusiva, creando prendas innovadoras, vanguardistas y con calidad, confeccionando con pasión en cada diseño, el legado JAFF Antonio Figueroa.
                        </p>
                    </section>
                    <section className="bg-white shadow-lg rounded-lg p-6">
                        <h2 className="text-xl font-semibold mb-4 text-gray-700">Nuestros Valores</h2>
                        <ul className="text-gray-600 text-lg space-y-2">
                            <li>- Integridad</li>
                            <li>- Honestidad</li>
                            <li>- Pasión</li>
                            <li>- Compromiso</li>
                            <li>- Respeto</li>
                            <li>- Lealtad</li>
                            <li>- Creatividad</li>
                            <li>- Trabajo en equipo</li>
                        </ul>
                    </section>
                    <section className="bg-white shadow-lg rounded-lg p-6">
                        <h2 className="text-xl font-semibold mb-4 text-gray-700">Nuestro Objetivo</h2>
                        <p className="text-gray-600 text-lg">
                            Crear y posicionar una empresa de diseño en moda textil, enfocada a nuestros clientes, que ofrece productos de excelente calidad y diseño.
                        </p>
                    </section>
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default AboutUs;
