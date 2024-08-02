// src/components/withAdminAuth.js
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const withAdminAuth = (WrappedComponent) => {
    return (props) => {
        const router = useRouter();

        useEffect(() => {
            const isAuthenticated = true; // Aquí va la lógica para verificar si el usuario está autenticado.
            // Podrías usar un token JWT almacenado en cookies o localStorage para verificar la autenticación.
            if (!isAuthenticated) {
                router.replace('/admin'); // Redirigir al login de admin si no está autenticado
            }
        }, []);

        return <WrappedComponent {...props} />;
    };
};

export default withAdminAuth;
