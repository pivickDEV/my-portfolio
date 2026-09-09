import { FiArrowUpRight, FiCode, FiTerminal } from "react-icons/fi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <section
      id="home-section"
      className="relative min-h-screen flex items-center justify-center py-16 px-6 md:px-12 bg-transparent text-black font-geist overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 max-w-7xl">
        <div className="flex-[1.2] text-left pt-4 lg:pt-0 w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-100 border border-zinc-200/80 rounded-md font-mono text-xs text-zinc-600 mb-6">
            <FiTerminal className="text-zinc-500" />
            <span>SDLC & STLC Engineering</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.92] mb-6">
            SOFTWARE <br />
            <span className="text-zinc-400">ENGINEERING</span> <br />
            <span className="text-zinc-900">& QUALITY.</span>
          </h1>

          <div className="block lg:hidden my-8 max-w-60 mx-auto sm:mx-0">
            <div className="relative w-full aspect-4/5 overflow-hidden bg-transparent border border-zinc-200 shadow-md group">
              <img
                src="/my_pic.png"
                alt="Pivick Lorenzo"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-700 ease-out mix-blend-multiply"
              />
            </div>
          </div>

          <div className="border-l-2 border-black pl-5 md:pl-6 mb-8">
            <h2 className="text-lg md:text-xl font-semibold text-zinc-900 mb-2">
              Pivick Lorenzo — Software Engineer
            </h2>
            <p className="text-sm md:text-base text-zinc-500 leading-relaxed max-w-xl font-sans">
              IT Graduate building scalable web applications with{" "}
              <span className="text-black font-semibold">
                React, Node.js, Express, & MongoDB
              </span>
              , backed by automated testing suites using{" "}
              <span className="text-black font-semibold">
                Playwright (Typescript)
              </span>
              .
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 mb-8 font-mono text-xs text-zinc-500">
            <span className="px-2.5 py-1 bg-zinc-50 border border-zinc-200/60 rounded">
              React
            </span>
            <span className="px-2.5 py-1 bg-zinc-50 border border-zinc-200/60 rounded">
              Node.js
            </span>
            <span className="px-2.5 py-1 bg-zinc-50 border border-zinc-200/60 rounded">
              Express
            </span>
            <span className="px-2.5 py-1 bg-zinc-50 border border-zinc-200/60 rounded">
              MongoDB
            </span>
            <span className="px-2.5 py-1 bg-zinc-50 border border-zinc-200/60 rounded">
              Playwright
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="projects-section"
              smooth={true}
              duration={500}
              offset={-40}
              className="group flex items-center gap-2 px-6 py-3.5 bg-black text-white text-xs uppercase tracking-[0.2em] font-bold hover:bg-zinc-800 transition-all duration-300 cursor-pointer active:scale-[0.98]"
            >
              Explore Work
              <FiCode className="group-hover:rotate-12 transition-transform text-zinc-300" />
            </Link>

            <Link
              to="contact-section"
              smooth={true}
              duration={500}
              offset={-40}
              className="group flex items-center gap-2 px-6 py-3.5 border border-zinc-300 text-black text-xs uppercase tracking-[0.2em] font-bold hover:border-black hover:bg-zinc-50 transition-all duration-300 cursor-pointer active:scale-[0.98]"
            >
              Get in Touch
              <FiArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          <div className="mt-10 pt-6 border-t border-zinc-100 grid grid-cols-3 gap-4 max-w-lg">
            <div>
              <p className="font-mono text-xl md:text-2xl font-bold text-black">
                100%
              </p>
              <p className="text-[10px] md:text-[11px] text-zinc-400 uppercase tracking-wider font-mono mt-0.5">
                SDLC / STLC
              </p>
            </div>
            <div>
              <p className="font-mono text-xl md:text-2xl font-bold text-black">
                MERN
              </p>
              <p className="text-[10px] md:text-[11px] text-zinc-400 uppercase tracking-wider font-mono mt-0.5">
                Core Stack
              </p>
            </div>
            <div>
              <p className="font-mono text-xl md:text-2xl font-bold text-black">
                E2E
              </p>
              <p className="text-[10px] md:text-[11px] text-zinc-400 uppercase tracking-wider font-mono mt-0.5">
                Automation
              </p>
            </div>
          </div>
        </div>

        <div className="hidden lg:block flex-1 w-full max-w-70 xl:max-w-[320px] relative group">
          <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-zinc-300 group-hover:border-black transition-colors duration-500 z-20" />
          <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-zinc-300 group-hover:border-black transition-colors duration-500 z-20" />

          <div className="absolute top-3 right-3 z-20 bg-black/90 backdrop-blur-md text-white px-2.5 py-1 rounded text-[10px] font-mono tracking-wider border border-zinc-700">
            <span className="text-emerald-400">✓</span> QA_TESTS_PASSED
          </div>

          <div className="relative w-full aspect-4/5 overflow-hidden bg-transparent border border-zinc-200 shadow-lg">
            <img
              src="/my_pic.png"
              alt="Pivick Lorenzo"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-700 ease-out mix-blend-multiply"
            />
          </div>

          <div className="absolute inset-0 bg-transparent border border-zinc-200 -z-10 translate-x-3 translate-y-3 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5" />
        </div>
      </div>

      <div className="absolute right-6 top-1/2 -rotate-90 origin-right translate-y-1/2 hidden xl:block pointer-events-none">
        <span className="text-[10px] font-mono tracking-[0.5em] text-zinc-300 uppercase">
          PERFORMANCE • SCALABILITY • AUTOMATION
        </span>
      </div>
    </section>
  );
};

export default Home;
