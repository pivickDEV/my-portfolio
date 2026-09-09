import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import About from "./pages/About";
import GetInTouch from "./pages/Getintouch";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import AHchecker from "./pages/projects/AHchecker";
import StockForge from "./pages/projects/StockForge";
import Univentry from "./pages/projects/Univentry";

const AppLayout = () => {
  const location = useLocation();
  const isProjectPage = location.pathname.startsWith("/projects/");

  return (
    <div className="flex min-h-screen ">
      {!isProjectPage && <Sidebar />}
      <div
        className={`flex-1 transition-all duration-300 ${!isProjectPage ? "md:ml-64 pt-16 md:pt-0" : ""}`}
      >
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <section id="home-section">
                  <Home />
                </section>

                <div className="max-w-6xl mx-auto px-6 sm:px-10">
                  <section
                    id="about-section"
                    className="py-20 border-t border-zinc-50"
                  >
                    <About />
                  </section>

                  <section
                    id="skills-section"
                    className="py-20 border-t border-zinc-50"
                  >
                    <Skills />
                  </section>

                  <section
                    id="projects-section"
                    className="py-20 border-t border-zinc-50"
                  >
                    <Projects />
                  </section>

                  <section
                    id="contact-section"
                    className="py-20 border-t border-zinc-50"
                  >
                    <GetInTouch />
                  </section>

                  <footer className="py-10 border-t border-zinc-100 text-center text-zinc-400 text-xs font-geist">
                    WEB PORTFOLIO BY PIVICK LORENZO — 2026
                  </footer>
                </div>
              </main>
            }
          />
          <Route path="/projects/Univentry" element={<Univentry />} />
          <Route path="/projects/AHchecker" element={<AHchecker />} />
          <Route path="/projects/StockForge" element={<StockForge />} />
        </Routes>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
};

export default App;
