import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Hourse from "./components/Hourse";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

function App() {
  AOS.init({
    duration: 900,
    once: true
  });

  return (
    <main className="md:text-xl font-textFont text-base text-darkGray">
      <Header />
      <Intro />
      <Hourse />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
