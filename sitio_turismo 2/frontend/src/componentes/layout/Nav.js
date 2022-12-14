import { NavLink } from "react-router-dom";
const Nav = (props) => {
    return (
        <nav >
            <div className="holder">
                <ul>
                    <li><NavLink activeClassName="activo" exact to="/">Home</NavLink></li>
                    <li><NavLink activeClassName="activo" exact to="/Vuelos">Vuelos</NavLink></li>
                    <li><NavLink activeClassName="activo" exact to="/Paquetes">Paquetes</NavLink></li>
                    <li><NavLink activeClassName="activo" exact to="/Activades">Activades</NavLink></li>
                    <li><NavLink activeClassName="activo" exact to="/Asistencia">Asistencia</NavLink></li>

                </ul>
            </div>
        </nav>
    );
}
export default Nav;