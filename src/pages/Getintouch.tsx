import { useState } from "react";
import {
  FiCheck,
  FiCopy,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

const GetInTouch = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("pivicklorenzo9@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen py-24 bg-white text-black font-geist">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-20">
          <p className="animate-in text-[10px] uppercase tracking-[0.5em] text-zinc-400 mb-4">
            04 — Connectivity
          </p>
          <h2 className="animate-in delay-100 text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-6">
            REACH <span className="text-zinc-300">OUT.</span>
          </h2>
          <div className="animate-in delay-200 h-px w-full bg-zinc-100" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-zinc-100 border border-zinc-100">
          <div className="animate-in delay-200 md:col-span-7 bg-white p-10 md:p-14 flex flex-col justify-between group">
            <div>
              <h3 className="text-3xl font-bold tracking-tight mb-6">
                Let's build something <br /> exceptional.
              </h3>
              <p className="text-zinc-500 font-sans leading-relaxed mb-12 max-w-md">
                I am currently seeking opportunities where I can apply my
                expertise in{" "}
                <span className="text-black font-medium">
                  Full-Stack Development
                </span>{" "}
                and{" "}
                <span className="text-black font-medium">
                  Automated Systems
                </span>
                .
              </p>
            </div>

            <button
              type="button"
              onClick={copyToClipboard}
              className="flex items-center gap-6 p-6 border border-zinc-100 bg-zinc-50/50 hover:border-black transition-all duration-500 text-left group/btn"
            >
              <div className="p-4 bg-white border border-zinc-100 group-hover/btn:bg-black group-hover/btn:text-white transition-colors">
                {copied ? <FiCheck size={20} /> : <FiMail size={20} />}
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold mb-1">
                  {copied ? "Address Copied" : "Primary Contact"}
                </p>
                <p className="text-lg md:text-xl font-bold break-all">
                  pivicklorenzo9@gmail.com
                </p>
              </div>
              <FiCopy className="ml-auto text-zinc-200 group-hover/btn:text-black" />
            </button>
          </div>

          <div className="animate-in delay-300 md:col-span-5 bg-white p-10 flex flex-col gap-12">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-zinc-50 border border-zinc-100">
                <FiMapPin className="text-zinc-400" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">
                  Based In
                </p>
                <p className="text-lg font-bold">
                  Pasig City, Metro Manila, PH
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-12 border-t border-zinc-50">
              <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">
                Digital Presence
              </p>
              <div className="flex gap-3">
                <a
                  href="https://linkedin.com/in/pivick-lorenzo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center py-4 border border-zinc-100 hover:border-black transition-colors"
                >
                  <FiLinkedin size={20} />
                </a>
                <a
                  href="https://github.com/pivickDEV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center py-4 border border-zinc-100 hover:border-black transition-colors"
                >
                  <FiGithub size={20} />
                </a>
              </div>
            </div>

            <div className="mt-auto p-4 bg-zinc-50 border border-zinc-100 flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <p className="text-[10px] font-bold uppercase tracking-widest">
                Available for Hire
              </p>
            </div>
          </div>

          <div className="animate-in delay-400 md:col-span-12 bg-white border-t border-zinc-100">
            <a
              href="/CV-Pivick.pdf"
              download
              className="flex flex-col md:flex-row items-center justify-between p-10 hover:bg-black hover:text-white transition-all duration-700 group/cv"
            >
              <div className="flex items-center gap-8 mb-6 md:mb-0">
                <div className="p-5 border border-zinc-100 group-hover/cv:border-zinc-800 transition-colors">
                  <FiDownload size={28} />
                </div>
                <div>
                  <h4 className="text-3xl font-bold tracking-tighter uppercase">
                    Download CV
                  </h4>
                  <p className="text-zinc-400 text-xs font-sans tracking-widest">
                    LATEST_VERSION_2026.PDF
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-mono tracking-[0.5em] opacity-40 uppercase">
                  Request full portfolio
                </span>
                <div className="w-12 h-px bg-zinc-200 group-hover/cv:bg-zinc-800" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
