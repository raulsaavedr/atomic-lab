import React from "react";
import PageTitle from "../page-title";
import ModalZoomImg from "../modals/zoom-img";
import "./styles.scss";

function View({
  filterProject,
  projectValues,
  userData,
  navigate,
  designers,
  modalZoomImg,
  setModalZoomImg,
  dataModals,
  setDataModals
}) {

  return (
    <div className="page all-project-details">
      <PageTitle user={true} title={projectValues?.name_project} />
      <p>
        A continuación te presentamos la información que nos suministraste sobre
        el proyecto.
      </p>
      <div className="table-row">
        <table className="table-column">
          <tbody>
            <tr>
              <th className="title">Dueño del Proyecto</th>
              <td>
                {userData.name} {userData.last_name}
              </td>
            </tr>
            <tr>
              <th className="title">Fecha de inicio</th>
              <td>{filterProject?.updated_at}</td>
            </tr>
            <tr>
              <th className="title">Tipo de proyecto</th>
              <td>{projectValues?.project_type}</td>
            </tr>
            <tr>
              <th className="title">Tipo de publicación</th>
              {/* Capitalize the type of publication */}
              <td>{
                projectValues?.type_publication?.charAt(0).toUpperCase() +
                projectValues?.type_publication?.slice(1)
              }</td>
            </tr>
            <tr>
              <th className="title">Público objetivo</th>
              <td>{projectValues?.public_goal}</td>
            </tr>
            <tr>
              <th className="title">Referencias</th>
              {/* TODO REFERENCES IS AN ARRAY projectValues?.references */}
              <td>
                {
                  projectValues?.references.map((reference, index) => (
                    <div className="table-text flex">
                      <p>#{index + 1} {reference.name_file?.split("images/")[1]}</p>
                      <p>{reference.text}</p>
                    </div>
                  ))
                }
              </td>
            </tr>
            <tr>
              <th className="title">Imagen a incluir</th>
              {/* TODO IMGS IS AN ARRAY projectValues?.img_array*/}
              <td>{"-"}</td>
            </tr>
            <tr>
              <th className="title">Libertad diseñador</th>
              <td>{projectValues?.designer_freedom || "Ninguna"}</td>
            </tr>
            <tr>
              <th className="title">Tiempo de entrega</th>
              <td>{projectValues?.tiempo_entrega || "-"}</td>
            </tr>
            <tr>
              <th className="title">Revisiones</th>
              <td>{projectValues?.revisiones || "-"}</td>
            </tr>
            <tr>
              <th className="title">Costo base</th>
              <td>$ {projectValues?.costo_base}</td>
            </tr>
          </tbody>
        </table>
        <table className="table-column">
          <tbody>
            <tr>
              <th className="title">Diseñador</th>
              <td>
                {designers.length >= 1
                  ? designers.map((designer) => <p>{designer.name}</p>)
                  : "No asignado"}
              </td>
            </tr>
            <tr>
              <th className="title">Marca</th>
              <td>{projectValues?.brand_select}</td>
            </tr>
            <tr>
              <th className="title">Red social</th>
              <td>{projectValues?.social_network}</td>
            </tr>
            <tr>
              <th className="title">Paleta de colores</th>
              <td>{projectValues?.palete_colors}</td>
            </tr>
            <tr>
              <th className="title">Idea a desarrollar</th>
              <td>{projectValues?.idea_post}</td>
            </tr>
            <tr>
              <th className="title">Texto a incluir</th>
              <td>{projectValues?.included_text}</td>
            </tr>
            <tr>
              <th className="title">Formato de entrega</th>
              <td>{projectValues?.formato_entrega}</td>
            </tr>
            <tr>
              <th className="title">Tamaño</th>
              <td>{projectValues["tamaño"]}</td>
            </tr>
            <tr>
              <th className="title">Archivos editables</th>
              <td>{projectValues?.archivos_editables}</td>
            </tr>
            <tr>
              <th className="title">Fecha próx. revisión</th>
              <td>{filterProject?.review_date || "No programada"}</td>
            </tr>
            <tr>
              <th className="title">Costo total</th>
              <td>$ {projectValues?.project_price}</td>
            </tr>

          </tbody>
        </table>
      </div>
      {/* <div className="project-detail-content flex">
        <div className="value post-dat-all flex" key={"1245dsf5asd511as22"} >
          <p className="title">Post</p>
          <div className="post-container">
            {projectValues?.post?.map((item, index) => (
              <div
                className="post-data"
                key={item.id}
                onClick={() => {
                  setModalZoomImg(!modalZoomImg);
                  setDataModals({
                    type: "normal",
                    img: item.name_img,
                  });
                }}
              >
                <p>Objetive: {item.objetive}</p>
                <p>Text: {item.text}</p>
                <div className="img-container">
                  <img src={item.name_img} alt={index} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
      <section className="section-buttons flex">
        <div className="button" onClick={() => navigate(-1, { replace: true })}>
          Atrás
        </div>
      </section>

      {
        modalZoomImg && (
          <ModalZoomImg close={setModalZoomImg} data={dataModals} />
        )
      }
    </div >
  );
}

export default View;
