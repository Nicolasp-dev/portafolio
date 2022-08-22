import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const About = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: { type: "spring", duration: 1 },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        y: 50,
      });
    }
  }, [inView, animation]);

  return (
    <div name="about" className="w-full bg-[#f6f6f6] py-[6rem]  sm:py-[10rem]">
      <motion.div
        ref={ref}
        animate={animation}
        className="flex flex-col justify-center items-center w-full h-full "
      >
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="font-bold flex flex-col justify-between text-center">
            <p className="text-primary-text text-xl  sm:text-5xl">
              ¡ Bienvenidos !
            </p>
            <i className="text-primary-text mt-5 sm:mt-0 sm:text-xl font-medium">
              "Me apasiona leer, aprender, aplicar y compartir conocimiento
              acerca de la implementación de JavaScript"
            </i>
            <div>
              <p className=" text-2xl mb-5">
                {" "}
                💻 + ☕ = ❤️ <br />
              </p>
              <a
                href="https://github.com/Nicolas-pc-dev/React-Hooks"
                target="_blank"
                rel="noreferrer"
                className="  sm:text-xl text-primary-text font-normal "
              >
                📚 React-hooks (Metodología Cornell)
              </a>{" "}
            </div>
          </div>
          <div className="flex flex-col gap-5  sm:text-lg font-thin text-justify">
            <p>
              Mi nombre es Nicolás Peña, soy médico veterinario con tres años de
              experiencia profesional; Decidí ampliar mis conocimientos
              cautivado por el impacto que las tecnologías tienen en el diario
              vivir y motivado por los cambios globales que en efecto obligan
              imperiosamente a preparar y desarrollar habilidades IT.
            </p>
            <p>
              Por lo anterior, inicié una ruta de aprendizaje enfocada al
              entendimiento de JavaScript y su aplicación en el desarrollo web.
              Con disciplina, dedicación y persistencia he logrado comprender y
              plasmar los conocimientos adquiridos en mis proyectos personales.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
