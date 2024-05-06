import React from "react";
import "../lib/font-awesome/css/font-awesome.min.css";
import "../lib/animate/animate.min.css";
import "../lib/ionicons/css/ionicons.min.css";
import "../lib/owlcarousel/assets/owl.carousel.min.css";
import "../lib/bootstrap/css/bootstrap.min.css";
import "../css/style.css";
import img106 from "../../img/106.jpg";

function About() {
  return (
    <>
      <div class="div-title">
        <h1 id="NOSOTROS">NOSOTROS</h1>
      </div>
      <div class="col-md-12 section-t8">
        <div class="row">
          <div class="col-md-6 col-lg-5">
            <img src={img106} alt="" class="img-fluid" />
          </div>

          <div class="col-md-6 col-lg-5 section-md-t3">
            <div class="title-box-d">
              <h3 class="title-d">
                NUESTRO
                <span class="color-d">ESTUDIO</span>{" "}
              </h3>
            </div>
            <p class="color-text-a">
              Partiendo de la premisa de que la presencia humana da significado
              a la arquitectura, acompañamos a nuestros clientes en cada etapa
              del proyecto, dando respuestas a cada una de las necesidades
              planteadas.
            </p>
            <p class="color-text-a">
              A través del contacto constante con nuestros clientes, intentamos
              encontrar los sentimientos, sensaciones y anhelosque definen y
              completan las expectativas puestas en cada idea personal.
            </p>
            <h6 class="title-d">TRAYECTORIA</h6>
            <p class="color-text-a">
              A partir del año 1998 y desde la ciudad de Bariloche, en Rio
              Negro, Argentina, Martín Bajda y Asociados trabaja para hacer
              realidad los proyectos de sus clientes locales y extranjeros,
              acompañándolos y comprometiendo todo su conocimiento profesional y
              voluntad personal en cada nuevo planteo arquitectónico.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
