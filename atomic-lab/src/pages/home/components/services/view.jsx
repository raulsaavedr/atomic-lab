import React from "react";
import Service from "./components/service";
import { SERVICES_DATA } from "../../../constats";
import "./styles.scss";

function View() {
  return (
    <div className="services">
      <div className="title-content flex">
        <div className="title">¿Qué quieres hacer hoy?</div>
        <div className="help flex">
          <div className="icon-help">icon help</div>
          <div className="help-text">Ayuda</div>
        </div>
      </div>

      <div className="service flex">
        {SERVICES_DATA.map((service) => (
          <Service service={service}></Service>
        ))}
      </div>
    </div>
  );
}

export default View;
