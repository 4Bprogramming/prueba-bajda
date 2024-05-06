import React from "react";
import "../lib/font-awesome/css/font-awesome.min.css";
import "../lib/animate/animate.min.css";
import "../lib/ionicons/css/ionicons.min.css";
import "../lib/owlcarousel/assets/owl.carousel.min.css";
import "../lib/bootstrap/css/bootstrap.min.css";
import "../css/style.css";
import image from "../../img/mbya.png";

function Navbar() {
  return (
    <nav class="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
      <div class="container">
        <button
          class="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarDefault"
          aria-controls="navbarDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <img
          class="navbar-brand text-brand"
          src={image}
          alt="logo"
          width="60px"
        />
        <button
          type="button"
          class="btn btn-link nav-search navbar-toggle-box-collapse d-md-none"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-expanded="false"
        >
          <span class="fa fa-search" aria-hidden="true"></span>
        </button>
        <div
          class="navbar-collapse collapse justify-content-center"
          id="navbarDefault"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" href="#Home">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#NOSOTROS">
                Nosotros
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#CONTACTO">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
