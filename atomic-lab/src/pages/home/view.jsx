import React from "react";
import PageTitle from "../page-title";
import ActiveProjects from "../active-projects/";
import FinishProjects from "../finish-projects/";
import { Icons } from "../icons";

import "./styles.scss";

function View({ redirectTo }) {
  return (
    <div className="page home">
      <div className="home-content">
        <PageTitle user={true} title="¡Bienvenido!"></PageTitle>

        <div
          className="add-project flex"
          onClick={() => redirectTo("new-project")}
        >
          <div className="add-project-icon">{Icons("add_circle")}</div>
          <p className="text-purple">Iniciar un nuevo proyecto</p>
        </div>

        <div className="section-page">
          <ActiveProjects page="home" />
        </div>

        <div className="section-page">
          <FinishProjects page="home" />
        </div>
      </div>
    </div>
  );
}

export default View;
