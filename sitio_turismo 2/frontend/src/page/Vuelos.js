import '../../src/styles/componentes/page/Home.css'
const Vuelos = (props) => {
    return (

        <main className="holder">

            <div className="vuelos">

                <div className="brasil">
                    <img src="img/vuelos/brasil.jpg" alt="brasil" />
                    <h5>brasil</h5>
                    <h6>florianopolis</h6>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos accusantium placeat quis
                        nobis illum recusandae ipsam facilis nihil ullam, aperiam reprehenderit, aliquam similique amet
                        tempore, repudiandae in porro eligendi molestias.
                    </p>
                </div>
                <div class="brasil">
                    <img src="img/vuelos/holanda.jpg" alt="holanda" />
                    <h5>Holanda</h5>
                    <h6>florianopolis</h6>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi quia ipsum sint tempora facilis
                        deleniti velit, eligendi aperiam laudantium saepe quas autem, labore sunt? Ut, dolore. Tempore
                        aliquid quos consectetur?labore sunt? Ut, dolore.
                    </p>
                </div>
                <div class="brasil">
                    <img src="img/vuelos/suiza.jpg" alt="suiza" />
                    <h5>Suiza</h5>
                    <h6>florianopolis</h6>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quasi consequuntur eum placeat
                        esse mollitia magnam quo, suscipit blanditiis sed praesentium voluptatum ipsa maiores? Hic nihil
                        odit fugiat deleniti ratione.labore sunt? gggggg
                    </p>
                </div>
                <div class="brasil">
                    <img src="img/vuelos/rumania.jpg" alt="rumania" />
                    <h5>Rumania</h5>
                    <h6>florianopolis</h6>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo maxime blanditiis illum expedita,
                        ipsam cum reiciendis placeat inventore maiores natus quo molestiae neque. Id exercitationem nemo
                        quod tenetur modi? Voluptatibus?gggggggggggggggg
                    </p>
                </div>
                <div class="brasil">
                    <img src="img/vuelos/madrid.jpg" alt="madrid" />
                    <h5>España</h5>
                    <h6>Madrid</h6>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. At repellendus magnam labore
                        temporibus? Obcaecati dolorum ipsam ducimus quaerat similique, sapiente delectus ut harum rerum
                        nemo facere perferendis doloribus officiis aliquid!
                    </p>
                </div>
            </div>

           <div id="wrapper">

             <h2>Si tenes alguna duda contactanos!</h2>
               <form className="contacto" action="https://formsubmit.co/agustinalejandrootarola@gmail.com" method="POST">
                <label for="nombre">Nombre</label>
                <input type="text" name="name"/>

                <label for="email">correo electronico</label>
                <input type="email" name="email"/>

                <label for="subject">Asunto</label>
                <input type="text" name="subject"/>

                <label for="comments">comentario</label>
                <textarea name="comments" cols="15" rows="5"></textarea>
                <input type="submit" value="Enviar"/>
                <input type="hidden" name="_next" value="http://localhost:3001"/>
                <input type="hidden" name="_captcha" value="false"/>

             </form>
                
           </div>

        </main>
    )
}
export default Vuelos;