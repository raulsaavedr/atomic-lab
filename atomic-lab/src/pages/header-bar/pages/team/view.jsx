import React from "react";
import PageTitle from "../../../page-title";
import "./styles.scss";
import { Icons } from "../../../icons";
import ModalAddMember from "../../../modals/add-member";
import { TEAM_ROL } from "../../../constats";

function View({
  modalAddMember,
  setModalAddMember,
  dataModals,
  team,
  deleteMember,
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
        {team ? (
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
              {team.map((member, index) => (
                <tr key={index}>
                  <td>{member.name}</td>
                  <td>{member.email}</td>
                  <td>
                    {TEAM_ROL.filter((rol) => rol.id === member.rol_id)[0].text}
                  </td>
                  <td></td>
                  <td>
                    <div
                      className="delete-icon"
                      onClick={() => deleteMember(member.id)}
                    >
                      {Icons("delete_circle")}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="message text-purple">
            No hay personas en el equipo
          </div>
        )}
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
