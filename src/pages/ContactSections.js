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
            <div className="text-muted-foreground">Llámanos al +52 (777) 199-4666 de lunes a viernes de 9am a 6pm.</div>
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
              Envíanos un correo a <a href="mailto:contacto@jaffantoniofigueroa.com" className="text-blue-800">contacto@jaffantoniofigueroa.com</a> y te responderemos a la brevedad.
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
              Síguenos en Instagram <a href="https://www.instagram.com/jaffantoniofigueroa/" target="_blank" rel="noopener noreferrer" className="text-blue-800">@jaffantoniofigueroa</a> para estar al tanto de nuestras últimas novedades.
            </div>
          </div>
          <div className="bg-card rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-4">
              <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-tiktok" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">TikTok</h3>
            </div>
            <div className="text-muted-foreground">
              Interactúa con nosotros en Tiktok <a href="https://www.tiktok.com/@jaffantoniofigueroa" target="_blank" rel="noopener noreferrer" className="text-blue-800">@jaffantoniofigueroa</a> y no te pierdas ninguna noticia.
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
              Encuéntranos en Facebook <a href="https://www.facebook.com/Jaffantoniofigueroa/" target="_blank" rel="noopener noreferrer" className="text-blue-800">/Jaffantoniofigueroa</a> y mantente al tanto de nuestras novedades.
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
              Visítanos en <a href="https://maps.app.goo.gl/9PokcJEsfbRtjqjD8" target="_blank" rel="noopener noreferrer" className="text-blue-800">Calle anenecuilco esquina con trinidad paniagua, Calle 10 de Abril #624, Emiliano Zapata, 62466 Cuernavaca, Mor.</a> 
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default ContactPage;
