import React, { useState } from "react";
import { USER_DATA } from "../constats";
import { Icons } from "../icons";
import Tour from "./pages/tour";

import "./styles.scss";

function View({
  redirectTo,
  menuActive,
  setMenuActive,
  setIsAuthenticated,
  location,
  tourStep,
  setTourStep,
  tourActive,
  setTourActive,
}) {
  return (
    <div className="header-bar flex">
      {tourActive && tourStep == 0 && (
        <Tour
          setTourActive={setTourActive}
          tourStep={tourStep}
          setTourStep={setTourStep}
          title={"¡Bienvenido a AtomicLab!"}
          text={
            "Por favor haz click en Siguiente para iniciar el tour, de lo contrario haz click en Cancelar tour."
          }
        />
      )}

      {tourActive && <div className="back-white"></div>}

      <div className="icon-logo">{Icons("logo")}</div>
      <div
        className={`home option ${location.pathname === "/" && "active"}`}
        onClick={() => redirectTo("/")}
      >
        {tourActive && tourStep == 1 && (
          <Tour
            setTourActive={setTourActive}
            tourStep={tourStep}
            setTourStep={setTourStep}
            title={"Inicio"}
            text={
              "Aquí podrás ver tu dashboard o un resumen de tus proyectos activos, tus borradores y tus proyectos terminados con los aspectos más importantes."
            }
          />
        )}

        {Icons(location.pathname === "/" ? "home_purple" : "home")}
      </div>

      <div
        className={`new option ${
          location.pathname === "/new-project" && "active"
        }`}
        onClick={() => redirectTo("/new-project")}
      >
        {tourActive && tourStep == 2 && (
          <Tour
            setTourActive={setTourActive}
            tourStep={tourStep}
            setTourStep={setTourStep}
            title={"Iniciar proyecto"}
            text={
              "Aquí podrás ver los diferentes productos y solicitar el que más se ajuste a tu requerimiento."
            }
          />
        )}

        {Icons(location.pathname === "/new-project" ? "add_purple" : "add")}
      </div>
      <div
        className={`active-projects option ${
          location.pathname === "/active-projects" && "active"
        }`}
        onClick={() => redirectTo("/active-projects")}
      >
        {tourActive && tourStep == 3 && (
          <Tour
            setTourActive={setTourActive}
            tourStep={tourStep}
            setTourStep={setTourStep}
            title={"Proyectos activos"}
            text={
              "Aquí podrás ver tus proyectos que se encuentran activos; ver el estado y hacerle seguimiento, ver la última versión, realizar las anotaciones y mucho más."
            }
          />
        )}

        {Icons(
          location.pathname === "/active-projects" ? "active_purple" : "active"
        )}
      </div>
      <div
        className={`icon-home option ${
          location.pathname === "/finish-projects" && "active"
        }`}
        onClick={() => redirectTo("/finish-projects")}
      >
        {tourActive && tourStep == 4 && (
          <Tour
            setTourActive={setTourActive}
            tourStep={tourStep}
            setTourStep={setTourStep}
            title={"Proyectos terminados"}
            text={
              "Aquí podrás ver tus proyectos que han finalizado. Visualiza, comparte y descarga tus proyectos."
            }
          />
        )}

        {Icons(
          location.pathname === "/finish-projects" ? "finish_purple" : "finish"
        )}
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

                <li
                  className="text-purple"
                  onClick={() => setIsAuthenticated(false)}
                >
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
