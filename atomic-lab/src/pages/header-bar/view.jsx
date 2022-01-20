import React, { useState } from "react";
import { USER_DATA } from "../constats";
import { Icons } from "../icons";

import "./styles.scss";

function View({ redirectTo, menuActive, setMenuActive }) {
  return (
    <div className="header-bar flex">
      <div className="icon-logo">{Icons("logo")}</div>
      <div className="icon-home option" onClick={() => redirectTo("/")}>
        {Icons("home")}
      </div>
      <div
        className="icon-add option"
        onClick={() => redirectTo("/new-project")}
      >
        {Icons("add")}
      </div>
      <div
        className="icon-active option"
        onClick={() => redirectTo("active-projects")}
      >
        {Icons("active")}
      </div>
      <div
        className="icon-finish option"
        onClick={() => redirectTo("/finish-projects")}
      >
        {Icons("finish")}
      </div>
      <div className="search flex">
        <div className="icon-search flex"> {Icons("search")}</div>
        <p>Buscar...</p>
      </div>
      <div className="icon-notifications option">{Icons("notifications")}</div>
      <div className="credits flex">
        <div className="icon-credit flex">
          {Icons("credits")} ${USER_DATA.credits}
        </div>
        <div className="credits-buy flex">Comprar</div>
      </div>
      <div className="account flex">
        <div className="icon-account">account</div>
        <div className="account-value">
          <div>Pepsi</div>
          <div>Usuario</div>
        </div>
        <div className="icon-arrow-up">
          <div className="icon" onClick={() => setMenuActive(!menuActive)}>
            {!menuActive ? Icons("arrow_down") : Icons("arrow_up")}
          </div>

          {menuActive && (
            <div className="menu-account">
              <ul>
                <li
                  onClick={() => {
                    redirectTo("profile");
                  }}
                >
                  Mi perfil
                </li>
                <li
                  onClick={() => {
                    redirectTo("brands");
                  }}
                >
                  Mis marcas
                </li>
                <li
                  onClick={() => {
                    redirectTo("attached");
                  }}
                >
                  Mis adjuntos
                </li>
                <li
                  onClick={() => {
                    redirectTo("team");
                  }}
                >
                  Mi equipo
                </li>
                <hr />
                <li
                  onClick={() => {
                    redirectTo("configuration");
                  }}
                >
                  Mi configuración
                </li>
                <li
                  onClick={() => {
                    redirectTo("help-support");
                  }}
                >
                  Ayuda y soporte
                </li>
                <hr />

                <li className="text-purple" onClick={() => {}}>
                  Cerrar sesión
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default View;
