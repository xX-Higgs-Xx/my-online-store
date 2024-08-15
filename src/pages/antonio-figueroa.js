import Footer from '@/components/Footer';

const AntonioFigueroa = () => {
    return (
        <div className="w-full min-h-screen text-foreground">
            <section className="relative h-screen flex flex-col items-center justify-center bg-[url('https://firebasestorage.googleapis.com/v0/b/tienda-jaff.appspot.com/o/ANTONIO%20FIGUEROA%2FJAFF%20ANTONIO%20FIGUEROA%202.jpg?alt=media&token=4d4fb4d3-96fd-4d5c-bac6-59fabcda19ee')] bg-cover bg-center">
                <div className="absolute inset-0 bg-black/50 z-0"></div>
                <div className="relative z-10 text-center space-y-4">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">JESÚS ANTONIO FIGUEROA FITZ</h1>
                    <p className="text-lg md:text-xl text-muted-foreground text-white">Explorando la vida y obra de un diseñador excepcional</p>
                </div>
            </section>
            <section className="relative py-24 px-4 md:px-8 lg:px-12 bg-white">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold">Biografía</h2>
                        <p className="text-muted-foreground text-justify">
                            JAFF ANTONIO FIGUEROA, diseñador originario de Juliantla, Gro, Mexico, cuenta con 24 años de trayectoria en el mundo de la moda; iniciando a los 12 años con el diseño de joyería en plata y piedras semipreciosas, en la hermosa ciudad platera de Taxco Alarcón, Gro. creando una firma independiente, para después especializarse a la edad de 18 años en el mundo del diseño textil.
                        </p>
                        <p className="text-muted-foreground text-justify">
                            Joven empresario con dos licenciaturas en la rama textil (Lic. Diseño y asesor de modas, Lic. Publicidad y Mercadotecnia de la moda), egresado de Janette Klein campus de la moda.
                        </p>
                    </div>
                    <div className="space-y-4 relative">
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/tienda-jaff.appspot.com/o/ANTONIO%20FIGUEROA%2FCopia%20de%20JAFF%20ANTONIO%20FIGUEROA%203.jpg?alt=media&token=998cbf36-68b9-4f6d-a348-a958505599f6"
                            width="600"
                            height="400"
                            alt="Retrato del diseñador"
                            className="rounded-lg shadow-lg"
                            style={{ aspectRatio: '600 / 400', objectFit: 'cover' }}
                        />
                    </div>
                </div>
            </section>
            <section className="relative text-center py-24 px-4 md:px-8 lg:px-12 bg-muted text-white bg-[url('https://firebasestorage.googleapis.com/v0/b/tienda-jaff.appspot.com/o/ANTONIO%20FIGUEROA%2FSin%20t%C3%ADtulo.png?alt=media&token=cfc5d1bf-b47a-4a22-ac3f-bed3a296cec7')] bg-cover bg-center">
                <div className="absolute inset-0 bg-black/50 z-1"></div>
                <div className="relative max-w-5xl mx-auto grid grid-cols-1 gap-8 z-10">
                    <div className="space-y-4 order-2 md:order-1">
                        <h2 className="text-3xl md:text-5xl font-bold">Logros</h2>
                        <p className="text-muted-foreground">
                            Conoce los principales logros y reconocimientos de este diseñador, que lo han convertido en una figura destacada en la industria.
                        </p>
                    </div>
                    <div className="order-1 md:order-2 relative text-black text-center">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-8 h-8 text-primary"
                                >
                                    <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                                    <circle cx="12" cy="8" r="6"></circle>
                                </svg>
                                <h3 className="text-xl font-bold mt-2">Reconocimiento</h3>
                                <h5 className="font-bold">2013</h5>
                                <p className="text-muted-foreground text-sm mt-2">En 2013 le fue otorgado el reconocimiento distintivo JOVEN EMPRESARIO por el estado de MORELOS.</p>
                            </div>
                            <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-8 h-8 text-primary"
                                >
                                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                                    <path d="M4 22h16"></path>
                                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                                </svg>
                                <h3 className="text-xl font-bold mt-2">Mejor Diseño</h3>
                                <h5 className="font-bold">2013</h5>
                                <p className="text-muted-foreground text-sm mt-2">Ganador del diseño de una de las aerolineas mexicanas mas importantes en el area de accesorios en 2013.</p>
                            </div>
                            <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chair-director" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M6 21l12 -9" />
                                    <path d="M6 12l12 9" />
                                    <path d="M5 12h14" />
                                    <path d="M6 3v9" />
                                    <path d="M18 3v9" />
                                    <path d="M6 8h12" />
                                    <path d="M6 5h12" />
                                </svg>
                                <h3 className="text-xl font-bold mt-2">Dirección de Relaciones Publicas</h3>
                                <h5 className="font-bold">2014</h5>
                                <p className="text-muted-foreground text-sm mt-2">Director de Relaciones Publicas de CANAIVE Morelos 2014.</p>
                            </div>
                            <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-8 h-8 text-primary"
                                >
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                </svg>
                                <h3 className="text-xl font-bold mt-2">Reconocimiento</h3>
                                <h5 className="font-bold">2018</h5>
                                <p className="text-muted-foreground text-sm mt-2">Reconocimiento a mejor look de alfombra en Mexico por los premios mtv miaw 2018.</p>
                            </div>
                            <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-world-star" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M21 12a9 9 0 1 0 -9.968 8.948" />
                                    <path d="M3.6 9h16.8" />
                                    <path d="M3.6 15h6.4" />
                                    <path d="M11.5 3a17.001 17.001 0 0 0 -1.886 13.802" />
                                    <path d="M12.5 3a16.982 16.982 0 0 1 2.549 8.01" />
                                    <path d="M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
                                </svg>
                                <h3 className="text-xl font-bold mt-2">Galardón</h3>
                                <h5 className="font-bold">2021</h5>
                                <p className="text-muted-foreground text-sm mt-2">Galardón especial de honor al diseño internacional 2021 en paseo de las luminarias, Mexico.</p>
                            </div>
                            <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-award" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M12 9m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" />
                                    <path d="M12 15l3.4 5.89l1.598 -3.233l3.598 .232l-3.4 -5.889" />
                                    <path d="M6.802 12l-3.4 5.89l3.598 -.233l1.598 3.232l3.4 -5.889" />
                                </svg>
                                <h3 className="text-xl font-bold mt-2">Reconocimiento</h3>
                                <h5 className="font-bold">2021</h5>
                                <p className="text-muted-foreground text-sm mt-2">Reconocimiento a lider internacional en Foro magazine por 10 años de trayectoria el 02 de Agosto de 2021.</p>
                            </div>
                            <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trophy" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M8 21l8 0" />
                                    <path d="M12 17l0 4" />
                                    <path d="M7 4l10 0" />
                                    <path d="M17 4v8a5 5 0 0 1 -10 0v-8" />
                                    <path d="M5 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                    <path d="M19 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                </svg>
                                <h3 className="text-xl font-bold mt-2">Galardón</h3>
                                <h5 className="font-bold">2022</h5>
                                <p className="text-muted-foreground text-sm mt-2">Galardón lideres de america en  Julio de 2022.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative py-24 px-4 md:px-8 lg:px-12 bg-zinc-800 text-center text-white">
                <div className="max-w-5xl mx-auto grid grid-cols-1 gap-8">
                    <div className="space-y-4 order-2 md:order-1">
                        <h2 className="text-3xl md:text-4xl font-bold">Influencia</h2>
                        <p className="text-muted-foreground">
                            Diferentes figuras del medio del espectaculo, producciones y plataformas han vestido creaciones de JAFF ANTONIO FIGUEROA.
                        </p>
                    </div>
                    <div className="order-1 md:order-2 relative">
                        <div className="grid lg:grid-cols-3 gap-4">
                            <div className="bg-white text-black rounded-lg p-4 flex flex-col items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-8 h-8 text-primary"
                                >
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg>
                                <h3 className="text-xl font-bold my-2">CANTAUTORES</h3>
                                <p className="text-muted-foreground text-sm hover:font-bold duration-100 mb-1">Joan Sebastian (sobrino del mismo)</p>
                                <p className="text-muted-foreground text-sm hover:font-bold duration-100 mb-1">Aleks Syntek 30 aniversario con el tema eclipse de luna</p>
                                <p className="text-muted-foreground text-sm hover:font-bold duration-100 mb-1">Samo</p>
                                <p className="text-muted-foreground text-sm hover:font-bold duration-100 mb-1">Poncho Lizarraga</p>
                            </div>
                            <div className="bg-white text-black rounded-lg p-4 flex flex-col items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-8 h-8 text-primary"
                                >
                                    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                                </svg>
                                <h3 className="text-xl font-bold my-3">PRODUCCIONES</h3>
                                <p className="text-muted-foreground text-sm hover:font-bold duration-100 mb-1">SoHo turquia</p>
                                <p className="text-muted-foreground text-sm hover:font-bold duration-100 mb-1">TV Azteca Internacional</p>
                                <p className="text-muted-foreground text-sm hover:font-bold duration-100 mb-1">Televisa Interncional</p>
                                <p className="text-muted-foreground text-sm hover:font-bold duration-100 mb-1">Endemol, España</p>
                                <p className="text-muted-foreground text-sm hover:font-bold duration-100 mb-1">Corazon Films,Chile</p>
                                <p className="text-muted-foreground text-sm hover:font-bold duration-100 mb-1">BTF media, USA</p>
                            </div>
                            <div className="bg-white text-black rounded-lg p-4 flex flex-col items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-tv" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                                    <path d="M16 3l-4 4l-4 -4" />
                                </svg>
                                <h3 className="text-xl font-bold my-3">PLATAFORMAS</h3>
                                <p className="text-muted-foreground text-sm hover:font-bold duration-100 mb-1">Disney Plus</p>
                                <p className="text-muted-foreground text-sm hover:font-bold duration-100 mb-1">Netflix</p>
                                <p className="text-muted-foreground text-sm hover:font-bold duration-100 mb-1">Amazon Prime</p>
                                <p className="text-muted-foreground text-sm hover:font-bold duration-100 mb-1">Vix</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative py-24 px-4 md:px-8 lg:px-12 bg-muted">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold">Impacto</h2>
                        <p className="text-muted-foreground text-justify">
                            Se ha especializado en un diseño exclusivo y tendencioso, de este enfoque se desprenden 2 firmas JAFF & ANTONIO FIGUEROA (firmas fundadas por el mismo), posicionándose desde hace 15 años en el mercado con un éxito distintivo; abriéndose campo entre el demandante y emergente mundo de la moda, JAFF ANTONIO FIGUEROAF se ha vuelto un diseñador no solo latino, sino transnacional.
                        </p>
                        <p className="text-muted-foreground text-justify">
                        JAFF ANTONIO FIGUEROA está por estrenar nuevas líneas, para el extendimiento de su firma y así mismo poder masificar en las necesidades y cualidades de sus clientes. Con la visión de seguir expandiendo su trabajo a un mercado internacional, siempre con la intención de dejar en lo alto el nombre del diseño Mexicano y sobre todo, guerrerense.
                        </p>
                    </div>
                    <div className="relative">
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/tienda-jaff.appspot.com/o/ANTONIO%20FIGUEROA%2FJAFF%20ANONIO%20FIGUEROA%201.jpg?alt=media&token=338ac6f7-4835-4025-b249-4f59b8f77a8f"
                            width="600"
                            height="400"
                            alt="Impacto del diseñador"
                            className="rounded-lg shadow-lg"
                            style={{ aspectRatio: '600 / 400', objectFit: 'cover' }}
                        />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default AntonioFigueroa;
