// import logo from './logo.svg';
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Services from "./components/Services";

import './style/App.scss';
import './style/Header.scss';
import './style/Home.scss';
import './style/Footer.scss';
import './style/Contact.scss';
import './style/Services.scss';
import './style/mediaquery.scss';
import { BrowserRouter as Router , Routes , Route} from "react-router-dom";
 
function App() {
  return (
   <>
       <Router>
        <Header />
          <Routes >
          <Route path="/" element={<Home />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/services" element={<Services />}/>
          </Routes >
          <Footer />
        </Router>

   </>
  );
}

export default App;
