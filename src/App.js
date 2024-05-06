import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div >
     <Navbar /> 
     <Home />
     <About />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
