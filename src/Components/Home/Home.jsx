import React from "react";
import imgss from "../../img/bg1.jpg";
import "../lib/font-awesome/css/font-awesome.min.css";
import "../lib/animate/animate.min.css";
import "../lib/ionicons/css/ionicons.min.css";
import "../lib/owlcarousel/assets/owl.carousel.min.css";
import "../lib/bootstrap/css/bootstrap.min.css";
import "../css/style.css";

function Home() {
  return (
    <div className="homeSpace" id="Home">
<div class="contenedor">
  <img src={imgss} />
  
  <div class="texto-encima">ARQUITECTOS</div>
  <div class="centrado"><span class="color-b">Arq.  </span>Martín Bajda</div>
  <div class="texto-abajo">ESTUDIO DE ARQUITECTURA</div>
</div>

     

      <div class="div-button">
        <a class="nav-link" href="#">
          <button class="btn-place"> PROYECTOS </button>
        </a>
      </div>
      <a
        href="https://api.whatsapp.com/send?phone=56&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202."
        class="float"
        target="_blank"
      >
        <i class="fa fa-whatsapp my-float"></i>
      </a>
    </div>
  );
}

export default Home;
