import '../../src/styles/componentes/page/Home.css'
const Home = (props) => {
    return (
        <main className="holder">
            <div className="principal">
                <img src="img/vuelos/slider.jpg" alt="Vuelos" />
            </div>


            <div className="columnas">
                <section className="viaja, home-offer"  >
                    <img src="img/vuelos/estaslisto.jpg" alt="estaslisto" />
                    <h2>¿Estas listo?</h2>
                    <p>Consulta a dónde puedes viajar ahora y encuentra las mejores ofertas entre miles de opciones de
                        vuelos, hoteles y renta de autos</p>
                </section>
                <section className="viaja, home-offer">
                    <img src="img/vuelos/plan.jpg" alt="planea" />
                    <h2>Planea con seguridad</h2>
                    <p>Mantente un paso adelante con las últimas noticias sobre viajes, cancelaciones sin costo de hoteles y
                        autos, y seguros de viaje con cobertura por COVID-19.</p>
                </section>
                <section className="viaja, home-offer">
                    <img src="img/vuelos/viaja.jpg" alt="viaja" />
                    <h2>Viaja sin complicaciones</h2>
                    <p>Sin tarifas ni cargos ocultos y sin trucos. Con nosotros siempre sabrás exactamente a dónde va tu
                        dinero. Así que olvídate de las preocupaciones y relájate antes de que empiece tu viaje.</p>
                </section>

            </div>
            <section className="home-offer">
                <div className="content">
                    <h3>Descuento de 50% off</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure tempora assumenda, debitis aliquid nesciunt maiores quas! Magni cumque quaerat saepe!</p>
                    <a href="asistencia" className="btn">comprar</a>
                </div>
            </section>

            <section className="home-about">

                <div className="image">
                    <img src="img/vuelos/about-img.jpg" alt="" />
                </div>

                <div className="content">
                    <h3>Sobre nosotros</h3>
                    <p>La aerolínea más grande de Medio Oriente, Emirates también es una de las aerolíneas más lujosas del mundo, y a menudo se encuentra entre las 5 mejores de los premios a las mejores aerolíneas que se celebran cada año. Emirates es una empresa del estado saudí y opera más de 3600 vuelos cada semana desde su centro en el Aeropuerto Internacional de Dubái. Con una flota de 300 aviones, Emirates tiene operaciones en más de 80 países.</p>
                    <a href="paquetes" class="btn">ver paquetes</a>
                </div>

            </section>
            <section className="home-packages">

                <h1 className="heading-title"> otros paquetes </h1>

                <div className="box-container">

                    <div className="box">
                        <div class="image">
                            <img src="img/vuelos/img-1.jpg" alt="" />
                        </div>
                        <div className="content">
                            <h3>adventure & tour</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, sint!</p>
                            <a href="asistencia" className="btn">comprar</a>
                        </div>
                    </div>

                    <div className="box">
                        <div class="image">
                            <img src="img/vuelos/img-2.jpg" alt="" />
                        </div>
                        <div className="content">
                            <h3>adventure & tour</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, sint!</p>
                            <a href="asistencia" className="btn">comprar</a>
                        </div>
                    </div>

                    <div className="box">
                        <div class="image">
                            <img src="img/vuelos/img-11.jpg" alt="" />
                        </div>
                        <div className="content">
                            <h3>adventure & tour</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, sint!</p>
                            <a href="asistencia" className="btn">comprar</a>
                        </div>
                    </div>

                </div>

                <div className="descubri-mas"><a href="paquetes" className="btn">Descubrí más</a> </div>

            </section>

        </main>
    )
}
export default Home;