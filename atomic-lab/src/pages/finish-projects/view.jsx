import React from "react";
import PageTitle from "../page-title";
import { FINISH_TABLES, USER_DATA } from "../constats";
import ModalPrivateNotes from "../modals/private-notes";
import ModalLastVersion from "../modals/last-version";
import { Icons } from "../icons";

import "./styles.scss";

function View({
  page,
  redirectToStatusProject,
  setModalPrivateNotes,
  dataModals,
  setDataModals,
  modalPrivateNotes,
  modalLastVersion,
  setModalLastVersion,
}) {
  return (
    <div className="page finish-projects">
      <PageTitle page={page} user={true} title="Proyectos terminados" />

      <div className="table-data">
        <table>
          <thead>
            <tr>
              {FINISH_TABLES(page).map((item) => (
                <th>
                  {item.isActive && (
                    <div className="th-flex flex">
                      <p>{item.title}</p>
                      {item.title !== "" && (
                        <p className="flex">{Icons("help_circle")}</p>
                      )}
                    </div>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {USER_DATA.finish_projects.map((project) => (
              <tr>
                <td>{project.name}</td>
                <td>
                  <div>
                    <p>{Icons("status_check_" + project.status)}</p>
                    <p
                      className="view-more pointer"
                      onClick={() => redirectToStatusProject(project)}
                    >
                      Ver más...
                    </p>
                  </div>
                </td>
                <td>{project.date_finish}</td>

                {page !== "home" && (
                  <td>
                    <div
                      className="pointer"
                      onClick={() => {
                        setModalPrivateNotes(!modalPrivateNotes);
                        setDataModals(project.private_notes);
                      }}
                    >
                      <p>{Icons("private_notes")}</p>
                    </div>
                  </td>
                )}
                <td>
                  <div
                    className="pointer"
                    onClick={() => {
                      setModalLastVersion(!modalLastVersion);
                      setDataModals(project.view_last_review);
                    }}
                  >
                    {Icons("last_version")}
                  </div>
                </td>
                {page !== "home" && (
                  <td>
                    <div
                      className="pointer"
                      /*  onClick={() => {
                      setModalLastVersion(!modalLastVersion);
                      setDataModals(project.view_last_review);
                    }} */
                    >
                      {Icons("last_comments")}
                    </div>
                  </td>
                )}
                <td>
                  <div
                    className="pointer"
                    /*  onClick={() => {
                      setModalLastVersion(!modalLastVersion);
                      setDataModals(project.view_last_review);
                    }} */
                  >
                    {Icons("download")}
                  </div>
                </td>

                {page === "home" ? (
                  <td>
                    <div className="view-more pointer">Ver más...</div>
                  </td>
                ) : (
                  <td>
                    <div className="pointer">{Icons("menu_points")}</div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>

        {modalPrivateNotes && (
          <ModalPrivateNotes close={setModalPrivateNotes} data={dataModals} />
        )}
        {modalLastVersion && (
          <ModalLastVersion close={setModalLastVersion} data={dataModals} />
        )}
        {/* {modalReviews && (
          <ModalReviews close={setModalReviews} data={dataModals} />
        )} */}
      </div>
    </div>
  );
}

export default View;
