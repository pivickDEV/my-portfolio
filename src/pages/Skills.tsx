import React from "react";
import {
  FiCheckSquare,
  FiCode,
  FiCpu,
  FiDatabase,
  FiGlobe,
  FiLayers,
  FiMonitor,
  FiSmartphone,
  FiTerminal,
} from "react-icons/fi";

const skillCategories = [
  {
    title: "Development Core",
    icon: <FiCode />,
    items: [
      "React",
      "TypeScript",
      "JavaScript (ES6+)",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "Vite",
      "Vue.js",
      "Ionic Vue",
    ],
    tag: "Full-Stack",
  },
  {
    title: "Testing & Quality Assurance",
    icon: <FiCheckSquare />,
    items: [
      "Playwright (TypeScript)",
      "Manual & Automated Testing",
      "Functional & Regression Testing",
      "Smoke, Sanity & Exploratory Testing",
      "API Testing & Bug Reporting",
      "Allure Test Reports",
      "Jira & Test Case Design",
    ],
    tag: "QA / Testing",
  },
  {
    title: "Frontend Libraries",
    icon: <FiMonitor />,
    items: ["React Router", "Axios", "Context API", "Framer Motion"],
    tag: "Frontend",
  },
  {
    title: "AI & Computer Vision",
    icon: <FiCpu />,
    items: ["face-api.js", "Tesseract.js (OCR)", "Face Recognition"],
    tag: "AI",
  },
  {
    title: "IoT & Real-Time Systems",
    icon: <FiGlobe />,
    items: [
      "RTSP Camera Integration",
      "WebSocket Video Streaming",
      "JSMpeg",
      "QR Code Systems",
      "Real-Time Monitoring",
    ],
    tag: "IoT",
  },
  {
    title: "Backend & Data",
    icon: <FiDatabase />,
    items: [
      "MongoDB",
      "Mongoose",
      "REST APIs",
      "JWT Authentication",
      "Role-Based Access Control (RBAC)",
      "node-cron",
      "Firebase (Firestore)",
    ],
    tag: "Backend",
  },
  {
    title: "APIs & Integrations",
    icon: <FiLayers />,
    items: ["Brevo Email API", "SMS Gateway Integration", "QR Code Generation"],
    tag: "Integration",
  },
  {
    title: "Tools & Deployment",
    icon: <FiTerminal />,
    items: ["Git", "GitHub", "Postman", "Vercel", "Railway"],
    tag: "Tools",
  },
  {
    title: "Mobile Development",
    icon: <FiSmartphone />,
    items: ["Capacitor", "Android Studio"],
    tag: "Mobile",
  },
];

const Skills = () => {
  return (
    <section className="relative min-h-screen py-24 bg-white text-black font-geist">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-20">
          <p className="animate-in text-[10px] uppercase tracking-[0.5em] text-zinc-400 mb-4">
            02 — Technical Capabilities
          </p>
          <h2 className="animate-in delay-100 text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-6">
            EXPERT<span className="text-zinc-300">ISE.</span>
          </h2>
          <div className="animate-in delay-200 h-px w-full bg-zinc-100 mb-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px border border-zinc-100">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className={`animate-in bg-white p-8 group border-r border-b border-zinc-100 group hover:bg-zinc-50 transition-colors duration-500 delay-${(idx + 1) * 100}`}
            >
              <div className="flex justify-between items-start mb-8">
                <div className="p-3 border border-zinc-100 group-hover:border-black transition-colors duration-500">
                  {React.cloneElement(
                    cat.icon as React.ReactElement<
                      React.SVGProps<SVGSVGElement>
                    >,
                    {
                      className: "w-5 h-5",
                    },
                  )}
                </div>
                <span className="text-[9px] font-mono tracking-widest text-zinc-400 uppercase border border-zinc-100 px-2 py-1">
                  [{cat.tag}]
                </span>
              </div>

              <h3 className="text-xl font-bold tracking-tight mb-6 uppercase">
                {cat.title}
              </h3>

              <ul className="space-y-3">
                {cat.items.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-zinc-300 group-hover:bg-black transition-colors" />
                    <span className="text-sm font-sans text-zinc-500 group-hover:text-black transition-colors duration-300">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 animate-in delay-500">
          <div className="border border-zinc-100 p-8 flex flex-col md:flex-row justify-between items-center gap-6 bg-zinc-50/50">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.3em] mb-2 text-zinc-400">
                Primary Architecture Focus
              </h4>
              <p className="text-2xl font-bold tracking-tighter">
                MERN STACK <span className="text-zinc-300">/</span> TYPESCRIPT{" "}
                <span className="text-zinc-300">/</span> QA AUTOMATION
              </p>
            </div>
            <div className="flex gap-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-black opacity-10 animate-pulse"
                  style={{ animationDelay: `${i * 200}ms` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
