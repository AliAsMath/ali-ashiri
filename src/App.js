import About from "./component/About";
import Experience from "./component/Experience";
import Header from "./component/Header";
import Nav from "./component/Nav";
import Portfolio from "./component/Portfolio";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Certificates from "./component/Certificate";

function App() {
  return (
    <div className="w-full font-serif bg-gradient-to-tr from-green-1 to-green-3 text-white">
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
