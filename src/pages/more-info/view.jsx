import React from "react";
import PageTitle from "../page-title";
import "./styles.scss";

function View({
  filterProject,
  projectValues,
  userData,
  navigate,
  designers,
  projectExtraData,
}) {
  return (
    <div className="page more-info">
      <PageTitle user={true} title="Más información" />

      <h2>{projectValues.name_project}</h2>

      <div className="table-data">
        <table>
          <tbody>
            <tr>
              <td className="title">Dueño del Proyecto</td>
              <td>
                {userData.name} {userData.last_name}
              </td>
              <td className="title">Diseñador</td>
              <td>
                {designers.length >= 1
                  ? designers.map((designer) => <p>{designer.name}</p>)
                  : "No asignado"}
              </td>
            </tr>
            <tr>
              <td className="title">Fecha de inicio</td>
              <td>{filterProject.updated_at}</td>
              <td className="title">Fecha estimada próxima versión</td>
              <td>{filterProject.review_date || "No programada"}</td>
            </tr>
            <tr>
              <td className="title">Valor</td>
              <td>$ {projectValues?.costo_base}</td>
            </tr>
            <tr>
              <td className="title">Revisión</td>
              <td>
                {filterProject.review} de{" "}
                {projectValues?.revisiones.replace("Hasta ", "")}
              </td>
            </tr>
            <tr>
              <td className="title">Resumen del Proyecto</td>
              <td>
                <div className="resume flex">
                  <div>Nombre: </div>
                  <div>{projectValues?.name_project || "-"}</div>
                </div>
                <div className="resume flex">
                  <div>Marca: </div>
                  <div>{projectValues?.brand_select || "-"}</div>
                </div>
                <div className="resume flex">
                  <div>Formato: </div>
                  <div>{projectValues?.formato_entrega || "-"}</div>
                </div>
                <div className="resume flex">
                  <div>Idea del post: </div>
                  <div>{projectValues?.idea_post || "-"}</div>
                </div>
                <div className="resume flex">
                  <div>Paleta de colores: </div>
                  <div>{projectValues?.palete_colors || "-"}</div>
                </div>
                <div className="resume flex">
                  <div>Paleta de colores: </div>
                  <div>{projectValues?.palete_colors || "-"}</div>
                </div>
                <div className="resume flex">
                  <div>Tipo de proyecto: </div>
                  <div>{projectValues?.project_type || "-"}</div>
                </div>
                <div className="resume flex">
                  <div>Público objetivo: </div>
                  <div>{projectValues?.public_goal || "-"}</div>
                </div>
                <div className="resume flex">
                  <div>Red social: </div>
                  <div>{projectValues?.social_network || "-"}</div>
                </div>
                <div className="resume flex">
                  <div>Tamaño: </div>
                  <div>{projectValues?.tamaño || "-"}</div>
                </div>
                <div className="resume flex">
                  <div>Tipo de post: </div>
                  <div>{projectValues?.type_post || "-"}</div>
                </div>
                <div className="resume flex">
                  <div>Tipo de publicación: </div>
                  <div>{projectValues?.type_publication || "-"}</div>
                </div>
                <div className="resume flex">
                  <div>Archivos editables: </div>
                  <div>{projectValues?.archivos_editables || "-"}</div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <section className="section-buttons flex">
        <div className="button" onClick={() => navigate(-1, { replace: true })}>
          Atrás
        </div>
      </section>
    </div>
  );
}

export default View;
