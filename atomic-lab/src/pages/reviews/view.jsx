import React from "react";
import { Icons } from "../icons";
import PageTitle from "../page-title";
import ModalZoomImg from "../modals/zoom-img";
import "./styles.scss";

function View({
  projectData,
  redirectTo,
  setModalZoomImg,
  modalZoomImg,
  menuTopView,
  setMenuTopView,
  modalData,
  setModalData,
}) {
  return (
    <div className="page reviews">
      <PageTitle page={"reviews"} user={true} title={projectData?.name} />

      <div className="info-drop flex">
        <div className="info-drop-item flex">
          Versión {projectData?.review_data?.version}
          <div
            onClick={() =>
              setMenuTopView(menuTopView === "version" ? "" : "version")
            }
          >
            {Icons(menuTopView === "version" ? "arrow_up" : "arrow_down")}
          </div>
          {menuTopView === "version" && (
            <div className="menu-float">
              <p>No hay más versiones disponibles</p>
            </div>
          )}
        </div>
        <div className="info-drop-item flex">
          Información del proyecto
          <div
            onClick={() => setMenuTopView(menuTopView === "info" ? "" : "info")}
          >
            {Icons(menuTopView === "info" ? "arrow_up" : "arrow_down")}
          </div>
          {menuTopView === "info" && (
            <div className="menu-float">
              <p>Tiempo de entrega</p>
              <p className="text-purple">{projectData.delivery_time}</p>
              <p>Formato de entrega</p>
              <p className="text-purple">{projectData.delivery_format}</p>
              <p>Tamaño</p>
              <p className="text-purple">{projectData.size}</p>
              <p>Archivos editables</p>
              <p className="text-purple">
                {projectData.editable_files ? "Yes" : "No"}
              </p>
              <p>Impresión</p>
              <p className="text-purple">{projectData.print ? "Yes" : "No"}</p>
            </div>
          )}
        </div>
        <div className="info-drop-item flex">
          Revisiones
          <div
            onClick={() =>
              setMenuTopView(menuTopView === "review" ? "" : "review")
            }
          >
            {Icons(menuTopView === "review" ? "arrow_up" : "arrow_down")}
          </div>
          {menuTopView === "review" && (
            <div className="menu-float">
              <p>
                Has realizado
                <span className="text-purple"> {projectData.review} de 4 </span>
                revisiones
              </p>
            </div>
          )}
        </div>
      </div>

      <p className="description">
        Haz click sobre la(s) imagen(es) para agrandar, luego arrastra para
        dejar un comentario. Una vez guardas un comentario, éste se guardará
        automáticamente en la plataforma.
      </p>

      <div className="versions-content flex">
        {projectData?.review_data?.versions?.map((version, index) => (
          <div key={index} className="version">
            <div className="version-id">{version.id}</div>
            <div
              className="version-img"
              onClick={() => {
                setModalData(version.content);
                setModalZoomImg(!modalZoomImg);
              }}
            >
              <img src={version.content} alt={version.id} />
            </div>
          </div>
        ))}

        <div className="version vote-main">
          <p>De las anteriores propuestas, ¿Cuál te gusta más?</p>

          {projectData?.review_data?.versions?.map((version, index) => (
            <div key={index} className="version-vote flex">
              <div className="version-vote-id">Versión {version.id}</div>
              <div className="version-vote-id">
                <input type="checkbox" name="" id="" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="footer">
        <p className="footer-desc">
          Si ya realizaste todos tus comentarios, haz click en
          <span className="text-purple"> finalizar revisión </span>
          para notificarle al diseñador.
        </p>
        <div className="buttons flex">
          <div className="button" onClick={() => redirectTo("/")}>
            Atrás
          </div>
          <div className="button" onClick={() => redirectTo("/")}>
            Finalizar revisión
          </div>
        </div>
      </div>

      {modalZoomImg && (
        <ModalZoomImg close={setModalZoomImg} data={modalData} />
      )}
    </div>
  );
}

export default View;
