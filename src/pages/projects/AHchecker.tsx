import { FiArrowLeft, FiDownload } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const AHchecker = () => {
  const navigate = useNavigate();

  const handleDownloadReadme = () => {
    const link = document.createElement("a");
    link.href = "/";
    link.download = "README.md";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      {" "}
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
    </div>
  );
};

export default AHchecker;
