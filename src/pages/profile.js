import Navbar from '@/components/Navbar';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Footer from '@/components/Footer';
import products from '../data/products'; // Suponiendo que tienes un archivo de datos de productos

const ProfilePage = () => {
    const { isAuthenticated, user } = useAuth();
    const router = useRouter();
    const [favoriteProducts, setFavoriteProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 4;

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/login');
        } else {
            // Simulamos la obtención de productos favoritos
            const favorites = products.filter(product =>
                ['1', '3', '5', '2', '4', '6', '7'].includes(product.id) // Simula los IDs de productos favoritos
            );
            setFavoriteProducts(favorites);
        }
    }, [isAuthenticated, router]);

    if (!isAuthenticated) {
        return <div>Loading...</div>;
    }

    const totalPages = Math.ceil(favoriteProducts.length / productsPerPage);
    const startIndex = (currentPage - 1) * productsPerPage;
    const selectedProducts = favoriteProducts.slice(startIndex, startIndex + productsPerPage);

    return (
        <div className='bg-zinc-100'>
            <Navbar />
            <div className="bg-background text-foreground pt-28 lg:pt-48">
                <header className="bg-primary text-primary-foreground py-6 px-4 md:px-6">
                    <div className="container mx-auto flex items-center gap-4">
                        <div className="grid gap-1">
                            <h1 className="text-xl font-bold md:text-2xl">{user.name}</h1>
                            <p className="text-sm text-muted-foreground">{user.email}</p>
                        </div>
                    </div>
                </header>
                <main className="container mx-auto grid gap-8 py-8 px-4 md:px-6">
                    <section className="grid gap-4">
                        <h2 className="text-lg font-semibold">Información de contacto</h2>
                        <div className="grid gap-2 md:grid-cols-2">
                            <div className="grid gap-1">
                                <label
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    htmlFor="address"
                                >
                                    Dirección
                                </label>
                                <input
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    id="address"
                                    readOnly
                                    value="123 Cuernavaca, Morelos, Mexico"
                                />
                            </div>
                            <div className="grid gap-1">
                                <label
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    htmlFor="phone"
                                >
                                    Teléfono
                                </label>
                                <input
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    id="phone"
                                    readOnly
                                    value="+52 (555) 555-5555"
                                />
                            </div>
                        </div>
                    </section>
                    <section className="grid gap-4">
                        <h2 className="text-lg font-semibold">Productos Favoritos</h2>
                        {favoriteProducts.length > 0 ? (
                            <div className="relative">
                                <div className="flex items-center justify-between">
                                    {currentPage > 1 && (
                                        <button
                                            className="absolute left-0 z-10 bg-white rounded-full p-2 shadow-lg"
                                            onClick={() => setCurrentPage(currentPage - 1)}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                            </svg>
                                        </button>
                                    )}
                                    <div className="flex gap-4 overflow-hidden w-full">
                                        {selectedProducts.map(product => (
                                            <div key={product.id} className="flex flex-col items-center border rounded-lg p-4 bg-white w-1/4">
                                                <img
                                                    src={product.images[0]}
                                                    alt={product.name}
                                                    className="object-cover w-full h-48 rounded-lg"
                                                />
                                                <div className="mt-2 text-center">
                                                    <h3 className="font-semibold">{product.name}</h3>
                                                    <p className="text-gray-500">${product.price.toFixed(2)}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    {currentPage < totalPages && (
                                        <button
                                            className="absolute right-0 z-10 bg-white rounded-full p-2 shadow-lg"
                                            onClick={() => setCurrentPage(currentPage + 1)}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    )}
                                </div>
                            </div>
                        ) : (
                            <p>No tienes productos favoritos.</p>
                        )}
                    </section>
                    <section className="grid gap-4">
                        <h2 className="text-lg font-semibold">Historial de pedidos</h2>
                        <div className="relative w-full overflow-auto">
                            <table className="w-full caption-bottom text-sm">
                                <thead className="[&amp;_tr]:border-b">
                                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                            Pedido #
                                        </th>
                                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                            Fecha
                                        </th>
                                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                            Total
                                        </th>
                                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                            Estado
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="[&amp;_tr:last-child]:border-0">
                                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">12345</td>
                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">2023-04-15</td>
                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">$99.99</td>
                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                            <div
                                                className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-green-500 text-green-50"
                                                data-v0-t="badge"
                                            >
                                                Entregado
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">12346</td>
                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">2023-03-20</td>
                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">$79.99</td>
                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                            <div
                                                className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-yellow-500 text-yellow-50"
                                                data-v0-t="badge"
                                            >
                                                Pendiente
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">12347</td>
                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">2023-02-10</td>
                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">$59.99</td>
                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                            <div
                                                className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-red-500 text-red-50"
                                                data-v0-t="badge"
                                            >
                                                Cancelado
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                    <section className="grid gap-4">
                        <h2 className="text-lg font-semibold">Editar Perfil</h2>
                        <form className="grid gap-4">
                            <div className="grid gap-1">
                                <label
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    htmlFor="name"
                                >
                                    Nombre
                                </label>
                                <input
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    id="name"
                                    value={user.name}
                                />
                            </div>
                            <div className="grid gap-1">
                                <label
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    htmlFor="email"
                                >
                                    Correo Electrónico
                                </label>
                                <input
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    id="email"
                                    value={user.email}
                                />
                            </div>
                            <div className="grid gap-1">
                                <label
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    htmlFor="phone"
                                >
                                    Teléfono
                                </label>
                                <input
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    id="phone"
                                    value="+1 (555) 555-5555"
                                />
                            </div>
                            <div className="grid gap-1">
                                <label
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    htmlFor="address"
                                >
                                    Dirección
                                </label>
                                <textarea
                                    className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    id="address"
                                    rows="3"
                                >
                                    123 Cuernavaca, Morelos, Mexico
                                </textarea>
                            </div>
                        </form>
                    </section>
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default ProfilePage;
