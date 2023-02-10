const Footer = (props) => {
    return (
        <section className="footer">

        <div className="box-container">
     
           <div className="box">
     
              <h3>interno </h3>
              
              <a href="vuelos"> <i className="fas fa-angle-right"></i> Vuelos</a>
              <a href="paquetes"> <i className="fas fa-angle-right"></i> Paquetes</a>
              <a href="activades"> <i className="fas fa-angle-right"></i> Actividades</a>
              <a href="asistencia"> <i className="fas fa-angle-right"></i> Asistencia</a>
           </div>
     
           
     
           <div className="box">
              <h3>contactos</h3>
              <a href="/#"> <i className="fas fa-phone"></i> 112434365775 </a>
              <a href="/#"> <i className="fas fa-phone"></i> 44898498965 </a>
              <a href="/#"> <i className="fas fa-envelope"></i> Otárola@gmail.com </a>
              <a href="/#"> <i className="fas fa-map"></i> Corrientes 0001 </a>
           </div>
     
           <div className="box">
              <h3>síguenos en </h3>
              <a href="https://www.facebook.com/"> <i className="fab fa-facebook-f"></i> facebook </a>
              <a href="https://twitter.com/"> <i className="fab fa-twitter"></i> twitter </a>
              <a href="https://www.instagram.com"> <i className="fab fa-instagram"></i> instagram </a>
              <a href="https://ar.linkedin.com"> <i clasNames="fab fa-linkedin"></i> linkedin </a>
           </div>
     
        </div>
     <div class="credit"> diseñado por <span> Agustin Otárola -©2023</span> | ¡reservados todos los derechos! </div>
     
     </section>
    )
}
export default Footer;