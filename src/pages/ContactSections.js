// src/pages/contact.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactPage = () => (
  <div className="w-full h-full">
    <Navbar />
    <section className="w-full h-screen justify-center flex flex-col items-center ">
      <div className="container px-4 md:px-6 space-y-8 mx-auto">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contáctanos</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Estamos aquí para ayudarte con cualquier duda o consulta que tengas.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mx-auto">
          <div className="bg-card rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-4">
              <div className="bg-primary rounded-md p-3 flex items-center justify-center">
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
                  className="w-6 h-6 text-primary-foreground"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Teléfono</h3>
            </div>
            <div className="text-muted-foreground">Llámanos al +1 (555) 123-4567 de lunes a viernes de 9am a 6pm.</div>
          </div>
          <div className="bg-card rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-4">
              <div className="bg-primary rounded-md p-3 flex items-center justify-center">
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
                  className="w-6 h-6 text-primary-foreground"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Email</h3>
            </div>
            <div className="text-muted-foreground">
              Envíanos un correo a info@jaffantoniofigueroa.com y te responderemos a la brevedad.
            </div>
          </div>
          <div className="bg-card rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-4">
              <div className="bg-primary rounded-md p-3 flex items-center justify-center">
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
                  className="w-6 h-6 text-primary-foreground"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Instagram</h3>
            </div>
            <div className="text-muted-foreground">
              Síguenos en Instagram @fashiondesign para estar al tanto de nuestras últimas novedades.
            </div>
          </div>
          <div className="bg-card rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-4">
              <div className="bg-primary rounded-md p-3 flex items-center justify-center">
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
                  className="w-6 h-6 text-primary-foreground"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Twitter</h3>
            </div>
            <div className="text-muted-foreground">
              Interactúa con nosotros en Twitter @fashiondesign y comparte tus ideas.
            </div>
          </div>
          <div className="bg-card rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-4">
              <div className="bg-primary rounded-md p-3 flex items-center justify-center">
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
                  className="w-6 h-6 text-primary-foreground"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Facebook</h3>
            </div>
            <div className="text-muted-foreground">
              Encuéntranos en Facebook /fashiondesign y mantente al tanto de nuestras novedades.
            </div>
          </div>
          <div className="bg-card rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-4">
              <div className="bg-primary rounded-md p-3 flex items-center justify-center">
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
                  className="w-6 h-6 text-primary-foreground"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Ubicación</h3>
            </div>
            <div className="text-muted-foreground">
              Visítanos en 123 Avenida de la Moda, Ciudad de la Moda, País de la Moda.
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default ContactPage;
