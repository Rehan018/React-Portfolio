import "./App.css";
import Header from "./component/header/header";
import Footer from "./component/footer/Footer";
import Home from "./component/home/Home";
import About from "./component/About/About";
import Skills from "./component/Skills/Skills";
import Services from "./component/Services/Services";
import Qualification from "./component/qualification/Qualification";
import Contact from "./component/contact/Contact";
import Portfolio from "./component/Projects/Portfolio";
import Feedback from "./component/Feedback/Feedback";
// import Qualification from "./component/Qualification/Qualification";

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Portfolio />
        <Feedback />
        <Contact/>
      </main>
      <Footer />
    </>
  );
};

export default App;
