import React, { useContext } from "react";
import AuthContext from "../../auth-context";
import { USER_DATA } from "../constats";
import { Icons } from "../icons";
import "./styles.scss";

function View({ redirectTo }) {
  const { toggleAuthenticated } = useContext(AuthContext);

  return (
    <div className="login">
      <div className="login-content flex">
        <div className="logo-main">
          <div className="logo">{Icons("login_main")}</div>
        </div>

        <div className="inputs-main">
          <div className="inputs">
            <p className="text-purple">
              <h2>Iniciar sesión</h2>
            </p>
            <input type="email" className="input-txt" placeholder="Email" />
            <input
              type="password"
              className="input-txt"
              placeholder="Contraseña"
            />

            <p
              className="text-purple recovery"
              onClick={() => redirectTo("recover-password")}
            >
              ¿Olvidaste tu contraseña?
            </p>
            <div
              className="button-blue"
              onClick={() => {
                toggleAuthenticated();
                redirectTo(USER_DATA.onboarding ? "onboarding" : "/");
              }}
            >
              Iniciar sesión
            </div>
            <p className="not-account">
              ¿No tienes una cuenta?
              <div
                className="text-purple"
                onClick={() => redirectTo("sing-up")}
              >
                Crear una cuenta
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default View;
