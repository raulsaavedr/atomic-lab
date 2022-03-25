import React from "react";
import { Icons } from "../icons";
import "./styles.scss";

function View({ redirectTo }) {
  return (
    <div className="recover-password">
      <div className="login-content flex">
        <div className="inputs-main">
          <div className="inputs">
            <div className="logo">{Icons("logo")}</div>

            <div className="content">
              <div className="text-purple">
                <h2>Recuperar contraseña</h2>
              </div>
              <input type="email" className="input-txt" placeholder="Email" />

              <div className="buttons">
                <div className="button" onClick={() => redirectTo("/")}>
                  Atrás
                </div>
                <div
                  className="button-blue"
                  onClick={() => redirectTo("/recover-password/email")}
                >
                  Recuperar
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default View;
