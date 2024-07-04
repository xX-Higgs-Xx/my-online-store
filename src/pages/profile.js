import Navbar from '@/components/Navbar';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Footer from '@/components/Footer';


const ProfilePage = () => {
    const { isAuthenticated, user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/login');
        }
    }, [isAuthenticated, router]);

    if (!isAuthenticated) {
        return <div>Loading...</div>;
    }

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
