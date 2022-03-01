import React from "react";
import PageTitle from "../page-title";
import "./styles.scss";

function View({
  filterProject,
  projectValues,
  userData,
  redirectTo,
  navigate,
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
              <td>FALTA</td>
            </tr>
            <tr>
              <td className="title">Fecha de inicio</td>
              <td>{filterProject.updated_at}</td>
              <td className="title">Fecha estimada próxima versión</td>
              <td>FALTA</td>
            </tr>
            <tr>
              <td className="title">Valor</td>
              <td>FALTA</td>
            </tr>
            <tr>
              <td className="title">Revisión</td>
              <td>{filterProject.review} de 4</td>
            </tr>
            <tr>
              <td className="title">Resumen del Proyecto</td>
              <td>FALTA</td>
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
