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
    <section className="relative min-h-screen py-24 bg-transparent text-black font-geist">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-20">
          <p className="animate-in text-[10px] uppercase tracking-[0.5em] text-zinc-400 mb-4">
            03 — Technical Capabilities
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="animate-in delay-100 text-6xl md:text-8xl font-bold tracking-tighter leading-none">
              EXPERTISE<span className="text-zinc-300">.</span>
            </h2>
            <p className="animate-in delay-200 text-sm text-zinc-500 max-w-xs font-sans pb-2">
              Engineered for modularity, speed, and cross-platform performance.
            </p>
          </div>
          <div className="animate-in delay-200 h-px w-full bg-zinc-100 mt-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className={`animate-in group flex flex-col justify-between delay-${
                (idx + 1) * 100
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-400">
                    {cat.tag}
                  </span>
                  <div className="text-zinc-400 group-hover:text-black transition-colors">
                    {React.cloneElement(
                      cat.icon as React.ReactElement<
                        React.SVGProps<SVGSVGElement>
                      >,
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-bold tracking-tight mb-4 group-hover:text-zinc-600 transition-colors">
                  {cat.title}
                </h3>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cat.items.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[12px] bg-black text-white px-2 py-0.5 font-mono uppercase tracking-tighter"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="h-px w-full bg-zinc-100 group-hover:bg-black transition-colors duration-500" />
            </div>
          ))}
        </div>

        <div className="mt-24 animate-in delay-500 border-t border-zinc-100 pt-12 flex flex-col items-center text-center">
          <FiLayers className="text-zinc-200 mb-4" size={32} />
          <h4 className="text-xs uppercase tracking-[0.4em] font-bold text-zinc-400 mb-2">
            Primary Architecture Focus
          </h4>
          <p className="text-2xl md:text-3xl font-bold tracking-tighter text-black">
            MERN STACK <span className="text-zinc-300">/</span> TYPESCRIPT{" "}
            <span className="text-zinc-300">/</span> QA AUTOMATION
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
