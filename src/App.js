import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import Form from './Components/Form'
import Projects from "./Components/Projects/Projects";
import { Route, Routes } from "react-router-dom";
import Principal from "./Principal";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Principal />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/project/:id" element={<Projects />} />
   <Route path="/form" element={<Form />} />
      </Routes>

      {/* <Navbar /> 
     <Home />
     <About />
     <Contact />
     <Footer />

     <Form /> */}
    </div>
  );
}

export default App;
