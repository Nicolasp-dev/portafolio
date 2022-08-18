import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full  bg-[#f6f6f6]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className=" pb-8 pl-4"></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="font-bold flex flex-col justify-between text-center">
            <p className="text-primary-text text-xl  sm:text-4xl">
              Un gusto conocerte, Sientete libre de explorar.
            </p>
            <i className="text-primary-text mt-5 sm:mt-0 sm:text-xl font-medium">
              "Me apasiona leer, aprender, aplicar y compartir conocimiento
              acerca de la implementación de JavaScript"
            </i>
            <p className=" text-2xl"> 💻 + ☕ = ❤️ </p>
          </div>
          <div className="flex flex-col gap-5  sm:text-lg font-thin text-justify">
            <p>
              Mi nombre es Nicolás Peña, soy médico veterinario con tres años de
              experiencia profesional; sin embargo, he decidido migrar de
              profesión cautivado por el impacto que la tecnología y sus
              múltiples ramas de conocimiento tienen en el diario vivir, además
              de los cambios globales que vivimos actualmente.
            </p>
            <p>
              Por lo anterior, inicié una ruta de aprendizaje autónoma enfocada
              al entendimiento de JavaScript y su aplicación en el desarrollo
              web. Con disciplina, dedicación y persistencia he logrado
              comprender y plasmar los conocimientos adquiridos en mis proyectos
              personales.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
