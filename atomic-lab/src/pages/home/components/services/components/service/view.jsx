import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

function View({ service, redirectToServicePage }) {
  return (
    <div className="card-service" onClick={() => redirectToServicePage()}>
      <>
        <div className="background"></div>
        <div className="card-content flex">
          <div className="status">
            {service.status !== "active" && "Próximamente"}
          </div>
          <div className="description">{service.description}</div>
        </div>
        <div className="card-footer flex">
          <div className="title">{service.title}</div>
          <div className="icon-credit">icon credit</div>
        </div>
      </>
    </div>
  );
}

export default View;
