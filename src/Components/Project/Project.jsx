import React, { useEffect, useState } from "react";
import "../lib/font-awesome/css/font-awesome.min.css";
import "../lib/animate/animate.min.css";
import "../lib/ionicons/css/ionicons.min.css";
import "../lib/owlcarousel/assets/owl.carousel.min.css";
import "../lib/bootstrap/css/bootstrap.min.css";
import "../css/style.css";

import { db } from "../../firebase/credential";
import {
  ref,
  set,
  query,
  onValue,
  orderByKey,
  remove,
} from "firebase/database";
import { uid } from "uid";
import { Link, useParams } from "react-router-dom";

function Project() {
  console.log("entreeeeeeeee");
  const [projects, setProjects] = useState([]);
  const  id = uid();
  const fetchProjectId = () => {
    console.log("One Project");

    var withdrawRef = query(ref(db, `/projects/`), id);
    onValue(withdrawRef, (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        setProjects([]);
        Object.values(data).map((project) => {
          setProjects((oldArray) => [project.id]);
        });
      }
    });
  };
  const projectId = (project) => {
    remove(ref(db, `/projects/${project.id}`));
}

  useEffect(() => {
    fetchProjectId();
  }, []);

  console.log(fetchProjectId, "proyectos");
  return (
  <div>
    {/* TITULO */}
    <section class="intro-single">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-lg-8">
          <div class="title-single-box">
            <h1 class="title-single">Arelauquen Lodge</h1>
            <span class="color-text-a">Reserva Natural Arelauquen Golf & Spa Country Club</span>
          </div>
        </div>
        
      </div>
    </div>
  </section>

{/* CAROUSEL */}






    </div>);
}

export default Project;
