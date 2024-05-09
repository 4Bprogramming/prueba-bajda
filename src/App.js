import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import Form from './Components/Form/Form'
import Projects from "./Components/Projects/Projects";
import Project from "./Components/Project/Project";
import { Route, Routes } from "react-router-dom";
import Principal from "./Principal";
import Project2 from "./Components/Project/Project2";
import Projects2 from "./Components/Projects/Projects2";
import Form2 from "./Components/Form/Form2";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Principal />} />
        <Route exact path="/cambio" element={<Project2 />} />
        <Route path="/project" element={<Projects2 />} />
        <Route path="/project/:id" element={<Project />} />
   <Route path="/form" element={<Form2 />} />
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
