import "./Login.css";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "firebase/auth";
import { auth } from "../firebaseConfig/firebase";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/all';

const Login = () => {
  const mySwal = withReactContent(Swal);
  const navigate = useNavigate();

  const auth = getAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mostrar, setMostrar] = useState(false);

  const switchMostrar = () => setMostrar(!mostrar);

  const loginSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("Ingreso correcto");

        navigate("/VetApp");
      })
      .catch((error) => {
        // alert(`Error: ${error.code} - ${error.message}\nHa habido un error!`);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "El usuario ingresado no existe",
        });
      });
  };

  function mostrarContrasena(){
    var tipo = document.getElementById("password");
    if(tipo.type == "password"){
        tipo.type = "text";
        <AiFillEyeInvisible/>
    }else{
        tipo.type = "password";
    }
}

  return (
    <div id="contenedor">
      <div id="login">
        <h1 className="titulo_login"> Ingresa a tu cuenta</h1>
        <form id="loginform" onSubmit={loginSubmit}>
          <label htmlFor="email" className="log">
            Email
          </label>
          <input
            id="usuario"
            type="email"
            className="log"
            name="email"
            placeholder="ejemplo@email.com"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>


          <label htmlFor="password">
            Contraseña
          </label>
          <input
            id="password"
            type={mostrar ? "text" : "password"}
            className="log"
            placeholder="Contraseña"
            name="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>

          <button type="button" id="ocultar" onClick={switchMostrar}>
            {mostrar ? <AiFillEyeInvisible /> : <AiFillEye />}
          </button>
          <br />
          <button type="submit" className="logSub" onSubmit={loginSubmit}>
            Ingresar
          </button>
          <br />
          <Link to={"/VetApp/register"} className="log1">
            ¿No tienes Cuenta? <b>Registrate</b>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
