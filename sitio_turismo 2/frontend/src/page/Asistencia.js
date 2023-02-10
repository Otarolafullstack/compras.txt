
import '../../src/styles/componentes/page/Home.css'
const Asistencia = (props) => {
   return (
      <section class="booking">

         <h1 class="heading-title">¡RESERVA TU VIAJE!</h1>


         <form className="book-form" action="https://formsubmit.co/agustinalejandrootarola@gmail.com" method="POST">

            <div class="flex">
               <div class="inputBox">
                  <span>Nombre :</span>
                  <input type="text" placeholder="Ingresa tu nombre" name="nombre" />
               </div>
               <div class="inputBox">
                  <span>email :</span>
                  <input type="email" placeholder="Ingresa tu email" name="email" />
               </div>
               <div class="inputBox">
                  <span>Celular :</span>
                  <input type="celular" placeholder="Ingresa tu celular" name="celular" />
               </div>
               <div class="inputBox">
                  <span>tu dirección :</span>
                  <input type="text" placeholder="Ingresa tu dirección" name="direccion" />
               </div>
               <div class="inputBox">
                  <span>Destino :</span>
                  <input type="text" placeholder="Lugar que quieres visitar" name="destino" />
               </div>
               <div class="inputBox">
                  <span>pasajeros :</span>
                  <input type="number" placeholder="Cantidad de pasajeros" name="pasajeros" />
               </div>
               <div class="inputBox">
                  <span>Salida :</span>
                  <input type="date" name="salida" />
               </div>
               <div class="inputBox">
                  <span>Llegada :</span>
                  <input type="date" name="llegada" />
               </div>
            </div>

            <input type="submit" value="Enviar" class="btn" />

            <input type="hidden" name="_next" value="http://localhost:3001" />
            <input type="hidden" name="_captcha" value="false" />

         </form>

      </section>

   )
}
export default Asistencia;


