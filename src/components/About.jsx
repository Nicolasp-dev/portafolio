import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#f6f6f6]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className=" pb-8 pl-4"></div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="font-bold flex flex-col justify-between text-center">
            <p className="text-primary-text text-4xl">
              Un gusto conocerte, Sientete libre de explorar.
            </p>
            <i className="text-primary-text text-xl font-medium">
              "Me apasiona leer, aprender, aplicar y compartir conocimiento
              acerca de la implementación de JavaScript"
            </i>
            <p className=" text-2xl"> 💻 + ☕ = ❤️ </p>
          </div>
          <div className="flex flex-col gap-5 text-lg font-thin text-justify">
            <p>
              Mi nombre es Nicolas Peña, soy medico veterinario con tres años de
              experiencia profesional, sin embargo e decidido migrar de
              profesión cautivado por el impacto que la tecnologia y sus
              multiples ramas de conocimiento tienen en el diario vivir, ademas
              de los cambios globales que vivimos actualmente. <br />
            </p>
            <p>
              Por lo anterior inicie una ruta de aprendizaje autonoma enfocada
              al entendimiento de JavaScript y su aplicación en el desarrollo
              web. Con disciplina, dedicación y persistencia e logrado
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
