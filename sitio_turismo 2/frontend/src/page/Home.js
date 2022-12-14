import '../../src/styles/componentes/page/Home.css'
const Home = (props) => {
    return (
        <main className="holder">
            <div className="principal">
                <img src="img/vuelos/turismo.jpg" alt="Vuelos" />
            </div>
            <div className="columnas">
                <section className="viaja">
                    <img src="img/vuelos/estaslisto.jpg" alt="estaslisto" />
                    <h2>¿Estas listo?</h2>
                    <p>Consulta a dónde puedes viajar ahora y encuentra las mejores ofertas entre miles de opciones de
                        vuelos, hoteles y renta de autos</p>
                </section>
                <section className="viaja">
                    <img src="img/vuelos/plan.jpg" alt="planea" />
                    <h2>Planea con seguridad</h2>
                    <p>Mantente un paso adelante con las últimas noticias sobre viajes, cancelaciones sin costo de hoteles y
                        autos, y seguros de viaje con cobertura por COVID-19.</p>
                </section>
                <section className="viaja">
                    <img src="img/vuelos/viaja.jpg" alt="viaja" />
                    <h2>Viaja sin complicaciones</h2>
                    <p>Sin tarifas ni cargos ocultos y sin trucos. Con nosotros siempre sabrás exactamente a dónde va tu
                        dinero. Así que olvídate de las preocupaciones y relájate antes de que empiece tu viaje.</p>
                </section>

            </div>

        </main>
    )
}
export default Home;