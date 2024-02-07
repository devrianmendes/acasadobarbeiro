import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Hourse from "./components/Hourse";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="font-textFont text-base text-darkGray">
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
