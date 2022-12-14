
import '../../src/styles/componentes/page/Asistencia.css'
const Asistencia = (props) => {
    return (
        <main className="holder asistencia">
            <h1>Asistencia remota</h1>
            <form action="/my-handling-form-page" method="post">
                <ul>
                    <li>
                        <label for="name">Nombre:</label>
                        <input type="text" id="name" name="user_name" />
                    </li>
                    <li>
                        <label for="name">Apellido:</label>
                        <input type="text" id="name" name="user_name" />
                    </li>
                    <li>
                        <label for="mail">Correo electrónico:</label>
                        <input type="email" id="mail" name="user_mail" />
                    </li>
                    <li>
                        <label for="msg">Mensaje:</label>
                        <textarea id="msg" name="user_message"></textarea>
                    </li>
                    <li class="button">
                        <input class="boton" type="submit" value="Enviar" />
                    </li>
                </ul>
            </form>
        </main>

    )
}
export default Asistencia;


