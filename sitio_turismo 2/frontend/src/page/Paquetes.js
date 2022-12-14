import '../../src/styles/componentes/page/Home.css'
import { Link } from "react-router-dom";

const Paquetes = (props) => {
    return (
        <main className="holder">

            <body>
                <h1>Encontrá paquetes turísticos imperdibles</h1>
                <p className="placeholder-glow">
                    <span class="placeholder col-12"></span>
                </p>

                <p className="placeholder-wave">
                    <span className="placeholder col-12"></span>
                </p>
            </body>
            
                <img src="img/vuelos/cataratas.jpg" class="card-img-top" alt="cataratas" />
                <div className="card-body">
                    <h5 className="card-title">Cataratas del Iguazú</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                        content.</p>
                    <Link to="btn btn-primary">COMPRAR</Link>
                
            </div>
            
                <img src="img/vuelos/bariloche.jpg" class="card-img-top" alt="bariloche" />
                <div className="card-body">
                    <h5 className="card-title">Bariloche</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                        content.</p>
                    <Link to="btn btn-primary">COMPRAR</Link>
            
            </div>
            
                <img src="img/vuelos/cordillera.jpg" class="card-img-top" alt="cordillera" />
                <div className="card-body">
                    <h5 className="card-title">Cordillera</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                        content.</p>
                    <Link to="btn btn-primary">COMPRAR</Link>
                    

            </div>
        </main>
    )
}

export default Paquetes;