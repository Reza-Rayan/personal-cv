// Custom Components
import Hero from "./components/Hero";
import BgShapes from "./components/BgShapes";
import Skills from "./components/Skills";
//------------------------------------------------

const HomPg = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col gap-y-10 lg:gap-y-20">
        <BgShapes />
        <Hero />
        <div className="mt-20">
          <Skills />
        </div>
      </div>
    </>
  );
};

export default HomPg;
