import {
  FiAward,
  FiBookOpen,
  FiBriefcase,
  FiCheckCircle,
} from "react-icons/fi";

const About = () => {
  return (
    <section className="relative min-h-screen py-24 bg-white text-black font-geist">
      <div className="max-w-5xl mx-auto">
        <div className="mb-20 px-4">
          <p className="animate-in text-[10px] uppercase tracking-[0.5em] text-zinc-400 mb-4">
            01 — Discovery & Background
          </p>
          <h2 className="animate-in delay-100 text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-8">
            THE <span className="text-zinc-300">JOURNEY.</span>
          </h2>
          <p className="animate-in delay-200 text-xl text-zinc-500 max-w-3xl leading-relaxed font-sans">
            I am a result-oriented developer bridging the gap between dynamic
            user interfaces and system stability. My background combines{" "}
            <span className="text-black font-medium underline decoration-zinc-200 underline-offset-4">
              academic discipline
            </span>{" "}
            with hands-on industry experience in QA and Mobile development.
          </p>
        </div>

        <div className="mb-32 px-4">
          <div className="flex items-center gap-3 mb-12 animate-in delay-300">
            <FiBriefcase className="text-zinc-400" />
            <h3 className="text-sm uppercase tracking-widest font-bold">
              Professional Experience
            </h3>
            <div className="flex-1 h-px bg-zinc-100 ml-4" />
          </div>

          <div className="space-y-12">
            <div className="animate-in delay-100 group grid grid-cols-1 md:grid-cols-12 gap-8 py-8 border-b border-zinc-50 hover:bg-zinc-50 transition-colors duration-500 px-4">
              <div className="md:col-span-3 text-zinc-400 text-sm font-mono pt-1">
                SEP — DEC 2025
              </div>
              <div className="md:col-span-9">
                <h4 className="text-2xl font-bold tracking-tight mb-1">
                  System QA Analyst Intern
                </h4>
                <p className="text-zinc-500 font-sans mb-4">Kooya! Inc.</p>
                <p className="text-sm font-sans text-zinc-600 mb-6">
                  Worked as the sole QA analyst ensuring software quality across
                  web systems, collaborating with full-stack developers and AI
                  engineers.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8 text-sm font-sans text-zinc-600">
                  <li className="flex gap-2">
                    <FiCheckCircle className="mt-1 flex shrink-0 text-black" />{" "}
                    Developed automated test scripts using Playwright
                    (TypeScript) and Jest to improve testing efficiency.
                  </li>
                  <li className="flex gap-2">
                    <FiCheckCircle className="mt-1 flex shrink-0 text-black" />{" "}
                    Performed manual and automated testing, including
                    functional, regression, and UI testing.
                  </li>
                  <li className="flex gap-2">
                    <FiCheckCircle className="mt-1 flex shrink-0 text-black" />{" "}
                    Created and executed test cases and tracked defects using
                    Jira.
                  </li>
                  <li className="flex gap-2">
                    <FiCheckCircle className="mt-1 flex shrink-0 text-black" />{" "}
                    Collaborated with developers to troubleshoot issues and
                    verify bug fixes.
                  </li>
                  <li className="flex gap-2">
                    <FiCheckCircle className="mt-1 flex shrink-0 text-black" />{" "}
                    Generated Allure test reports to analyze test execution
                    results.
                  </li>
                  <li className="flex gap-2">
                    <FiCheckCircle className="mt-1 flex shrink-0 text-black" />{" "}
                    Validated software requirements and ensured application
                    quality before deployment.
                  </li>
                </ul>
              </div>
            </div>

            <div className="animate-in delay-300 group grid grid-cols-1 md:grid-cols-12 gap-8 py-8 border-b border-zinc-50 hover:bg-zinc-50 transition-colors duration-500 px-4">
              <div className="md:col-span-3 text-zinc-400 text-sm font-mono pt-1">
                FEB — APR 2025
              </div>
              <div className="md:col-span-9">
                <h4 className="text-2xl font-bold tracking-tight mb-1">
                  Mobile App Developer Intern
                </h4>
                <p className="text-zinc-500 font-sans mb-4">APEC Homes</p>
                <p className="text-sm font-sans text-zinc-600 mb-6">
                  Collaborated with mentors to design and develop a mobile
                  application using modern frontend technologies.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8 text-sm font-sans text-zinc-600">
                  <li className="flex gap-2">
                    <FiCheckCircle className="mt-1 flex shrink-0 text-black" />{" "}
                    Built the app with Vue.js, Ionic Vue, Vite (TypeScript),
                    Tailwind CSS, and Capacitor.
                  </li>
                  <li className="flex gap-2">
                    <FiCheckCircle className="mt-1 flex shrink-0 text-black" />{" "}
                    Created prototypes and wireframes using Canva, later
                    transitioning to Figma for UI/UX design consistency.
                  </li>
                  <li className="flex gap-2">
                    <FiCheckCircle className="mt-1 flex shrink-0 text-black" />{" "}
                    Implemented responsive UI layouts and optimized Tailwind CSS
                    usage by avoiding fixed units.
                  </li>
                  <li className="flex gap-2">
                    <FiCheckCircle className="mt-1 flex shrink-0 text-black" />{" "}
                    Integrated REST APIs with Axios and tested responses via
                    Developer Tools and JSON mock data.
                  </li>
                  <li className="flex gap-2">
                    <FiCheckCircle className="mt-1 flex shrink-0 text-black" />{" "}
                    Used Android Studio for splash screen design, logo
                    integration, and Android builds.
                  </li>
                  <li className="flex gap-2">
                    <FiCheckCircle className="mt-1 flex shrink-0 text-black" />{" "}
                    Participated in the full development lifecycle: planning,
                    design, prototyping, development, and QA testing.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-4">
          <div className="animate-in delay-300 p-8 border border-zinc-100 bg-zinc-50/50">
            <div className="flex items-center gap-3 mb-8">
              <FiBookOpen className="text-zinc-400" />
              <h3 className="text-xs uppercase tracking-widest font-bold">
                Education
              </h3>
            </div>
            <h4 className="text-3xl font-bold tracking-tighter mb-2">
              Bachelor of Information Technology
            </h4>
            <p className="text-zinc-500 font-sans text-sm mb-6">
              Rizal Technological University | 2022 — 2026
            </p>
            <div className="flex flex-wrap gap-2">
              <div className="inline-block px-3 py-1 bg-black text-white text-[10px] uppercase tracking-widest font-bold">
                Academic Achiever
              </div>
              <div className="inline-block px-3 py-1 bg-black text-white text-[10px] uppercase tracking-widest font-bold">
                Pasig Scholar
              </div>
            </div>
          </div>

          <div className="animate-in delay-300 p-8 border border-zinc-100 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <FiAward className="text-zinc-400" />
                <h3 className="text-xs uppercase tracking-widest font-bold">
                  Training & Certification
                </h3>
              </div>
              <h4 className="text-xl font-bold tracking-tight mb-2">
                Web Development
              </h4>
              <p className="text-sm text-zinc-500 font-sans leading-relaxed">
                Mindtech Training and Development Institute Inc. | 2021
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-zinc-50">
              <p className="text-[10px] text-zinc-400 font-mono">
                CERT_ID: MINDTECH_2021_WD
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
