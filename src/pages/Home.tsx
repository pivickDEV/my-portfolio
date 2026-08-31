import { FiArrowDownRight, FiCode } from "react-icons/fi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-12 px-6 bg-white text-black font-geist overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 max-w-7xl">
        <div className="flex-[1.2] text-left">
          <h1 className="animate-in delay-100 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-6">
            FULL-STACK <br />
            <span className="text-zinc-400">& QUALITY </span>
            ENGINEERING<span className="text-zinc-300">.</span>
          </h1>

          <div className="animate-in delay-200 border-l-2 border-black pl-6 mb-10">
            <h2 className="text-xl md:text-2xl font-medium text-zinc-800 mb-4">
              Pivick Lorenzo — Software QA Analyst & Full-Stack Developer
            </h2>
            <p className="text-base md:text-lg text-zinc-500 leading-relaxed max-w-xl font-sans">
              IT Graduate with hands-on experience across the complete SDLC and
              STLC. Skilled in{" "}
              <span className="text-black font-semibold">
                manual & automated testing (Playwright)
              </span>{" "}
              and building web applications with{" "}
              <span className="text-black font-semibold">
                React, Express, and MongoDB.
              </span>
            </p>
          </div>

          <div className="animate-in delay-300 flex flex-wrap gap-4">
            <Link
              to="projects-section"
              smooth={true}
              className="group flex items-center gap-2 px-8 py-4 bg-black text-white text-xs uppercase tracking-widest font-bold hover:bg-zinc-800 transition-all duration-300 cursor-pointer"
            >
              Explore Work
              <FiCode className="group-hover:rotate-12 transition-transform" />
            </Link>

            <Link
              to="contact-section"
              smooth={true}
              className="group flex items-center gap-2 px-8 py-4 border border-zinc-200 text-black text-xs uppercase tracking-widest font-bold hover:border-black transition-all duration-300 cursor-pointer"
            >
              Get in Touch
              <FiArrowDownRight className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="animate-in delay-200 flex-1 relative group">
          <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-zinc-200 group-hover:border-black transition-colors duration-500" />
          <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-zinc-200 group-hover:border-black transition-colors duration-500" />

          <div className="relative w-full aspect-4/5 max-w-100 mx-auto overflow-hidden bg-zinc-100 border border-zinc-100">
            <div className="absolute inset-0 z-10 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <img
              src="/my_pic.png"
              alt="Pivick Lorenzo"
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000 ease-in-out"
            />
          </div>

          <div className="absolute inset-0 bg-zinc-100 -z-10 translate-x-4 translate-y-4 transition-transform group-hover:translate-x-0 group-hover:translate-y-0" />
        </div>
      </div>

      <div className="absolute right-6 top-1/2 -rotate-90 origin-right translate-y-1/2 hidden xl:block">
        <span className="text-[10px] font-mono tracking-[0.5em] text-zinc-300 uppercase">
          Focused on performance & scalability
        </span>
      </div>
    </section>
  );
};

export default Home;
