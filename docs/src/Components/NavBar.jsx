import { Link, NavLink } from "react-router-dom";
import "./NavBar.css"
import { BsInstagram, BsFacebook, CgProfile, MdOutlineLocalGroceryStore, GiHospitalCross } from 'react-icons/all';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./firebaseConfig/AuthProvider"
import { getAuth } from "firebase/auth";

const LogInLinks = () => {

    const User = useContext(AuthContext);
    const user = User.currentUser;
    const uid = user?.uid;
    const isUserLoggedIn = user !== null;

    if (!isUserLoggedIn) {
        return (
            <>
                <NavLink to="/VetApp/login" className="nav-link nav-item"><button id="botonIngresar" className="botonNavNoLogin">Ingresar</button></NavLink>
                <NavLink to="/VetApp/register" className="nav-link nav-item"><button id="botonRegistrate" className="botonNavNoLogin">Registrate</button></NavLink>
            </>
        );
    }

    else if (isUserLoggedIn && user.email == 'admin@gmail.com') {
        return (
            <>
                <NavLink to="/VetApp/clientes" className="nav-link nav-item">Clientes</NavLink>
                <NavLink to="/VetApp/signOut" className="nav-link nav-item"><button id="botonCerrarSesion" className="botonNavLogin">Cerrar Sesión</button></NavLink>
            </>
        );
    }

    else {
        return (
            <>
                <NavLink to={`/VetApp/misMascotas/${uid}`} className="nav-link nav-item">Mis Mascotas</NavLink>
                <NavLink to="/VetApp/signOut" className="nav-link nav-item"><button id="botonCerrarSesion" className="botonNavLogin">Cerrar Sesión</button></NavLink>
                <NavLink to={`/VetApp/perfil/${uid}`} className="nav-link nav-item"><CgProfile /></NavLink>
            </>
        );
    }
}

const NavBar = () => {

    return (
        <nav className="navbar" id="navbar">
            <div className="nav-link-section">
                <NavLink to="/VetApp" className="nav-link nav-item huellitas">
                    <figure>
                        <img src="/logoBlanco.jpg" alt="" className="logoBlanco" />
                    </figure>
                    Huellitas
                </NavLink>
                <NavLink to="/VetApp/quienesSomos" className="nav-link nav-item">Quiénes Somos</NavLink>
                <NavLink to="/VetApp/adopciones" className="nav-link nav-item">Adopciones</NavLink>
                <NavLink to="/VetApp/consultas" className="nav-link nav-item">Consultas</NavLink>
                <LogInLinks></LogInLinks>
                <a href="https://www.instagram.com/" target="_blank" style={{ color: "black", paddingRight: "10px" }}><BsInstagram /></a>
                <a href="https://es-la.facebook.com/" target="_blank" style={{ color: "black", paddingRight: "10px" }}><BsFacebook /></a>
            </div>
        </nav >
    )
}

export default NavBar;