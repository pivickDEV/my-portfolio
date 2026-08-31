import { FiArrowUpRight, FiGithub, FiLayers } from "react-icons/fi";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "/Univentry",
    title: "UniVentry",
    tags: ["Full-stack", "IoT", "AI"],
    short: "IoT-powered visitor management system with facial recognition.",
    image: "/univentry-hp.png",
    tech: ["React", "Node.js", "Face API.js", "MongoDB"],
  },
  {
    id: "/AHchecker",
    title: "ApecHomes Attendance",
    tags: ["Mobile", "Internal Tool"],
    short: "Employee attendance monitoring mobile application for ApecHomes.",
    image: "/apecAA-hp.png",
    tech: ["Vue", "Ionic", "Firebase", "Capacitor"],
  },

  {
    id: "/StockForge",
    title: "StockForge",
    tags: ["Full-stack", "Inventory", "RBAC"],
    short:
      "Computer parts sales and inventory system with real-time stock and automated purchase calculations.",
    image: "/stockforge-hp.png",
    tech: ["React", "Node.js", "Express", "TypeScript", "MongoDB"],
  },
];

const Projects = () => {
  return (
    <section className="relative min-h-screen py-24 bg-white text-black font-geist">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-20">
          <p className="animate-in text-[10px] uppercase tracking-[0.5em] text-zinc-400 mb-4">
            03 — Selected Case Studies
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="animate-in delay-100 text-6xl md:text-8xl font-bold tracking-tighter leading-none">
              PROJECTS<span className="text-zinc-300">.</span>
            </h2>
            <p className="animate-in delay-200 text-sm text-zinc-500 max-w-xs font-sans pb-2">
              A collection of systems focused on real-time data, security, and
              mobile accessibility.
            </p>
          </div>
          <div className="animate-in delay-200 h-px w-full bg-zinc-100 mt-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, idx) => (
            <Link
              key={project.id}
              to={`/projects${project.id}`}
              className={`animate-in group block delay-${(idx + 1) * 100}`}
            >
              <div className="relative overflow-hidden bg-zinc-100 aspect-video mb-6 border border-zinc-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover   group-hover:scale-105 transition-all duration-700 ease-in-out"
                />

                <div className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm border border-zinc-200 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <FiArrowUpRight size={20} />
                </div>

                <div className="absolute bottom-4 left-4 flex gap-1">
                  {project.tech.slice(0, 5).map((t) => (
                    <span
                      key={t}
                      className="text-[12px] bg-black text-white px-2 py-0.5 font-mono uppercase tracking-tighter"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-bold uppercase tracking-widest text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-3xl font-bold tracking-tighter mb-3 group-hover:text-zinc-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-zinc-500 font-sans max-w-sm leading-relaxed">
                    {project.short}
                  </p>
                </div>
              </div>

              <div className="mt-8 h-[1px w-full bg-zinc-50 group-hover:bg-black transition-all duration-500 origin-left" />
            </Link>
          ))}
        </div>

        <div className="mt-24 animate-in delay-500 border-t border-zinc-100 pt-12 flex flex-col items-center text-center">
          <FiLayers className="text-zinc-200 mb-4" size={32} />
          <h4 className="text-xl font-bold tracking-tight mb-2">
            Want to see the source code?
          </h4>
          <p className="text-sm text-zinc-500 font-sans mb-8">
            All repositories and technical documentation are available on my
            GitHub.
          </p>
          <a
            href="https://github.com/pivickDEV"
            target="_blank"
            className="flex items-center gap-2 px-8 py-3 border border-zinc-200 hover:border-black transition-colors font-bold text-xs uppercase tracking-widest"
          >
            <FiGithub /> View Repositories
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
