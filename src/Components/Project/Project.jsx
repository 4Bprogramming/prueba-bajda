import React, { useEffect, useState } from "react";
import "../lib/font-awesome/css/font-awesome.min.css";
import "../lib/animate/animate.min.css";
import "../lib/ionicons/css/ionicons.min.css";
import "../lib/owlcarousel/assets/owl.carousel.min.css";
import "../lib/bootstrap/css/bootstrap.min.css";
import "../css/style.css";
import './Project.css'
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
import fotito from "../../img/102.jpg";

function Project() {
  const [projects, setProjects] = useState([]);
  const idParams = useParams();

  const fetchUser = () => {
    console.log("Fetching all Users");

    var withdrawRef = query(ref(db, `/projects/`), orderByKey());
    onValue(withdrawRef, (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        setProjects([]);
        Object.values(data).map((project) => {
          // setProjects(data.id);
          setProjects((oldArray) => [...oldArray, project]);
        });
      }
    });
  };
  const oneProject = projects.filter((project) => project.id === idParams.id);

  useEffect(() => {
    fetchUser();
  }, []);
  console.log(oneProject, "aca el array de imagenes");

  return (
    <div>
      <section class="intro-single">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-lg-8">
              <div class="title-single-box">
                <h1 class="title-single">{oneProject[0]?.title}</h1>
                <span class="color-text-a"> {oneProject[0]?.place}</span>
              </div>
            </div>
            <div class="col-md-12 col-lg-4"></div>
          </div>
        </div>
      </section>

      <section class="property-single nav-arrow-b">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">

{/* 
aca comienza */}
<div className="carousel1">
<div id="slider1">
					  <figure>
            {oneProject[0]?.images?.map((e, index) => (
                <img src={e} alt="" key={index}  />
              ))} 
					  </figure>
				</div>
        </div>
{/* 
  aca termina          */}
    {/* {oneProject[0]?.images?.map((e, index) => (
                <img src={e} alt="" key={index} width="300px" />
              ))} */}

              <div class="row justify-content-between">
                <div class="col-md-5 col-lg-4">
                  <div class="property-summary">
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="title-box-d section-t4">
                          <h3 class="title-d">Detalles</h3>
                        </div>
                      </div>
                    </div>
                    <div class="summary-list">
                      <ul class="list">
                        <li class="d-flex justify-content-between">
                          <strong>Ubicación:</strong>
                          <span>{oneProject[0]?.place}</span>
                        </li>
                        <li class="d-flex justify-content-between">
                          <strong>Tipo:</strong>
                          <span>{oneProject[0]?.type}</span>
                        </li>
                        <li class="d-flex justify-content-between">
                          <strong>Area:</strong>
                          <span>
                            {oneProject[0]?.area}m<sup>2</sup>
                          </span>
                        </li>
                        <li class="d-flex justify-content-between">
                          <strong>Cuartos:</strong>
                          <span>{oneProject[0]?.rooms}</span>
                        </li>
                        <li class="d-flex justify-content-between">
                          <strong>Baños:</strong>
                          <span>{oneProject[0]?.bathrooms}</span>
                        </li>
                        <li class="d-flex justify-content-between">
                          <strong>Garage:</strong>
                          <span>{oneProject[0]?.garage}</span>
                        </li>
                        {/* <li class="d-flex justify-content-between">
                          <strong>Beds:</strong>
                          <span>4</span>
                        </li>
                        <li class="d-flex justify-content-between">
                          <strong>Baths:</strong>
                          <span>2</span>
                        </li>
                        <li class="d-flex justify-content-between">
                          <strong>Garage:</strong>
                          <span>1</span>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-md-7 col-lg-7 section-md-t3">
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="title-box-d">
                        <h3 class="title-d">Property Description</h3>
                      </div>
                    </div>
                  </div>
                  <div class="property-description">
                    <p class="description color-text-a">
                      {oneProject[0]?.description}.
                    </p>
                    <p class="description color-text-a no-margin"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Project;
