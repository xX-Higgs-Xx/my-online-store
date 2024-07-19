import { useRouter } from 'next/router';

const Footer = () => {
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <footer className="bg-zinc-800 text-white py-4 md:py-12 w-full">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 text-sm">
        <div className="flex-col">
          <h3 className="font-semibold">Legal</h3>
          <div className="w-full h-px bg-zinc-600 my-2"></div>
          <div className="grid">
            <a href="#">Términos y Condiciones</a>
            <a href="#">Políticas de Privacidad</a>
            <a href="#">Política de Cancelación</a>
          </div>
        </div>
        <div className="flex-col">
          <h3 className="font-semibold">Mi Cuenta</h3>
          <div className="w-full h-px bg-zinc-600 my-2"></div>
          <div className="grid">
            <a onClick={() => handleNavigation('/profile')} className="cursor-pointer">Perfil</a>
            <a onClick={() => handleNavigation('/orders')} className="cursor-pointer">Pedidos</a>
          </div>
        </div>
        <div className="flex-col">
          <h3 className="font-semibold">Contacto</h3>
          <div className="w-full h-px bg-zinc-600 my-2"></div>
          <a onClick={() => handleNavigation('/ContactSections')} className="cursor-pointer">Contáctanos</a>
        </div>
      </div>
      <div className="text-center text-xs mt-4">
        © 2024 Antonio Figueroa JAFF, Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
