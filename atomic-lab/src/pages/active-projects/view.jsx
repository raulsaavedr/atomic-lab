import React from "react";
import { Icons } from "../icons";
import { USER_DATA, ACTIVE_TABLES } from "../constats";
import ModalPrivateNotes from "../modals/private-notes";
import ModalZoomImg from "../modals/zoom-img";
import ModalReviews from "../modals/reviews";
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
}) {
  return (
    <div className="page active-projects">
      <PageTitle page={page} user={true} title="Proyectos activos" />
      <div className="table-data">
        <table>
          <thead>
            <tr>
              {ACTIVE_TABLES(page).map((item) => (
                <th>
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
            {USER_DATA.active_projects.map((project) => (
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
                <td>{project.date_next_review}</td>
                {page === "home" && (
                  <td>
                    <div className="pointer">{Icons("add_plus")}</div>
                  </td>
                )}
                {page !== "home" && (
                  <>
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
                    <td>
                      <div
                        className="pointer"
                        onClick={() => {
                          setModalZoomImg(!modalZoomImg);
                          setDataModals(project.view_last_review);
                        }}
                      >
                        {Icons("last_version")}
                      </div>
                    </td>
                    <td>
                      <div className="review flex">
                        {project.review} de 4
                        <div
                          className="pointer flex"
                          onClick={() => {
                            setModalReviews(!modalReviews);
                            setDataModals(project.review);
                          }}
                        >
                          {Icons("add_plus")}
                        </div>
                      </div>
                    </td>

                    <td>
                      <div
                        className="pointer"
                        onClick={() => redirectToReviews(project.id)}
                      >
                        {Icons("review")}
                      </div>
                    </td>
                    <td>
                      <div className="pointer points-menu">
                        <div
                          onClick={() =>
                            setMenuFloat(
                              menuFloat === project.id ? "" : project.id
                            )
                          }
                        >
                          {Icons("menu_points")}
                        </div>

                        {menuFloat === project.id && (
                          <div className={`menu-float ${project.id} `}>
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
                  </>
                )}

                {page === "home" && (
                  <>
                    <td>
                      <div
                        className="pointer"
                        onClick={() => redirectToReviews(project.id)}
                      >
                        {Icons("retro_review")}
                      </div>
                    </td>
                    <td>
                      <div className="view-more pointer">Ver más...</div>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {modalPrivateNotes && (
        <ModalPrivateNotes close={setModalPrivateNotes} data={dataModals} />
      )}
      {modalZoomImg && (
        <ModalZoomImg close={setModalZoomImg} data={dataModals} />
      )}
      {modalReviews && (
        <ModalReviews close={setModalReviews} data={dataModals} />
      )}
    </div>
  );
}

export default View;
