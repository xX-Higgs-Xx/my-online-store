import { useRouter } from 'next/router';

const Footer = () => {
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <footer className="bg-zinc-800 text-white py-4 w-full px-10">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 text-sm">
        <div className="flex-col">
          <h3 className="font-semibold">Legal</h3>
          <div className="w-full h-px bg-zinc-600 my-2"></div>
          <div className="grid">
            <a href="https://drive.google.com/file/d/1a8i9Q9xKKYwV2LOJoqFVcbgs-NwiwE-q/view?usp=sharing" target="_blank" rel="noopener noreferrer">Términos y Condiciones</a>
            <a href="https://drive.google.com/file/d/1Q-YYxemx9W0-6Dtsae5eXyP_6a1EbwzH/view?usp=sharing" target="_blank" rel="noopener noreferrer">Políticas de Privacidad</a>
            <a href="https://drive.google.com/file/d/1mo7xm84BSitGg_74BiotXEDxKHBSWLll/view?usp=sharing" target="_blank" rel="noopener noreferrer">Política de Envio y Devolución</a>
          </div>
        </div>
        <div className="flex-col">
          <h3 className="font-semibold">Conocenos</h3>
          <div className="w-full h-px bg-zinc-600 my-2"></div>
          <div className="grid">
            <a onClick={() => handleNavigation('/aboutUs')} className="cursor-pointer">Misión, visión y objetivos</a>
            <a onClick={() => handleNavigation('/ContactSections')} className="cursor-pointer">Contáctanos</a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs mt-4">
        © 2024 Antonio Figueroa JAFF, Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
