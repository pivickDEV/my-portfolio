import { useState } from "react";
import {
  FiArrowUpRight,
  FiCode,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { Link } from "react-scroll";

const NavItems = [
  { id: "01", name: "Home", to: "home-section" },
  { id: "02", name: "About", to: "about-section" },
  { id: "03", name: "Skills", to: "skills-section" },
  { id: "04", name: "Projects", to: "projects-section" },
  { id: "05", name: "Contact", to: "contact-section" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white/90 backdrop-blur-md border-b border-zinc-100 z-50 flex items-center justify-between px-6">
        <Link
          to="home-section"
          smooth={true}
          className="font-geist font-bold tracking-tighter text-lg cursor-pointer flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-black animate-ping" />
          P.LORENZO
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Menu"
          className="p-2 text-black hover:bg-zinc-100 transition-colors"
        >
          {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </header>

      <aside
        className={`
          fixed top-0 left-0 h-screen z-50
          bg-white border-r border-zinc-200/80
          transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
          w-72 flex flex-col justify-between p-8 font-geist
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <div>
          <div className="mb-10 pt-2 border-b border-zinc-100 pb-8">
            <Link
              to="home-section"
              smooth={true}
              duration={500}
              className="cursor-pointer group block"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center gap-2 mb-2">
                <FiCode className="text-zinc-400 group-hover:text-black transition-colors" />
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-zinc-400">
                  Portfolio
                </span>
              </div>
              <h1 className="font-bold text-2xl tracking-tighter leading-none transition-colors group-hover:text-zinc-600">
                PIVICK LORENZO
              </h1>
              <p className="text-xs text-zinc-500 font-sans mt-2">
                Software Engineer — Full-Stack & QA
              </p>
            </Link>

            <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-100 border border-zinc-200 rounded-md font-mono text-[11px] text-zinc-600">
              <span className="text-zinc-400">$</span>
              <span className="text-black font-semibold">status</span>
              <span className="text-emerald-600 font-bold">200 OK</span>
            </div>
          </div>

          <nav className="flex flex-col gap-y-1">
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-zinc-400 mb-3 block px-3">
              Navigation
            </span>

            {NavItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                duration={500}
                offset={-40}
                activeClass="!text-black !bg-zinc-100/80 font-bold border-l-2 border-black"
                onClick={() => setIsOpen(false)}
                className="group flex items-center justify-between px-3 py-3 rounded-md text-zinc-400 hover:text-black hover:bg-zinc-50 transition-all cursor-pointer font-sans text-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[11px] text-zinc-300 group-hover:text-black transition-colors">
                    {item.id}
                  </span>
                  <span className="tracking-tight group-hover:translate-x-1 transition-transform duration-300 font-geist">
                    {item.name}
                  </span>
                </div>
                <FiArrowUpRight className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-black text-sm" />
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom Section: Socials & Contact Action */}
        <div className="pt-6 border-t border-zinc-100 flex flex-col gap-5">
          {/* Social Links */}
          <div className="flex items-center justify-between px-1 text-zinc-400">
            <a
              href="https://github.com/pivickDEV"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="p-2 hover:text-black hover:bg-zinc-100 transition-all"
            >
              <FiGithub size={18} />
            </a>
            <a
              href="https://linkedin.com/in/pivick-lorenzo"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 hover:text-black hover:bg-zinc-100 transition-all"
            >
              <FiLinkedin size={18} />
            </a>
            <a
              href="mailto:pivicklorenzo9@gmail.com"
              aria-label="Send Email"
              className="p-2 hover:text-black hover:bg-zinc-100 transition-all"
            >
              <FiMail size={18} />
            </a>
          </div>

          <Link
            to="contact-section"
            smooth={true}
            duration={500}
            className="group relative w-full text-center py-3.5 bg-black text-white text-xs uppercase tracking-[0.2em] font-bold 
                       overflow-hidden transition-all duration-300 hover:bg-zinc-800 active:scale-[0.98] cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Get In Touch
              <FiArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </Link>
        </div>
      </aside>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
