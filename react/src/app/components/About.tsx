import Image from "next/image";
import React from "react";

export default function AboutMe() {
  return (
    <div className="sm:px-8 my-16 sm:my-32">
      <div className="mx-auto w-full max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
              {/* Imagen */}
              <div className="lg:pl-20">
                <div className="max-w-xs px-2.5 lg:max-w-none">
                  <Image
                    alt="Portrait"
                    src="/enrique-teruel.jpeg"
                    width={800}
                    height={800}
                    className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                    sizes="(min-width: 1024px) 32rem, 20rem"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              {/* Texto */}
              <div className="lg:order-first lg:row-span-2">
                <h1 className="text-3xl font-medium  text-zinc-800 sm:text-5xl dark:text-zinc-100">
                  Soy Enrique Teruel Gutiérrez, desarrollador y diseñador con
                  sede entre Murcia y Barcelona.
                </h1>
                <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                  <p>
                    Mi viaje en el desarrollo y diseño comenzó hace más de una
                    década, cuando descubrí la capacidad que tenía el código de
                    transformar ideas en experiencias reales. Recuerdo mi
                    primera línea de código como el inicio de un apasionante
                    desafío por resolver problemas y mejorar la vida de los
                    usuarios a través de la tecnología.
                  </p>
                  <p>
                    Desde entonces, he tenido el privilegio de trabajar en
                    entornos dinámicos, ayudando a startups y consultoras a
                    escalar sus productos con soluciones que van más allá de lo
                    funcional y se enfocan en la excelencia. He dominado
                    tecnologías como Angular, TypeScript, Node.js, JavaScript,
                    CSS, SASS, HTML5, GIT, y PHP, siempre buscando cómo
                    aprovecharlas al máximo para crear interfaces que no solo se
                    vean bien, sino que también sean intuitivas y accesibles.
                  </p>
                  <p>
                    Pero el desarrollo y el diseño nunca son solo sobre el
                    código. He tenido la oportunidad de liderar equipos de
                    diseño y desarrollo, colaborando con departamentos de
                    negocio para transformar visiones en productos concretos. El
                    trabajo en equipo, la gestión ágil y el entendimiento de las
                    necesidades del usuario final son elementos que han marcado
                    mi enfoque profesional, guiado siempre por metodologías como
                    AGILE y SCRUM.
                  </p>
                  <p>
                    Hoy en día, me especializo en desarrollo front-end y
                    back-end, UX/UI, maquetación web, y en prototipado de alta y
                    baja fidelidad. Disfruto trabajando con clientes para
                    convertir sus ideas en experiencias sólidas, aplicando
                    pruebas de calidad rigurosas y asegurándome de que cada
                    detalle esté cuidado. Al final del día, se trata de combinar
                    tecnología y diseño para contar historias que resuenen y
                    creen un impacto duradero.
                  </p>
                </div>
              </div>

              {/* Enlaces Sociales */}
              <div className="lg:pl-20">
                <ul role="list">
                  <li className="flex  items-center">
                    <a
                      className="group flex  items-center text-sm font-medium text-zinc-800 transition dark:text-zinc-200 dark:hover:text-teal-500"
                      href="https://www.linkedin.com/in/enriqueteru/"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="24"
                        height="24"
                        viewBox="0 0 32 32"
                      >
                        <path d="M 7.5 5 C 6.132813 5 5 6.132813 5 7.5 L 5 24.5 C 5 25.867188 6.132813 27 7.5 27 L 24.5 27 C 25.867188 27 27 25.867188 27 24.5 L 27 7.5 C 27 6.132813 25.867188 5 24.5 5 Z M 7.5 7 L 24.5 7 C 24.785156 7 25 7.214844 25 7.5 L 25 24.5 C 25 24.785156 24.785156 25 24.5 25 L 7.5 25 C 7.214844 25 7 24.785156 7 24.5 L 7 7.5 C 7 7.214844 7.214844 7 7.5 7 Z M 10.4375 8.71875 C 9.488281 8.71875 8.71875 9.488281 8.71875 10.4375 C 8.71875 11.386719 9.488281 12.15625 10.4375 12.15625 C 11.386719 12.15625 12.15625 11.386719 12.15625 10.4375 C 12.15625 9.488281 11.386719 8.71875 10.4375 8.71875 Z M 19.46875 13.28125 C 18.035156 13.28125 17.082031 14.066406 16.6875 14.8125 L 16.625 14.8125 L 16.625 13.5 L 13.8125 13.5 L 13.8125 23 L 16.75 23 L 16.75 18.3125 C 16.75 17.074219 16.996094 15.875 18.53125 15.875 C 20.042969 15.875 20.0625 17.273438 20.0625 18.375 L 20.0625 23 L 23 23 L 23 17.78125 C 23 15.226563 22.457031 13.28125 19.46875 13.28125 Z M 9 13.5 L 9 23 L 11.96875 23 L 11.96875 13.5 Z"></path>
                      </svg>

                      <span className="ml-2">Conectemos </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
