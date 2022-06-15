import React from "react";
import PageTitle from "../page-title";
import "./styles.scss";

function View({ projectValues, navigate, options, options_post }) {
  return (
    <div className="page project-detail">
      <PageTitle user={true} title={projectValues[0]?.name_project} />
      <p>
        A continuación te presentamos la información que nos suministraste sobre
        el proyecto.
      </p>
      <div className="project-detail-content flex">{options}</div>
      <div className="project-detail-content flex">{options_post}</div>
      <section className="section-buttons flex">
        <div className="button" onClick={() => navigate(-1, { replace: true })}>
          Atrás
        </div>
      </section>
    </div>
  );
}

export default View;
