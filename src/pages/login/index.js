import React, { useState } from "react";
import { validateLogin } from "../../utils/dbFunctions";
import Loading from "../../components/loading";
import { Redirect } from "react-router-dom";
import "./index.css";

const Login = () => {
  const initialUser = {
    email: "",
    password: "",
  };
  const [user, setUser] = useState(initialUser);
  const [isLoading, setIsLoading] = useState(false);
  const [auth, setAuth] = useState(false);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const login = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const response = await validateLogin(user);
    if (response["auth"]) {
      localStorage.setItem("auth", true);
      setAuth(true);
    } else {
      alert("Datos incorrectos, por favor digitelos de nuevo");
    }
    setIsLoading(false);
  };
  return (
    <div>
      {isLoading ? <Loading message="Estamos preparando todo para tí" /> : ""}
      {auth ? <Redirect to="/dashboard" /> : ""}
      <header className="header-container">
        <div className="header-text">
          <div className="header-text-container">
            Aplicación OLSoftware
            <a>Prueba practica frontend </a>
          </div>
        </div>
        <div className="header-form">
          <div className="login-card">
            <h3>Inicio de sesión</h3>
            <form onSubmit={login} className="input-card">
              <input
                name="email"
                type="email"
                onChange={handleChange}
                placeholder="Usuario"
                required
              />
              <input
                name="password"
                onChange={handleChange}
                type="password"
                placeholder="Contraseña"
                required
              />
              <button className="login-button">Iniciar sesión</button>
            </form>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Login;
