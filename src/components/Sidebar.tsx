import { useState } from "react";
import { FiArrowRight, FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-scroll";

const NavItems = [
  { name: "Home", to: "home-section" },
  { name: "About", to: "about-section" },
  { name: "Skills", to: "skills-section" },
  { name: "Projects", to: "projects-section" },
  { name: "Contact", to: "contact-section" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md border-b border-zinc-100 z-50 flex items-center justify-between px-6">
        <span className="font-geist font-bold tracking-tighter text-xl">
          P.LORENZO
        </span>
        <button onClick={() => setIsOpen(!isOpen)} className="text-black p-2">
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      <aside
        className={`
          fixed top-0 left-0 h-screen z-50 
          bg-white border-r border-zinc-100
          transition-transform duration-300 ease-in-out
          w-64 flex flex-col justify-between p-8
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0
        `}
      >
        <div>
          <div className="mb-12">
            <Link
              to="hero-section"
              smooth={true}
              className="cursor-pointer group"
              onClick={() => setIsOpen(false)}
            >
              <h1 className="font-geist font-bold text-xl tracking-tighter transition-colors group-hover:text-zinc-500">
                PIVICK LORENZO
              </h1>
              <div className="h-1 w-8 bg-black mt-1 transition-all group-hover:w-12" />
            </Link>
          </div>

          <nav className="flex flex-col gap-y-4">
            {NavItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setIsOpen(false)}
                className="group flex items-center text-zinc-400 hover:text-black font-geist text-lg transition-colors cursor-pointer"
              >
                <span className="w-0 overflow-hidden transition-all duration-300 group-hover:w-4 opacity-0 group-hover:opacity-100">
                  <FiArrowRight className="mr-2 text-black" size={14} />
                </span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  {item.name}
                </span>
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-auto">
          <div className="p-4 bg-zinc-50 rounded-sm border border-zinc-100 mb-6">
            <p className="text-[10px] uppercase tracking-widest text-zinc-400 mb-1">
              Status
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs font-medium text-zinc-600">
                Available for Work
              </span>
            </div>
          </div>

          <Link
            to="contact-section"
            smooth={true}
            className="block w-full text-center py-3 bg-black text-white text-xs uppercase tracking-widest font-bold 
                       hover:bg-zinc-800 transition-all duration-300 active:scale-95 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Connect
          </Link>

          <p className="mt-6 text-[10px] text-zinc-300 font-mono">
            © 2026 P.LORENZO
          </p>
        </div>
      </aside>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
