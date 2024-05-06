import React from 'react'
import "../lib/font-awesome/css/font-awesome.min.css";
import "../lib/animate/animate.min.css";
import "../lib/ionicons/css/ionicons.min.css";
import "../lib/owlcarousel/assets/owl.carousel.min.css";
import "../lib/bootstrap/css/bootstrap.min.css";
import "../css/style.css";

function Contact() {
  return (
   <>
   <div class="bg-contact">
  <section class="contact">
    <div class="container">
      <div class="row">
         </div>
         <br/>
        <div class="div-title">
<h1 id="CONTACTO">CONTACTO</h1>
</div>
        <div class="col-sm-12 section-t8">
          <div class="row">
            <div class="col-md-7">
              <form class="form-a contactForm" action="" method="post" role="form">
                <div id="sendmessage">Your message has been sent. Thank you!</div>
                <div id="errormessage"></div>
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <div class="form-group">
                      <input type="text" name="name" class="form-control form-control-lg form-control-a" placeholder="Nombre" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
                      <div class="validation"></div>
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <div class="form-group">
                      <input name="email" type="email" class="form-control form-control-lg form-control-a" placeholder="Apellido" data-rule="email" data-msg="Please enter a valid email"/>
                      <div class="validation"></div>
                    </div>
                  </div>
                  <div class="col-md-12 mb-3">
                    <div class="form-group">
                      <input type="url" name="subject" class="form-control form-control-lg form-control-a" placeholder="Correo" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                      <div class="validation"></div>
                    </div>
                  </div>
                  <div class="col-md-12 mb-3">
                    <div class="form-group">
                      <textarea name="message" class="form-control" cols="45" rows="8" data-rule="required" data-msg="Please write something for us" placeholder="Mensaje..."/>
                      <div class="validation"></div>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <button type="submit" class="btn btn-a">Enviar mensaje</button>
                  </div>
                </div>
              </form>
            </div>
            <div class="col-md-5 section-md-t3">
              <div class="icon-box section-b2">
                <div class="icon-box-icon">
                  <span class="ion-ios-paper-plane"></span>
                </div>
                <div class="icon-box-content table-cell">
                  <div class="icon-box-title">
                    <h4 class="icon-title">Contáctanos</h4>
                  </div>
                  <div class="icon-box-content">
                    <p class="mb-1">Correo.
                      <span class="color-a">info@estudiomartinbajda.com.ar</span>
                    </p>
                    <p class="mb-1">Teléfono.
                      <span class="color-a">0294-4521122</span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="icon-box section-b2">
                <div class="icon-box-icon">
                  <span class="ion-ios-pin"></span>
                </div>
                <div class="icon-box-content table-cell">
                  <div class="icon-box-title">
                    <h4 class="icon-title">Encuéntranos</h4>
                  </div>
                  <div class="icon-box-content">
                    <p class="mb-1">
                      moreno 750. 3º "313"
                      <br /> Bariloche, Rio Negro, Argentina.
                    </p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      </section>
    </div>
    
   </>
  )
}

export default Contact