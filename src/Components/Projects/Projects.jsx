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
import { Link } from "react-router-dom";

function Projects() {
  const [projects, setProjects] = useState([]);
const id = uid()

  const fetchUser = () => {
    console.log("Fetching all Users");

    var withdrawRef = query(ref(db, `/projects/`), orderByKey());
    onValue(withdrawRef, (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        setProjects([]);
        Object.values(data).map((project) => {
          setProjects((oldArray) => [...oldArray, project]);
        });
      }
    });
  };
  useEffect(() => {
    fetchUser();
  }, []);
  console.log("*********proyectos*******************",projects);
  return (
    <div>
      <section class="intro-single">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-lg-8">
              <div class="title-single-box">
                <h1 class="title-single">PROYECTOS</h1>
                <span class="color-text-a">
                  Cada proyecto se piensa como un desafío, en el cual se tiene
                  en cuenta como eje principal las necesidades y deseos de cada
                  cliente y su familia. De esta manera, se brinda en cada
                  detalle la solución innovadora y creativa, sin descuidar el
                  punto de vista humano.
                  <br />
                  <br />
                  Cada proyecto arquitectónico parte de la idea de que varias
                  personasvan a habitar esa vivienda, cada una con sus
                  características y necesidades particulares. De esta forma, se
                  intenta realizar un planteo que no sólo tenga en cuenta
                  aquello solicitado expresamente, sino también los deseos y
                  anhelos inconscientes, y que van a conformar en conjunto la
                  base para proyectar una vivienda que sea disfrutada en
                  plenitud.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="property-grid grid">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="grid-option"></div>
            </div>
                {projects.map((project, index)=>(
                    <div class="col-md-4" key={index}>
              <div class="card-box-a card-shadow">
                <div class="img-box-a">
                  <img src={project.image} alt="" class="img-a img-fluid" />
                </div>
                <div class="card-overlay">
                  <div class="card-overlay-a-content">
                    <div class="card-header-a">
                      <h2 class="card-title-a">
                        <a href="#">{project.title}</a>
                        
                      </h2>
                    </div>
                    <div class="card-body-a">
                      <Link to={`/project/${project.id}`} class="link-a">
                        ver
                        <span class="ion-ios-arrow-forward"></span>
                      </Link>
                    </div>
                    <div class="card-footer-a">
                      <ul class="card-info d-flex justify-content-around">
                        <li>
                          <h4 class="card-info-title">Area</h4>
                          <span>
                            {project.area}2
                            <sup>2</sup>
                          </span>
                        </li>
                        <li>
                          <h4 class="card-info-title">Año</h4>
                          <span>{project.year}</span>
                        </li>
                        <li>
                          <h4 class="card-info-title">Ubicación</h4>
                          <span>{project.place}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                ))}




            {/* <div class="col-md-4">
              <div class="card-box-a card-shadow">
                <div class="img-box-a">
                  <img src="img/101.jpg" alt="" class="img-a img-fluid" />
                </div>
                <div class="card-overlay">
                  <div class="card-overlay-a-content">
                    <div class="card-header-a">
                      <h2 class="card-title-a">
                        <a href="#">Arelauquen Lodge</a>
                      </h2>
                    </div>
                    <div class="card-body-a">
                      <a href="property-single.html" class="link-a">
                        ver
                        <span class="ion-ios-arrow-forward"></span>
                      </a>
                    </div>
                    <div class="card-footer-a">
                      <ul class="card-info d-flex justify-content-around">
                        <li>
                          <h4 class="card-info-title">Area</h4>
                          <span>
                            1400m
                            <sup>2</sup>
                          </span>
                        </li>
                        <li>
                          <h4 class="card-info-title">Año</h4>
                          <span>2001</span>
                        </li>
                        <li>
                          <h4 class="card-info-title">Ubicación</h4>
                          <span>Arelauquen</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
