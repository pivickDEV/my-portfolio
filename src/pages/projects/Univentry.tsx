import React from "react";
import {
  FiAlertCircle,
  FiArrowLeft,
  FiCheckCircle,
  FiClock,
  FiCpu,
  FiDatabase,
  FiDownload,
  FiEye,
  FiGlobe,
  FiPlay,
  FiServer,
  FiShield,
  FiTerminal,
  FiUsers,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

interface MediaItem {
  title: string;
  url: string;
  shortDescription: string;
  technicalExplanation: string;
}

interface TechnicalMediaProps {
  item: MediaItem;
  index: number;
}

const TechnicalMedia: React.FC<TechnicalMediaProps> = ({ item, index }) => {
  return (
    <div className="group grid grid-cols-1 lg:grid-cols-12 gap-12 items-start py-16 border-b border-zinc-100 last:border-0">
      <div className="lg:col-span-7">
        <div className="relative bg-zinc-100 border border-zinc-200 overflow-hidden shadow-sm transition-all duration-700">
          <div className="relative aspect-video bg-zinc-900 flex items-center justify-center">
            <video
              controls
              className="w-full h-full grayscale hover:grayscale-0 transition-all"
            >
              <source src={item.url} type="video/mp4" />
              Your browser does not support video playability.
            </video>
          </div>
        </div>
        <p className="mt-4 text-[10px] font-mono text-zinc-300 uppercase tracking-widest">
          Video_System_Log // 0{index + 1}
        </p>
      </div>

      <div className="lg:col-span-5 space-y-6">
        <div>
          <h4 className="text-2xl font-bold uppercase tracking-tighter mb-4 underline decoration-zinc-200 underline-offset-8 flex items-center gap-2">
            <FiPlay className="text-sm" /> {item.title}
          </h4>
          <p className="text-zinc-500 font-sans leading-relaxed text-base italic">
            {item.shortDescription}
          </p>
        </div>
        <div className="p-6 bg-zinc-50 border border-zinc-100 rounded-sm">
          <h5 className="text-[10px] font-bold uppercase tracking-widest text-black mb-3 flex items-center gap-2">
            <FiTerminal /> Execution_Process
          </h5>
          <p className="text-sm text-zinc-600 font-sans leading-relaxed">
            {item.technicalExplanation}
          </p>
        </div>
      </div>
    </div>
  );
};

const Univentry: React.FC = () => {
  const navigate = useNavigate();

  const handleDownloadReadme = () => {
    const link = document.createElement("a");
    link.href = "/README.md";
    link.download = "README.md";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const skillCategories = [
    {
      title: "Frontend Engine",
      icon: <FiTerminal />,
      items: [
        "React 19 + TypeScript",
        "Vite + Tailwind CSS v4",
        "React Router (RBAC)",
        "Framer Motion",
      ],
      tag: "UI/UX",
    },
    {
      title: "Edge Vision & AI",
      icon: <FiCpu />,
      items: [
        "face-api.js (Client Vectorization)",
        "Tesseract.js (Document OCR)",
        "react-webcam",
      ],
      tag: "Privacy",
    },
    {
      title: "IoT & Streaming",
      icon: <FiGlobe />,
      items: [
        "RTSP Protocol",
        "node-rtsp-stream",
        "JSMpeg (MPEG-TS Decoding)",
        "FFmpeg Transcoder",
      ],
      tag: "Hardware",
    },
    {
      title: "Backend Core",
      icon: <FiServer />,
      items: [
        "Express 5 + TypeScript",
        "MongoDB + Mongoose",
        "JWT / bcrypt Auth",
        "node-cron (Overstay Job)",
      ],
      tag: "Core",
    },
  ];

  const videoGallery: MediaItem[] = [
    {
      title: "1. Online Visitor Pre-Registration & OCR",
      url: "/videos/pre-registration-demo.mp4",
      shortDescription:
        "Digital enrollment eliminating gate queues and manual logging prior to arrival.",
      technicalExplanation:
        "Visitors submit personal information, upload valid IDs, and complete a live webcam scan. Client-side Tesseract.js validates ID keywords while face-api.js extracts a 128-float face descriptor vector. Raw facial images are never saved server-side.",
    },
    {
      title: "2. Encrypted QR Pass Delivery & Gate Scanning",
      url: "/videos/qr-gate-scanner.mp4",
      shortDescription:
        "Stateless entry pass generation and real-time gate authentication.",
      technicalExplanation:
        "Upon booking approval, server-side code generates a QR pass emailed via Brevo transactional API. Security guards scan the pass using @yudiel/react-qr-scanner, triggering a JWT-authenticated database check that logs entry and displays visitor metrics.",
    },
    {
      title: "3. Live IoT CCTV Stream & Face Assist",
      url: "/videos/cctv-monitoring-demo.mp4",
      shortDescription:
        "Automated presence monitoring using local RTSP-relayed camera feeds.",
      technicalExplanation:
        "On-premises camera feeds are transcoded via FFmpeg into WebSocket streams, decoded in-browser with JSMpeg. The surveillance engine continuously matches live frames against stored face vectors to update active logs and flag loitering.",
    },
    {
      title: "4. Automated Overstay Nudge Pipeline",
      url: "/videos/overstay-nudge-demo.mp4",
      shortDescription:
        "Automated behavioral SMS reminders for checked-out office visitors.",
      technicalExplanation:
        "A node-cron background task checks active database logs for visitors whose department visits have completed but lack an exit log. Surpassing the designated time limit triggers an automated SMS via the iProg SMS gateway.",
    },
  ];

  const systemFlow = [
    {
      step: "01",
      title: "Pre-Registration & Vectorization",
      desc: "Visitor fills booking form, uploads ID (validated via Tesseract.js OCR), and scans face (face-api.js converts face to 128-float descriptor vector).",
      icon: <FiTerminal />,
    },
    {
      step: "02",
      title: "Pass Delivery & Approval",
      desc: "Admin or automated rules approve booking. System generates an encrypted QR pass and sends it via Brevo email API.",
      icon: <FiCheckCircle />,
    },
    {
      step: "03",
      title: "Gate Verification (Time-In)",
      desc: "Security guard scans QR pass with gate scanner. System verifies JWT payload, marks visitor 'On Campus', and displays destination details.",
      icon: <FiShield />,
    },
    {
      step: "04",
      title: "IoT CCTV Presence Assist",
      desc: "IP Camera streams RTSP feed through FFmpeg/WebSockets to JSMpeg Canvas. Frame matcher compares live faces against stored 128-float vectors.",
      icon: <FiEye />,
    },
    {
      step: "05",
      title: "Office Transaction & Overstay Nudge",
      desc: "Department logs visit completion. If visitor overstays past threshold, node-cron background task triggers an automated SMS via iProg Gateway.",
      icon: <FiClock />,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-geist selection:bg-black selection:text-white">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100 px-6 py-4 flex justify-between items-center">
        <button
          onClick={() => navigate("/")}
          className="group flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] hover:text-zinc-400 transition-colors cursor-pointer"
        >
          <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          System_Return
        </button>
        <div className="flex gap-4">
          <button
            onClick={handleDownloadReadme}
            className="group flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest border border-black px-4 py-1.5 hover:bg-black hover:text-white transition-all cursor-pointer"
          >
            <FiDownload className="group-hover:translate-y-0.5 transition-transform" />
            Download README.md
          </button>
        </div>
      </nav>

      <header className="max-w-6xl mx-auto px-6 pt-20 pb-16 border-b border-zinc-100">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.8] uppercase">
              UNI<span className="text-zinc-300">VENTRY.</span>
            </h1>
            <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.4em]">
              RTU Capstone Project // BSIT 2026
            </p>
          </div>
        </div>
        <p className="text-2xl md:text-3xl text-zinc-600 font-sans leading-tight max-w-4xl tracking-tight">
          IoT-Based Visitor Management and Monitoring System replacing manual
          logbooks with a digital, QR-code-based, and camera-assisted platform.
        </p>
      </header>

      {/* Problem & Solution Statement */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-b border-zinc-100">
        <h3 className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-400 mb-12">
          01 — Context_&_Problem_Statement
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4 p-8 bg-zinc-50 border border-zinc-100">
            <div className="flex items-center gap-2 text-red-600">
              <FiAlertCircle />
              <h4 className="text-sm font-bold uppercase tracking-wider">
                The Problem
              </h4>
            </div>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Traditional paper logbooks at institutional entry gates create
              severe choke points during peak hours. They allow unverified
              entries, fake identity submissions, and leave a critical{" "}
              <strong>"monitoring gap"</strong> once visitors walk past the
              security guard—offering zero visibility on whether guests actually
              visit their declared destination or linger on campus.
            </p>
          </div>
          <div className="space-y-4 p-8 bg-zinc-50 border border-zinc-100">
            <div className="flex items-center gap-2 text-black">
              <FiCheckCircle />
              <h4 className="text-sm font-bold uppercase tracking-wider">
                The Solution
              </h4>
            </div>
            <p className="text-sm text-zinc-600 leading-relaxed">
              <strong>UniVentry</strong> unifies pre-registration, browser-based
              biometric enrollment, encrypted QR pass authentication, local RTSP
              CCTV relaying with face-matching support, and background overstay
              monitoring into a cohesive system evaluated at a 4.13 ("Strongly
              Agree") ISO/IEC 25010 rating.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack Grid */}
      <section className="bg-zinc-50 py-20 border-b border-zinc-100">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-400 mb-12">
            02 — Architectural_Tech_Stack
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-200 border border-zinc-200">
            {skillCategories.map((cat, idx) => (
              <div
                key={idx}
                className="bg-white p-8 group hover:bg-zinc-50 transition-colors"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-2 border border-zinc-100 text-zinc-400 group-hover:border-black transition-colors">
                    {cat.icon}
                  </div>
                  <span className="text-[8px] font-mono text-zinc-400 bg-zinc-50 px-1.5 py-0.5 uppercase">
                    [{cat.tag}]
                  </span>
                </div>
                <h4 className="text-sm font-bold uppercase mb-4 tracking-tighter">
                  {cat.title}
                </h4>
                <ul className="space-y-2">
                  {cat.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-[11px] font-sans text-zinc-500 flex items-center gap-2"
                    >
                      <div className="w-1 h-1 bg-zinc-200 group-hover:bg-black transition-colors" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accurate Execution Flow */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-b border-zinc-100">
        <h3 className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-400 mb-12">
          03 — End_To_End_Visitor_Lifecycle
        </h3>
        <div className="space-y-4">
          {systemFlow.map((f, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row md:items-center justify-between p-6 border border-zinc-100 bg-white hover:border-black transition-colors gap-6"
            >
              <div className="flex items-center gap-6">
                <span className="text-xs font-mono text-zinc-400">
                  {f.step}
                </span>
                <div className="p-3 border border-zinc-100 text-black">
                  {f.icon}
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-tight">
                    {f.title}
                  </h4>
                  <p className="text-xs text-zinc-500 max-w-2xl mt-1">
                    {f.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Demonstrations */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h3 className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-400 mb-12">
          04 — System_Video_Demonstrations
        </h3>
        <div className="space-y-4">
          {videoGallery.map((video, idx) => (
            <TechnicalMedia key={idx} item={video} index={idx} />
          ))}
        </div>
      </section>

      {/* Stakeholders Section */}
      <section className="bg-zinc-50 py-20 border-y border-zinc-100 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-400 mb-16 text-center">
            05 — Institutional_Stakeholders
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                role: "Security Personnel",
                impact:
                  "An assistive tool for identity verification and situational awareness, reducing gate congestion and clerical logbook workload.",
              },
              {
                role: "Employees & Offices",
                impact:
                  "Advance visibility of scheduled daily visitors for department resource planning and instant transaction check-ins.",
              },
              {
                role: "Campus Visitors",
                impact:
                  "A fast, paperwork-free, pre-approved entry flow with secure digital QR passes delivered via email.",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="space-y-4 bg-white p-8 border border-zinc-100"
              >
                <FiUsers className="text-zinc-400" size={28} />
                <h4 className="text-base font-bold uppercase tracking-tighter">
                  {s.role}
                </h4>
                <p className="text-xs text-zinc-500 font-sans leading-relaxed">
                  {s.impact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Database & System Constraints */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="p-8 border border-zinc-100 bg-white">
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
              <FiDatabase /> Database_Architecture
            </h4>
            <p className="text-xs text-zinc-500 font-sans leading-relaxed mb-6">
              Powered by{" "}
              <span className="text-black font-semibold">
                MongoDB (Mongoose ODM)
              </span>{" "}
              storing centralized collections for bookings, user roles, offices,
              face descriptors, and audit trails.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Booking", "User", "Office", "Category", "CCTVLog"].map((t) => (
                <span
                  key={t}
                  className="text-[9px] font-mono border border-zinc-200 px-2.5 py-1 uppercase bg-zinc-50"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="p-8 border border-zinc-100 bg-zinc-50/50">
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
              <FiShield /> System_Constraints
            </h4>
            <ul className="space-y-3">
              {[
                "Client-side AI vectorization ensures biometric privacy by storing 128-float vectors rather than raw images.",
                "RTSP stream relaying requires local/on-premises FFmpeg network setup.",
                "Designed as an assistive situational tool; physical access control remains under human security officer authority.",
              ].map((c, i) => (
                <li
                  key={i}
                  className="text-xs font-sans text-zinc-500 flex gap-3"
                >
                  <div className="w-1.5 h-1.5 bg-black rounded-full mt-1 shrink-0" />{" "}
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-100 py-12 px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-1">
            Project_Reference_Code
          </p>
          <p className="text-xs font-bold uppercase">Univentry__MERN_IoT</p>
        </div>
        <div className="text-center md:text-right"></div>
      </footer>
    </div>
  );
};

export default Univentry;
