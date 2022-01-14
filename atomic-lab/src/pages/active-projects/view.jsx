import React from "react";
import PageTitle from "../page-title";
import { USER_DATA } from "../constats";
import "./styles.scss";

function View() {
  return (
    <div className="active-projects">
      <div className="hello">Hola Usuario,</div>

      <PageTitle title="Proyectos activos" />

      <div className="page-content">
        <div className="table-data">
          <table>
            <thead>
              <tr>
                <th>Nombre del proyecto</th>
                <th>Estado</th>
                <th>Fecha estimada próx. revisión</th>
                <th>Mis notas privadas</th>
                <th>Visualizar última versión</th>
                <th>Revisión</th>
                <th>Retroalimentación revisiones</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {USER_DATA?.active_projects?.map((project, index) => (
                <tr key={index}>
                  <td> {project.name} </td>
                  <td> {project.status} </td>
                  <td> {project.date_next_review} </td>
                  <td> {project.private_notes.length} </td>
                  <td> {project.last_version}</td>
                  <td> {project.review} de 4</td>
                  <td>
                    <div className="icon-review"></div>
                  </td>
                  <td>
                    <div className="menu-float">
                      <div className="icon-points-menu">x</div>
                      <div className="menu-float-options">
                        <div className="menu-float-options-item flex">
                          Más información
                        </div>
                        <div className="menu-float-options-item flex">
                          Compartir
                        </div>
                        <div className="menu-float-options-item flex">
                          Invitar personas
                        </div>
                        <div className="menu-float-options-item flex">
                          Eliminar
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default View;
