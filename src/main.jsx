import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./Components/firebaseConfig/AuthProvider.jsx";
import App from './App.jsx'
import './index.css'
import Inicio from './Components/Publico/Inicio.jsx';
import Registro from './Components/ManejoUsuarios/Registro.jsx';
import Login from './Components/ManejoUsuarios/Login.jsx';
import SignOut from './Components/ManejoUsuarios/SignOut.jsx';
import Consultas from './Components/Publico/Consultas.jsx';
import QuienesSomos from './Components/Publico/QuienesSomos.jsx';
import Perfil from './Components/Perfil/Perfil.jsx';
import EditarPerfil from './Components/Perfil/EditarPerfil.jsx';
import MisMascotas from './Components/Mascotas/MisMascotas.jsx';
import EditarMascota from './Components/Mascotas/EditarMascota.jsx';
import AgregarMascota from './Components/Mascotas/AgregarMascota.jsx';
import HistoriaClinica from './Components/Mascotas/HistoriaClinica.jsx';
import EditarHistoriaClinica from './Components/Mascotas/EditarHistoriaClinica.jsx';
import NuevaEntrada from './Components/Mascotas/NuevaEntrada.jsx';
import Adopciones from './Components/Adopciones/Adopciones.jsx';
import EditarAdopcion from './Components/Adopciones/EditarAdopcion.jsx';
import Adopcion from './Components/Adopciones/Adopcion.jsx';
import AgregarAdopcion from './Components/Adopciones/AgregarAdopcion.jsx';
import FormularioDeAdopciones from './Components/Adopciones/FormularioDeAdopciones.jsx';
import Turnos from './Components/Turnos/Turnos.jsx';
import EditarTurno from './Components/Turnos/EditarTurno.jsx'
import AgendarTurno from './Components/Turnos/AgendarTurno.jsx';
import Clientes from './Components/Clientes.jsx';

//creamos el router que determina las rutas y que elementos renderizan
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    //con children definimos rutas hijo que se renderizaran dentro de las rutas padre.
    children: [
      {
        index: true, // la prop index indica que la ruta se renderiza por default con la url padre ("/")
        element: <Inicio />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "signOut",
        element: <SignOut />
      },
      {
        path: "register",
        element: <Registro />
      },
      {
        path: "consultas",
        element: <Consultas />
      },
      {
        path: "quienesSomos",
        element: <QuienesSomos />
      },
      {
        path: "perfil/:uid",
        element: <Perfil />
      },
      {
        path: "editarPerfil/:id",
        element: <EditarPerfil />
      },
      {
        path: "misMascotas/:idUsuario",
        element: <MisMascotas />
      },
      {
        path: "editarMascota/:idUsuario/:idMascota/",
        element: <EditarMascota />
      },
      {
        path: "crear/:id",
        element: <AgregarMascota />
      },
      {
        path: "historiaClinica/:idUsuario/:id",
        element: <HistoriaClinica />
      },
      {
        path: "editarHistoria/:idUsuario/:id/:idHistoria",
        element: <EditarHistoriaClinica />
      },
      {
        path: "nuevaEntrada/:idUsuario/:id",
        element: <NuevaEntrada />
      },
      {
        path: "adopciones",
        element: <Adopciones />
      },
      {
        path: "formulario",
        element: <FormularioDeAdopciones />
      },
      {
        path: "agregarAdopcion",
        element: <AgregarAdopcion />
      },
      {
        path: "editar/:id",
        element: <EditarAdopcion  />
      },
      {
        path: "adopcion/:id",
        element: <Adopcion />
      },
      {
        path: "turnos",
        element: <Turnos />
      },
      {
        path: "/editarTurno/:fechaTurno/:horaTurno",
        element: <EditarTurno />
      },
      {
        path: "/agendarTurno",
        element: <AgendarTurno/>
      },
      {
        path: "clientes",
        element: <Clientes />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // el elemento RouterProvider utiliza el router para renderizar nuestras rutas.

  <AuthProvider>
  
  <RouterProvider router={router}></RouterProvider>
  
  </AuthProvider>
)
