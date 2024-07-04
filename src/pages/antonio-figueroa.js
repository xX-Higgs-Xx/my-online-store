import Footer from '@/components/Footer';

const AntonioFigueroa = () => {
    return (
        <div className="w-full min-h-screen bg-background text-foreground">
            <section className="relative h-screen flex flex-col items-center justify-center bg-[url('/hero-bg.jpg')] bg-cover bg-center">
                <div className="absolute inset-0 bg-black/50 z-0"></div>
                <div className="relative z-10 text-center space-y-4">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">JESÚS ANTONIO FIGUEROA FITZ</h1>
                    <p className="text-lg md:text-xl text-muted-foreground text-white">Explorando la vida y obra de un diseñador excepcional</p>
                </div>
            </section>
            <section className="relative py-24 px-4 md:px-8 lg:px-12 bg-background">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold">Biografía</h2>
                        <p className="text-muted-foreground">
                            Descubre los orígenes y la trayectoria de este diseñador excepcional, desde sus primeros pasos en el mundo
                            del diseño hasta sus logros más destacados.
                        </p>
                    </div>
                    <div className="space-y-4 relative">
                        <img
                            src="/placeholder.svg"
                            width="600"
                            height="400"
                            alt="Retrato del diseñador"
                            className="rounded-lg shadow-lg"
                            style={{ aspectRatio: '600 / 400', objectFit: 'cover' }}
                        />
                        <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium">
                            Nacido en 1985
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative py-24 px-4 md:px-8 lg:px-12 bg-muted">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4 order-2 md:order-1">
                        <h2 className="text-3xl md:text-4xl font-bold">Logros</h2>
                        <p className="text-muted-foreground">
                            Conoce los principales logros y reconocimientos de este diseñador, que lo han convertido en una figura
                            destacada en la industria.
                        </p>
                    </div>
                    <div className="order-1 md:order-2 relative">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-background rounded-lg shadow-lg p-4 flex flex-col items-center justify-center">
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
                                <h3 className="text-xl font-bold mt-2">Premio de Diseño</h3>
                                <p className="text-muted-foreground text-sm">2018</p>
                            </div>
                            <div className="bg-background rounded-lg shadow-lg p-4 flex flex-col items-center justify-center">
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
                                <h3 className="text-xl font-bold mt-2">Mejor Diseñador</h3>
                                <p className="text-muted-foreground text-sm">2020</p>
                            </div>
                            <div className="bg-background rounded-lg shadow-lg p-4 flex flex-col items-center justify-center">
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
                                <p className="text-muted-foreground text-sm">2022</p>
                            </div>
                            <div className="bg-background rounded-lg shadow-lg p-4 flex flex-col items-center justify-center">
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
                                    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                                    <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                                </svg>
                                <h3 className="text-xl font-bold mt-2">Proyecto destacado</h3>
                                <p className="text-muted-foreground text-sm">2021</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative py-24 px-4 md:px-8 lg:px-12 bg-background">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4 order-2 md:order-1">
                        <h2 className="text-3xl md:text-4xl font-bold">Influencia</h2>
                        <p className="text-muted-foreground">
                            Descubre cómo este diseñador ha influido en la industria y dejado una huella duradera en el mundo del
                            diseño.
                        </p>
                    </div>
                    <div className="order-1 md:order-2 relative">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-background rounded-lg shadow-lg p-4 flex flex-col items-center justify-center">
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
                                <h3 className="text-xl font-bold mt-2">Seguidores</h3>
                                <p className="text-muted-foreground text-sm">+100k</p>
                            </div>
                            <div className="bg-background rounded-lg shadow-lg p-4 flex flex-col items-center justify-center">
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
                                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                                </svg>
                                <h3 className="text-xl font-bold mt-2">Publicaciones</h3>
                                <p className="text-muted-foreground text-sm">15+</p>
                            </div>
                            <div className="bg-background rounded-lg shadow-lg p-4 flex flex-col items-center justify-center">
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
                                    <path d="M3 3v18h18"></path>
                                    <path d="m19 9-5 5-4-4-3 3"></path>
                                </svg>
                                <h3 className="text-xl font-bold mt-2">Conferencias</h3>
                                <p className="text-muted-foreground text-sm">20+</p>
                            </div>
                            <div className="bg-background rounded-lg shadow-lg p-4 flex flex-col items-center justify-center">
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
                                <h3 className="text-xl font-bold mt-2">Premios</h3>
                                <p className="text-muted-foreground text-sm">8+</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative py-24 px-4 md:px-8 lg:px-12 bg-muted">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold">Impacto</h2>
                        <p className="text-muted-foreground">
                            Conoce cómo el trabajo de este diseñador ha impactado en la industria y la sociedad, dejando una huella
                            duradera.
                        </p>
                    </div>
                    <div className="relative">
                        <img
                            src="/placeholder.svg"
                            width="600"
                            height="400"
                            alt="Impacto del diseñador"
                            className="rounded-lg shadow-lg"
                            style={{ aspectRatio: '600 / 400', objectFit: 'cover' }}
                        />
                        <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium">
                            Reconocido a nivel mundial
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default AntonioFigueroa;
