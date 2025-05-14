import About from './components/About';
import Articles from './components/Articles';
import Experience from './components/Experience';
import Footer from './components/Footer';
import MouseGlow from './components/MouseGlow';
import Projects from './components/Projects';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
    <div className="relative bg-[#0d1938] min-h-screen text-white overflow-hidden">
      <MouseGlow />
      <div className="relative z-10 flex flex-col md:flex-row">
        <Sidebar />
        <main className="ml-0 md:ml-[45%] p-6 w-full max-w-4xl mx-auto">
          <About />
          <Experience />
          <Projects />
          <Articles />
          <Footer />
        </main>
      </div>
    </div>
  </>);
}

export default App;