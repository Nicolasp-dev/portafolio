import React from "react";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#00445b]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full gap-8 text-[#fff] text-center pt-10">
        <h1 className="text-4xl sm:text-5xl font-bold">Nicolas Peña</h1>
        <h2 className="text-4xl sm:text-5xl font-bold tracking-wider ">
          Fullstack Developer Junior
        </h2>
        <p className="tracking-wider text-xl font-thin">
          Conoce mi experiencia y mis proyectos.
        </p>

        <div className=" ">
          <button className="border-[1px] rounded-sm px-6 py-2 my-2 tracking-wider bg-[#fff] text-primary-text font-medium">
            Saber mas . . .
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
