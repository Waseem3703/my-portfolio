import Sidebar from './components/Sidebar';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Articles from './components/Articles';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="flex bg-[#0a192f] min-h-screen text-white">
      <Sidebar />
      <main className="ml-0 md:ml-[25%] p-6 w-full max-w-4xl mx-auto">
        <About />
        <Experience />
        <Projects/>
        <Articles />
        <Footer />
      </main>
    </div>
  );
};

export default App;
