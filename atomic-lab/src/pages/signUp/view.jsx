import React from "react";
import { Icons } from "../icons";
import "./styles.scss";

function View({ redirectTo }) {
  return (
    <div className="sign-up">
      <div className="login-content flex">
        <div className="logo-main">
          <div className="logo">{Icons("login_main")}</div>
        </div>

        <div className="inputs-main">
          <div className="inputs">
            <p className="text-purple">
              <h2>Crear una cuenta</h2>
            </p>
            <input type="text" className="input-txt" placeholder="Nombres(s)" />
            <input type="text" className="input-txt" placeholder="Apellido" />

            <input type="email" className="input-txt" placeholder="Email" />
            <input
              type="password"
              className="input-txt"
              placeholder="Contraseña"
            />
            <input
              type="password"
              className="input-txt"
              placeholder="Confirma tu contraseña"
            />

            <div className="buttons">
              <div className="button" onClick={() => redirectTo("/")}>
                Atrás
              </div>
              <div
                className="button-blue"
                onClick={() => redirectTo("/sing-up/email")}
              >
                Registrarme
              </div>
            </div>

            <p className="text-purple privacity">
              Al hacer click en Registrarme estoy aceptando los Términos y
              Condiciones y la Política de Privacidad.
            </p>

            <div className="not-account">
              <p>¿Ya tienes una cuenta? </p>
              <span className="text-purple" onClick={() => redirectTo("/")}>
                Iniciar sesión{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default View;
