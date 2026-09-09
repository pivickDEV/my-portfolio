import { useState } from "react";
import {
  FiCheck,
  FiCopy,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiTerminal,
} from "react-icons/fi";

const GetInTouch = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("pivicklorenzo9@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact-section"
      className="relative min-h-screen py-24 bg-transparent text-black font-geist"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-20">
          <p className="animate-in text-[10px] uppercase tracking-[0.5em] text-zinc-400 mb-4 font-mono flex items-center gap-2">
            <FiTerminal className="text-zinc-400" size={12} />
            05 — CONNECTIVITY & OUTREACH
          </p>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="animate-in delay-100 text-6xl md:text-8xl font-bold tracking-tighter leading-none">
              REACH <span className="text-zinc-300">OUT.</span>
            </h2>
            <p className="animate-in delay-200 text-sm text-zinc-500 max-w-xs font-sans pb-2">
              Open for full-stack engineering roles, technical inquiries, or
              full project collaborations.
            </p>
          </div>
          <div className="animate-in delay-200 h-px w-full bg-zinc-100 mt-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-zinc-200 border border-zinc-200">
          <div className="animate-in delay-200 md:col-span-7 bg-white p-10 md:p-14 flex flex-col justify-between group">
            <div>
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block mb-4">
                OPEN FOR OPPORTUNITIES
              </span>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Let's build something <br />
                <span className="text-zinc-400">exceptional.</span>
              </h3>
              <p className="text-zinc-500 font-sans leading-relaxed mb-12 max-w-md text-sm">
                I am actively seeking opportunities where I can apply my
                expertise in{" "}
                <span className="text-black font-semibold underline decoration-zinc-200 underline-offset-4">
                  Full-Stack Development
                </span>{" "}
                and{" "}
                <span className="text-black font-semibold underline decoration-zinc-200 underline-offset-4">
                  Automated Systems Testing
                </span>
                .
              </p>
            </div>

            <button
              type="button"
              onClick={copyToClipboard}
              className="flex items-center gap-6 p-6 border border-zinc-200 bg-zinc-50/60 hover:bg-black hover:text-white hover:border-black transition-all duration-300 text-left group/btn"
            >
              <div className="p-4 bg-white text-black border border-zinc-200 group-hover/btn:bg-zinc-900 group-hover/btn:text-white group-hover/btn:border-zinc-800 transition-colors shrink-0">
                {copied ? <FiCheck size={20} /> : <FiMail size={20} />}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] uppercase tracking-widest font-mono text-zinc-400 group-hover/btn:text-zinc-400 mb-1">
                  {copied
                    ? "Address Copied to Clipboard"
                    : "Primary Email Contact"}
                </p>
                <p className="text-base md:text-lg font-bold font-mono truncate">
                  pivicklorenzo9@gmail.com
                </p>
              </div>
              <FiCopy
                className="text-zinc-400 group-hover/btn:text-white transition-colors shrink-0"
                size={18}
              />
            </button>
          </div>

          <div className="animate-in delay-300 md:col-span-5 bg-white p-10 flex flex-col justify-between gap-10">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-zinc-50 border border-zinc-200 text-black">
                  <FiMapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-mono text-zinc-400 font-bold">
                    Location Base
                  </p>
                  <p className="text-sm font-bold tracking-tight text-black mt-0.5">
                    Pasig City, Metro Manila, PH
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-8 border-t border-zinc-100">
                <p className="text-[10px] uppercase tracking-widest font-mono text-zinc-400 font-bold">
                  Digital Footprint
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://linkedin.com/in/pivick-lorenzo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-4 border border-zinc-200 bg-zinc-50/50 hover:bg-black hover:text-white hover:border-black transition-colors font-mono text-xs uppercase tracking-wider"
                  >
                    <FiLinkedin size={16} />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/pivickDEV"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-4 border border-zinc-200 bg-zinc-50/50 hover:bg-black hover:text-white hover:border-black transition-colors font-mono text-xs uppercase tracking-wider"
                  >
                    <FiGithub size={16} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="p-4 bg-zinc-50 border border-zinc-200 flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-700">
                Status: Available for Roles
              </p>
            </div>
          </div>

          <div className="animate-in delay-400 md:col-span-12 bg-white border-t border-zinc-200">
            <a
              href="/CV-Pivick.pdf"
              download
              className="flex flex-col md:flex-row items-center justify-between p-8 md:p-10 hover:bg-black hover:text-white transition-all duration-500 group/cv"
            >
              <div className="flex items-center gap-6 mb-6 md:mb-0">
                <div className="p-4 border border-zinc-200 group-hover/cv:border-zinc-800 transition-colors">
                  <FiDownload size={24} />
                </div>
                <div>
                  <h4 className="text-2xl md:text-3xl font-bold tracking-tighter uppercase">
                    Download Curriculum Vitae
                  </h4>
                  <p className="text-zinc-400 text-xs font-mono tracking-widest mt-1">
                    LATEST_RELEASE_2026.PDF
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-[10px] font-mono tracking-[0.4em] opacity-50 uppercase">
                  GET RESUME FILE
                </span>
                <div className="w-12 h-px bg-zinc-300 group-hover/cv:bg-zinc-800 transition-colors" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
