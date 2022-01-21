import React from "react";
import PageTitle from "../../../page-title";
import "./styles.scss";
import { Icons } from "../../../icons";
import { USER_DATA } from "../../../constats";

function View({}) {
  return (
    <div className="team-page page">
      <PageTitle page={"team-page"} user={true} title="Mi equipo" />

      <div className="table-data">
        <table>
          <thead>
            <tr>
              <td>Nombre</td>
              <td>Email</td>
              <td>Rol</td>
              <td>Proyectos</td>
              <td>Eliminar</td>
            </tr>
          </thead>
          <tbody>
            {USER_DATA.team.map((member) => (
              <tr>
                <td>{member.name}</td>
                <td>{member.email}</td>
                <td>{member.rol}</td>
                <td>{member.projects}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="footer">
        <section className="section-buttons flex">
          <div className="button">Guardar cambios</div>
        </section>
      </section>
    </div>
  );
}

export default View;
