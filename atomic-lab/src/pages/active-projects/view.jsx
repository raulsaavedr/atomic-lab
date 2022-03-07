import React from "react";
import { Icons } from "../icons";
import { ACTIVE_TABLES } from "../constats";
import ModalPrivateNotes from "../modals/private-notes";
import ModalZoomImg from "../modals/zoom-img";
import ModalReviews from "../modals/reviews";
import DesignerProject from "../modals/designers-project";
import PageTitle from "../page-title";
import "./styles.scss";

function View({
  page,
  setModalPrivateNotes,
  modalPrivateNotes,
  dataModals,
  setDataModals,
  modalReviews,
  setModalReviews,
  redirectToStatusProject,
  redirectToReviews,
  modalZoomImg,
  setModalZoomImg,
  menuFloat,
  setMenuFloat,
  navigate,
  redirecToActiveProyects,
  activeProjects,
  redirectTo,
  userData,
  setModalDesignerProject,
  modalDesignerProject,
}) {
  return (
    <div className="page active-projects">
      <PageTitle page={page} user={true} title="Proyectos activos" />

      {activeProjects && activeProjects.length <= 1 ? (
        <div className="message">
          <h3 className="text-purple">No tienes proyectos activos</h3>
          {userData.rol_id !== 3 && (
            <div className="button" onClick={() => navigate("/new-project")}>
              Empezar proyecto
            </div>
          )}
        </div>
      ) : (
        <div className="table-data">
          <table>
            <thead>
              <tr>
                {ACTIVE_TABLES(page).map((item, index) => (
                  <th key={index}>
                    {item.title !== "Opciones" && item.isActive && (
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
              {activeProjects?.map((project, index) => {
                const projectValues =
                  project.values && JSON.parse(project?.values);

                return (
                  <tr key={index}>
                    <td>
                      <p
                        className="pointer"
                        onClick={() =>
                          redirectTo(`/project-detail/${project?.id}`)
                        }
                      >
                        {projectValues?.name_project}
                      </p>
                    </td>
                    <td>
                      <div>
                        <p alt="heart">
                          {Icons("status_check_" + project?.status)}
                        </p>
                        <p
                          className="view-more pointer"
                          onClick={() => redirectToStatusProject(project?.id)}
                        >
                          Ver más...
                        </p>
                      </div>
                    </td>
                    <td>{projectValues?.date_next_review}</td>
                    {page === "home" && (
                      <td>
                        <div
                          className="pointer"
                          onClick={() =>
                            redirectTo(`/more-info/${project?.id}`)
                          }
                        >
                          {Icons("add_plus")}
                        </div>
                      </td>
                    )}
                    {page !== "home" && (
                      <>
                        <td>
                          <div
                            className="pointer"
                            onClick={() => {
                              setModalPrivateNotes(!modalPrivateNotes);
                              setDataModals(
                                projectValues?.private_notes
                                  ? projectValues?.private_notes
                                  : []
                              );
                            }}
                          >
                            <p>{Icons("private_notes")}</p>
                          </div>
                        </td>
                        <td>
                          <div
                            className="pointer"
                            onClick={() => {
                              setModalZoomImg(!modalZoomImg);
                              setDataModals(projectValues?.view_last_review);
                            }}
                          >
                            {Icons("last_version")}
                          </div>
                        </td>
                        <td>
                          <div className="review flex">
                            {project?.review} de 4
                            <div
                              className="pointer flex"
                              onClick={() => {
                                setModalReviews(!modalReviews);
                                setDataModals(project?.review);
                              }}
                            >
                              {Icons("add_plus")}
                            </div>
                          </div>
                        </td>
                        <td>
                          <div
                            className="pointer"
                            onClick={() => redirectToReviews(project?.id)}
                          >
                            {Icons("review")}
                          </div>
                        </td>
                        <td>
                          <div
                            onClick={() => {
                              setModalDesignerProject(!modalDesignerProject);
                              setDataModals({ project_id: project?.id });
                            }}
                            className="pointer"
                          >
                            Ver
                          </div>
                        </td>

                        <td>
                          <div className="pointer points-menu">
                            <div
                              onClick={() =>
                                setMenuFloat(
                                  menuFloat === project?.id ? "" : project?.id
                                )
                              }
                            >
                              {Icons("menu_points")}
                            </div>

                            {menuFloat === project?.id && (
                              <div className={`menu-float ${project?.id} `}>
                                <div
                                  className="menu-float-item flex"
                                  onClick={() =>
                                    redirectTo(`/more-info/${project?.id}`)
                                  }
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
                      </>
                    )}

                    {page === "home" && (
                      <>
                        <td>
                          <div
                            className="pointer"
                            onClick={() => redirectToReviews(project?.id)}
                          >
                            {Icons("retro_review")}
                          </div>
                        </td>
                        <td>
                          <div
                            className="view-more pointer"
                            onClick={() => redirecToActiveProyects()}
                          >
                            Ver más...
                          </div>
                        </td>
                      </>
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
          {modalReviews && (
            <ModalReviews close={setModalReviews} data={dataModals} />
          )}
          {modalDesignerProject && (
            <DesignerProject
              close={setModalDesignerProject}
              data={dataModals}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default View;
