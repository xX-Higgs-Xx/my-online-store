import { useRouter } from 'next/router';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
    const { login } = useAuth();
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        login();
        router.push('/profile');
    };

    const handleBack = () => {
        router.back();
    };

    return (
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm mx-auto max-w-lg lg:mt-28 mt-12">
            <div className="flex flex-col p-6 space-y-1">
                <div className='flex mb-8 justify-between'>
                    <img src="/logo-black.png" alt="logo" className="h-12 md:h-20 ml-0" />
                    <button onClick={handleBack} className="text-sm text-primary underline mb-4">
                        &larr; Regresar
                    </button>
                </div>
                <h3 className="whitespace-nowrap tracking-tight text-2xl font-bold">Iniciar sesión</h3>
                <p className="text-sm text-muted-foreground">
                    Ingresa tu correo electrónico y contraseña para acceder a tu cuenta.
                </p>
            </div>
            <div className="p-6">
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="email"
                        >
                            Correo electrónico
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="email"
                            placeholder="ejemplo@dominio.com"
                            required
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                htmlFor="password"
                            >
                                Contraseña
                            </label>
                            <a className="text-sm text-primary underline" href="#" rel="ugc">
                                ¿Olvidaste tu contraseña?
                            </a>
                        </div>
                        <input
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="password"
                            required
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                        type="submit"
                    >
                        Iniciar sesión
                    </button>
                </form>
            </div>
            <div className="flex items-center p-6 space-y-2">
                <div className="text-center text-sm text-muted-foreground">
                    ¿No tienes una cuenta?{" "}
                    <a className="underline" href="#" rel="ugc">
                        Regístrate
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
