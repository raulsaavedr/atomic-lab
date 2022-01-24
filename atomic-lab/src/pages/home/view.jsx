import React from "react";
import PageTitle from "../page-title";
import ActiveProjects from "../active-projects/";
import FinishProjects from "../finish-projects/";

import "./styles.scss";

function View() {
  return (
    <div className="page home">
      <div className="home-content">
        <PageTitle user={true} title="¡Bienvenido!"></PageTitle>

        <p>X Iniciar un nuevo proyecto</p>

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
