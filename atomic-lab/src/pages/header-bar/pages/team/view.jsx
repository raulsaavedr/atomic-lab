import React from "react";
import PageTitle from "../../../page-title";
import "./styles.scss";
import { Icons } from "../../../icons";
import { USER_DATA } from "../../../constats";
import ModalAddMember from "../../../modals/add-member";

function View({
  modalAddMember,
  setModalAddMember,
  dataModals,
  setDataModals,
}) {
  return (
    <div className="team-page page">
      <PageTitle
        page={"team-page"}
        user={true}
        title="Mi equipo"
        func={setModalAddMember}
      />

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
                <td>{Icons("delete_circle")}</td>
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

      {modalAddMember && (
        <ModalAddMember close={setModalAddMember} data={dataModals} />
      )}
    </div>
  );
}

export default View;
