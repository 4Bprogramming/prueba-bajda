import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import Form from './Components/Form/Form'
import Projects from "./Components/Projects/Projects";
import Project from "./Components/Project/Project";
import { Route, Routes } from "react-router-dom";
import Principal from "./Principal";
import Project2 from "./Components/Project/Project2";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Principal />} />
        <Route exact path="/cambio" element={<Project2 />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/project/:id" element={<Project2 />} />
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
