import React from "react";
import PageTitle from "../page-title";
import "./styles.scss";

function View({ projectData, redirectTo }) {
  console.log(projectData);

  return (
    <div className="page reviews">
      <PageTitle page={"reviews"} user={true} title={projectData?.name} />

      <div className="info-drop flex">
        <div className="info-drop-item">
          Versión {projectData?.review_data?.version}
        </div>
        <div className="info-drop-item">Información del proyecto</div>
        <div className="info-drop-item">Revisiones</div>
      </div>

      <div className="versions-content flex">
        {projectData?.review_data?.versions?.map((version) => (
          <div className="version">
            <div className="version-id">{version.id}</div>
            <div className="version-id">{version.content}</div>
          </div>
        ))}

        <div className="version">
          <p>De las anteriores propuestas, ¿Cuál te gusta más?</p>

          {projectData?.review_data?.versions?.map((version) => (
            <div className="version-vote flex">
              <div className="version-vote-id">Versión {version.id}</div>
              <div className="version-vote-id">
                <input type="checkbox" name="" id="" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <p>
        Si ya realizaste todos tus comentarios, haz click en
        <span className="text-purple"> finalizar revisión </span>
        para notificarle al diseñador.
      </p>

      <div className="footer">
        <div className="buttons flex">
          <div className="button" onClick={() => redirectTo("/")}>
            Atrás
          </div>
          <div className="button" onClick={() => redirectTo("/")}>
            Finalizar revisión
          </div>
        </div>
      </div>
    </div>
  );
}

export default View;
