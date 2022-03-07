import React, { useState, useEffect } from "react";
import { Icons } from "../icons";
import PageTitle from "../page-title";
import ModalZoomImg from "../modals/zoom-img";
import "./styles.scss";

function View({
  projectData,
  redirectTo,
  setModalZoomImg,
  modalZoomImg,
  menuTopView,
  setMenuTopView,
  modalData,
  setModalData,
  reviews,
  versionSelect,
  setVersionSelect,
  versionVote,
  setVersionVote,
  id,
  userData,
}) {
  const [selectedImg, setSelectedImg] = useState();

  useEffect(() => {
    if (!selectedImg) {
      return;
    }
    const objectUrl = URL.createObjectURL(selectedImg);

    /* setSelectedImgArray(
      selectedImgArray.filter((item) => item.id !== idSelect)
    );

    setSelectedImgArray((selectedImgArray) => [
      ...selectedImgArray,
      {
        id: idSelect,
        object: objectUrl,
        name: selectedImg.name,
        formData: selectedImg,
      },
    ]); */
  }, [selectedImg /* , idSelect */]);

  const onSelectFile = (e, id) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedImg(undefined);
      return;
    }

    setSelectedImg(e.target.files[0]);
  };

  return (
    <div className="page reviews">
      <PageTitle
        page={"reviews"}
        user={true}
        title={projectData?.values.name_project}
      />

      {/*  {reviews?.version_data?.length >= 1 ||
      reviews?.review_data?.length >= 1 ? ( */}
      <>
        <div className="info-drop flex">
          <div className="info-drop-item flex">
            Versión {versionSelect}
            <div
              onClick={() =>
                setMenuTopView(menuTopView === "version" ? "" : "version")
              }
            >
              {Icons(menuTopView === "version" ? "arrow_up" : "arrow_down")}
            </div>
            {/* {menuTopView === "version" && (
              <div className="menu-float">
                {reviews ? (
                  reviews.review_data.map((review) => (
                    <div
                      className="option-reviews"
                      onClick={() => {
                        setVersionSelect(review.version);
                        setMenuTopView("");
                      }}
                    >
                      Versión {review.version}
                    </div>
                  ))
                ) : (
                  <p>No hay más versiones disponibles</p>
                )}
              </div>
            )} */}
          </div>
          <div className="info-drop-item flex">
            Información del proyecto
            <div
              onClick={() =>
                setMenuTopView(menuTopView === "info" ? "" : "info")
              }
            >
              {Icons(menuTopView === "info" ? "arrow_up" : "arrow_down")}
            </div>
            {menuTopView === "info" && (
              <div className="menu-float">
                <p className="title">Tiempo de entrega</p>
                <p className="text-purple">{projectData.delivery_time}</p>
                <p className="title">Formato de entrega</p>
                <p className="text-purple">{projectData.delivery_format}</p>
                <p className="title">Tamaño</p>
                <p className="text-purple">{projectData.size}</p>
                <p className="title">Archivos editables</p>
                <p className="text-purple">
                  {projectData.editable_files ? "Yes" : "No"}
                </p>
                <p className="title">Impresión</p>
                <p className="text-purple">
                  {projectData.print ? "Yes" : "No"}
                </p>
              </div>
            )}
          </div>
          <div className="info-drop-item flex">
            Revisiones
            <div
              onClick={() =>
                setMenuTopView(menuTopView === "review" ? "" : "review")
              }
            >
              {Icons(menuTopView === "review" ? "arrow_up" : "arrow_down")}
            </div>
            {menuTopView === "review" && (
              <div className="menu-float">
                <div className="reviews-count">
                  Has realizado
                  <span className="text-purple">
                    {" "}
                    {projectData.review} de 4{" "}
                  </span>
                  revisiones
                </div>
              </div>
            )}
          </div>
        </div>

        {reviews?.version_data?.length >= 1 ||
        reviews?.review_data?.length >= 1 ? (
          <>
            <p className="description">
              Haz click sobre la(s) imagen(es) para agrandar, luego arrastra
              para dejar un comentario. Una vez guardas un comentario, éste se
              guardará automáticamente en la plataforma.
            </p>

            <div className="versions-content flex">
              {reviews.review_data
                .filter((filter) => filter.version === versionSelect)[0]
                .version_data?.map((version, index) => (
                  <div key={index} className="version">
                    <div className="version-id">Opción {version.id}</div>
                    <div
                      className={`version-img ${
                        reviews.review_data.filter(
                          (filter) => filter.version === versionSelect
                        )[0].version_data.length >= 2
                          ? "img-2"
                          : "img-1"
                      }`}
                      onClick={() => {
                        setModalData({ id: id, img: version.content });
                        setModalZoomImg(!modalZoomImg);
                      }}
                    >
                      <img src={version.content} alt={version.id} />
                    </div>
                  </div>
                ))}

              {reviews.review_data.filter(
                (filter) => filter.version === versionSelect
              )[0].version_data?.length >= 2 && (
                <div className="versio vote-main">
                  <p>De las anteriores propuestas, ¿Cuál te gusta más?</p>

                  {reviews.review_data
                    .filter((filter) => filter.version === versionSelect)[0]
                    .version_data?.map((version, index) => (
                      <div key={index} className="version-vote flex">
                        <div className="version-vote-id">
                          Opción {version.id}
                        </div>
                        <div className="version-vote-id">
                          <input
                            checked={index === versionVote}
                            type="checkbox"
                            name=""
                            id=""
                            onClick={() => setVersionVote(index)}
                          />
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </div>
          </>
        ) : userData?.rol_id !== 3 ? (
          <div className="message">
            <h3 className="text-purple">No hay revisiones disponibles</h3>
          </div>
        ) : (
          <div className="add-options">
            <label htmlFor={`reference-${id}`} className="button-blue flex">
              {Icons("clip_white")}
              {"Adjuntar"}
            </label>
            <input
              type="file"
              label="Texto a incluir"
              required={false}
              className="input-texarea"
              id={`reference-${id}`}
              onChange={(e) => {
                onSelectFile(e, id);
              }}
            />
            + Agregar
          </div>
        )}

        {modalZoomImg && (
          <ModalZoomImg close={setModalZoomImg} data={modalData} />
        )}
        <div className="footer">
          <p className="footer-desc">
            Si ya realizaste todos tus comentarios, haz click en
            <span className="text-purple"> finalizar revisión </span>
            para notificarle al diseñador.
          </p>
          <div className="buttons flex">
            <div className="button" onClick={() => redirectTo("/")}>
              Atrás
            </div>
            <div className="button" onClick={() => redirectTo("/")}>
              Finalizar revisión
            </div>
          </div>
        </div>
      </>
      {/*  ) : (
        <div className="message">
          <h3 className="text-purple">No hay revisiones disponibles</h3>
        </div>
      )} */}
    </div>
  );
}

export default View;
