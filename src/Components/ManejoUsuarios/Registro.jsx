import "./Registro.css";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { db } from "../firebaseConfig/firebase.jsx";
import { collection, doc, setDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const mySwal = withReactContent(Swal);

const Registro = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const clientesCollection = collection(db, "Clientes");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");

  const submit = (e) => {
    e.preventDefault();
    validarEmail();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //Once the user creation has happened successfully, we can add the currentUser into firestore
        //with the appropriate details.
        console.log(userCredential);
        const user = userCredential.user;
        console.log(user);
        setDoc(doc(db, "Clientes", user.uid), {
          Nombre: nombre,
          Apellido: apellido,
          Email: email,
        })
          //ensure we catch any errors at this stage to advise us if something does go wrong
          .catch((error) => {
            console.log(
              "Something went wrong with added user to firestore: ",
              error
            );
          });
        navigate("/VetApp");
      })
      //we need to catch the whole sign up process if it fails too.
      .catch((error) => {
        console.log("Something went wrong with sign up: ", error);
      });
  };

  const validarEmail = () => {
    let validador_email = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if (validador_email.test(email)) {
      return true;
    } else {
      Swal.fire({
        icon: "error",
        title: "Error en email",
        text: "El formato de email no es correcto",
      });
      return false;
    }
  };

  const PasswdError = () => {
    if (password.length < 6) {
      return (
        <span style={{ color: "red" }}>Se requieren al menos 6 caracteres</span>
      );
    }
  };

  return (
    <div id="container">
      <div id="registro">
        <h1 className="Titulo_registro">Registro</h1>
        <form method="POST" action="" id="registroform">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="ejemplo@email.com"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>

          <label>Password</label>
          <input
            type="password"
            name="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <PasswdError />

          <label>Nombre</label>
          <input
            type="nombre"
            name="nombre"
            placeholder="Nombre..."
            required
            onChange={(e) => setNombre(e.target.value)}
          ></input>

          <label>Apellido</label>
          <input
            type="apellido"
            name="apellido"
            placeholder="Apellido..."
            required
            onChange={(e) => setApellido(e.target.value)}
          ></input>

          <Link to={"/VetApp"} className="Link">
            <button
              className="btn-registro"
              type="submit"
              title="Registrarse"
              name="Registrarse"
              disabled={password.length < 6}
              onClick={submit}
            >
              Registrarse
            </button>
          </Link>
          <div className="signup_link">
            ¿Ya tenes una cuenta?{" "}
            <Link to={"/VetApp/Login"} className="bold">
              <b>Ingresá acá</b>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Registro;
