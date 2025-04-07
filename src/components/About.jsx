import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { FormattedMessage } from "react-intl";

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
          <div className="font-bold flex flex-col justify-between text-center text-primary-text text-xl  sm:text-5xl">
            <FormattedMessage id="about.greeting" defaultMessage="¡ Welcome !" />
            <i className="text-primary-text mt-5 sm:mt-0 sm:text-xl font-medium">
              "
              <FormattedMessage
                id="about.header"
                defaultMessage="I am passionate about reading, learning, applying and sharing knowledge about JavaScript implementation"
              />
              "<p>Robert C. Martins</p>
            </i>
            <div>
              <p className=" text-2xl mb-5">
                💻 + ☕ = ❤️ <br />
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5  sm:text-lg font-thin text-justify">
            <p>
              <FormattedMessage id="about.fParagraph" />
            </p>
            <p>
              <FormattedMessage id="about.sParagraph" />
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
