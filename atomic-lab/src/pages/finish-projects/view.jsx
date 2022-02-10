import React from "react";
import PageTitle from "../page-title";
import { FINISH_TABLES } from "../constats";
import ModalPrivateNotes from "../modals/private-notes";
import ModalZoomImg from "../modals/zoom-img";
import { Icons } from "../icons";

import "./styles.scss";

function View({
  page,
  redirectToStatusProject,
  setModalPrivateNotes,
  dataModals,
  setDataModals,
  modalPrivateNotes,
  modalZoomImg,
  setModalZoomImg,
  menuFloat,
  setMenuFloat,
  navigate,
  dataFinishProjects,
}) {
  return (
    <div className="page finish-projects">
      <PageTitle page={page} user={true} title="Proyectos terminados" />

      {dataFinishProjects.length === 0 ? (
        <div className="message">
          <h3 className="text-purple">No tienes proyectos terminados</h3>
          <div className="button" onClick={() => navigate("/new-project")}>
            Empezar proyecto
          </div>
        </div>
      ) : (
        <div className="table-data">
          <table>
            <thead>
              <tr>
                {FINISH_TABLES(page).map((item, index) => (
                  <th key={index}>
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
              {dataFinishProjects.map((project, index) => {
                const projectValues = JSON.parse(project.values);

                return (
                  <tr key={index}>
                    <td>{projectValues.name}</td>
                    <td>
                      <div>
                        <p>{Icons("status_check_" + projectValues.status)}</p>
                        <p
                          className="view-more pointer"
                          onClick={() => redirectToStatusProject(projectValues)}
                        >
                          Ver más...
                        </p>
                      </div>
                    </td>
                    <td>{projectValues.date_finish}</td>

                    {page !== "home" && (
                      <td>
                        <div
                          className="pointer"
                          onClick={() => {
                            setModalPrivateNotes(!modalPrivateNotes);
                            setDataModals(projectValues.private_notes);
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
                          setModalZoomImg(!modalZoomImg);
                          setDataModals(projectValues.view_last_review);
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
                        <div className="pointer points-menu">
                          <div
                            onClick={() =>
                              setMenuFloat(
                                menuFloat === projectValues.id
                                  ? ""
                                  : projectValues.id
                              )
                            }
                          >
                            {Icons("menu_points")}
                          </div>

                          {menuFloat === projectValues.id && (
                            <div className={`menu-float ${projectValues.id} `}>
                              <div
                                className="menu-float-item flex"
                                onClick={() => setMenuFloat("x")}
                              >
                                <p>Más información</p>
                                {Icons("help_circle")}
                              </div>
                              <div
                                className="menu-float-item flex"
                                onClick={() => setMenuFloat("x")}
                              >
                                <p>Compartir</p>
                                {Icons("help_circle")}
                              </div>
                              <div
                                className="menu-float-item flex"
                                onClick={() => setMenuFloat("x")}
                              >
                                <p>Invitar personas</p>
                                {Icons("help_circle")}
                              </div>
                              <div
                                className="menu-float-item flex"
                                onClick={() => setMenuFloat("x")}
                              >
                                <p>Eliminar</p>
                                {Icons("help_circle")}
                              </div>
                            </div>
                          )}
                        </div>
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>

          {modalPrivateNotes && (
            <ModalPrivateNotes close={setModalPrivateNotes} data={dataModals} />
          )}
          {modalZoomImg && (
            <ModalZoomImg close={setModalZoomImg} data={dataModals} />
          )}
          {/* {modalReviews && (
          <ModalReviews close={setModalReviews} data={dataModals} />
        )} */}
        </div>
      )}
    </div>
  );
}

export default View;
