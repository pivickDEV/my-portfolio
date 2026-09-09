import {
  FiAward,
  FiBookOpen,
  FiBriefcase,
  FiCheck,
  FiTerminal,
} from "react-icons/fi";

const About = () => {
  return (
    <section
      id="about-section"
      className="relative min-h-screen py-24 bg-transparent text-black font-geist"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-20">
          <p className="animate-in text-[10px] uppercase tracking-[0.5em] text-zinc-400 mb-4 font-mono flex items-center gap-2">
            <FiTerminal className="text-zinc-400" size={12} />
            02 — DISCOVERY & BACKGROUND
          </p>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="animate-in delay-100 text-6xl md:text-8xl font-bold tracking-tighter leading-none">
              THE JOURNEY<span className="text-zinc-300">.</span>
            </h2>
            <p className="animate-in delay-200 text-sm text-zinc-500 max-w-xs font-sans pb-2">
              Combining academic discipline with hands-on industry experience in
              full-stack web, mobile, and test automation.
            </p>
          </div>
          <div className="animate-in delay-200 h-px w-full bg-zinc-100 mt-8" />
        </div>

        <div className="mb-20">
          <p className="text-xl md:text-3xl text-zinc-600 max-w-4xl leading-snug font-sans tracking-tight">
            My goal is to build scalable, full-stack web applications that
            balance intuitive design with backend reliability. My journey
            combines{" "}
            <span className="text-black font-bold underline decoration-zinc-300 underline-offset-8">
              academic discipline
            </span>{" "}
            with hands-on industry experience in mobile development and test
            automation.
          </p>
        </div>

        <div className="mb-24">
          <div className="flex items-center gap-3 mb-12">
            <FiBriefcase className="text-black" size={18} />
            <h3 className="text-xs uppercase tracking-[0.3em] font-mono font-bold text-zinc-900">
              Professional Experience
            </h3>
            <div className="flex-1 h-px bg-zinc-100 ml-2" />
          </div>

          <div className="space-y-16">
            <div className="group relative">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 mb-6">
                <div>
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block mb-2">
                    System Quality Assurance
                  </span>
                  <h4 className="text-3xl md:text-4xl font-bold tracking-tight text-black group-hover:text-zinc-600 transition-colors">
                    System QA Analyst Intern
                  </h4>
                  <p className="text-sm font-mono text-zinc-500 uppercase tracking-tight mt-1">
                    Kooya! Inc.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[12px] bg-black text-white px-3 py-1 font-mono uppercase tracking-tighter">
                    SEP — DEC 2025
                  </span>
                </div>
              </div>

              <p className="text-sm text-zinc-500 font-sans mb-8 leading-relaxed max-w-3xl">
                Worked as the sole QA analyst ensuring software quality across
                web systems, collaborating with full-stack developers and AI
                engineers.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Developed automated test scripts using Playwright (TypeScript) and Jest to improve testing efficiency.",
                  "Performed manual and automated testing, including functional, regression, and UI testing.",
                  "Created and executed test cases and tracked defects using Jira.",
                  "Collaborated with developers to troubleshoot issues and verify bug fixes.",
                  "Generated Allure test reports to analyze test execution results.",
                  "Validated software requirements and ensured application quality before deployment.",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 bg-zinc-50/60 border border-zinc-100 group-hover:bg-zinc-100/50 transition-colors"
                  >
                    <div className="w-4 h-4 bg-black text-white flex items-center justify-center shrink-0 mt-0.5 text-[10px]">
                      <FiCheck />
                    </div>
                    <span className="text-xs text-zinc-700 leading-relaxed font-sans">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 h-px w-full bg-zinc-100 group-hover:bg-black transition-colors duration-500" />
            </div>

            <div className="group relative">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 mb-6">
                <div>
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block mb-2">
                    Frontend & Mobile Systems
                  </span>
                  <h4 className="text-3xl md:text-4xl font-bold tracking-tight text-black group-hover:text-zinc-600 transition-colors">
                    Mobile App Developer Intern
                  </h4>
                  <p className="text-sm font-mono text-zinc-500 uppercase tracking-tight mt-1">
                    APEC Homes
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[12px] bg-black text-white px-3 py-1 font-mono uppercase tracking-tighter">
                    FEB — APR 2025
                  </span>
                </div>
              </div>

              <p className="text-sm text-zinc-500 font-sans mb-8 leading-relaxed max-w-3xl">
                Collaborated with mentors to design and develop a mobile
                application using modern frontend technologies.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Built the app with Vue.js, Ionic Vue, Vite (TypeScript), Tailwind CSS, and Capacitor.",
                  "Created prototypes and wireframes using Canva, later transitioning to Figma for UI/UX design consistency.",
                  "Implemented responsive UI layouts and optimized Tailwind CSS usage by avoiding fixed units.",
                  "Integrated REST APIs with Axios and tested responses via Developer Tools and JSON mock data.",
                  "Used Android Studio for splash screen design, logo integration, and Android builds.",
                  "Participated in the full development lifecycle: planning, design, prototyping, development, and QA testing.",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 bg-zinc-50/60 border border-zinc-100 group-hover:bg-zinc-100/50 transition-colors"
                  >
                    <div className="w-4 h-4 bg-black text-white flex items-center justify-center shrink-0 mt-0.5 text-[10px]">
                      <FiCheck />
                    </div>
                    <span className="text-xs text-zinc-700 leading-relaxed font-sans">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 h-px w-full bg-zinc-100 group-hover:bg-black transition-colors duration-500" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-8 border border-zinc-100 bg-zinc-50/50 flex flex-col justify-between relative group hover:border-black transition-colors duration-300">
            <div>
              <div className="flex items-center gap-2 mb-6 text-zinc-400 font-mono text-xs uppercase tracking-widest">
                <FiBookOpen size={16} />
                <span>Education</span>
              </div>

              <h4 className="text-2xl font-bold tracking-tight mb-2 text-black">
                Bachelor of Information Technology
              </h4>

              <p className="text-zinc-500 font-mono text-xs uppercase tracking-wider mb-8">
                Rizal Technological University | 2022 — 2026
              </p>
            </div>

            <div className="pt-6 border-t border-zinc-200/80 flex flex-wrap gap-2">
              <span className="text-[12px] bg-black text-white px-2 py-0.5 font-mono uppercase tracking-tighter">
                Academic Achiever
              </span>
              <span className="text-[12px] bg-black text-white px-2 py-0.5 font-mono uppercase tracking-tighter">
                Pasig Scholar
              </span>
            </div>
          </div>

          <div className="p-8 border border-zinc-100 bg-zinc-50/50 flex flex-col justify-between relative group hover:border-black transition-colors duration-300">
            <div>
              <div className="flex items-center gap-2 mb-6 text-zinc-400 font-mono text-xs uppercase tracking-widest">
                <FiAward size={16} />
                <span>Training & Certification</span>
              </div>

              <h4 className="text-2xl font-bold tracking-tight mb-2 text-black">
                Web Development
              </h4>

              <p className="text-zinc-500 font-mono text-xs uppercase tracking-wider mb-8">
                Mindtech Training and Development Institute Inc. | 2021
              </p>
            </div>

            <div className="pt-6 border-t border-zinc-200/80 flex items-center justify-between font-mono text-[11px] text-zinc-400">
              <span className="uppercase tracking-widest font-bold text-black">
                CERTIFIED
              </span>
              <span className="text-[12px] bg-black text-white px-2 py-0.5 font-mono uppercase tracking-tighter">
                MINDTECH_2021_WD
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
