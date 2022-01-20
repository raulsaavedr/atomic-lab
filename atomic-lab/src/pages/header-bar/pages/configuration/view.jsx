import React from "react";
import PageTitle from "../../../page-title";
import "./styles.scss";
import { Icons } from "../../../icons";

function View({
  uploadVersion,
  setUploadVersion,
  noCommentsVersion,
  setNoCommentsVersion,
  comunicationWeek,
  setComunicationWeek,
  news,
  setNews,
}) {
  return (
    <div className="configuration-page page">
      <PageTitle
        page={"brands-form-page"}
        user={true}
        title="Mi configuración"
      />

      <section className="content ">
        <div className="lenguaje flex">
          <div className="title">Idioma</div>
          <select
            name="languaje_select"
            id="languaje_select"
            className="select"
          >
            <option value="español">Español</option>
            <option value="ingles">Ingles</option>
          </select>
        </div>

        <p>Preferencias de notificaciones por email</p>

        <table className="table">
          <tbody>
            <tr>
              <td>
                <div className="text flex">
                  {Icons("notification_circle")}
                  Notificarme cuando el diseñador sube una versión del proyecto
                </div>
              </td>
              <td>
                <div
                  className={`switch ${uploadVersion ? "active" : "inactive"} `}
                >
                  <div
                    className={`switch-toogle ${
                      uploadVersion ? "active" : "inactive"
                    } `}
                    onClick={() => setUploadVersion(!uploadVersion)}
                  ></div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="text flex">
                  {Icons("notification_circle")}
                  Notificarme cuando no he realizado los comentarios/anotaciones
                </div>
              </td>
              <td>
                <div
                  className={`switch ${
                    noCommentsVersion ? "active" : "inactive"
                  } `}
                >
                  <div
                    className={`switch-toogle ${
                      noCommentsVersion ? "active" : "inactive"
                    } `}
                    onClick={() => setNoCommentsVersion(!noCommentsVersion)}
                  ></div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="text flex">
                  {Icons("notification_circle")}Comunicaciones semanales
                </div>
              </td>
              <td>
                <div
                  className={`switch ${
                    comunicationWeek ? "active" : "inactive"
                  } `}
                >
                  <div
                    className={`switch-toogle ${
                      comunicationWeek ? "active" : "inactive"
                    } `}
                    onClick={() => setComunicationWeek(!comunicationWeek)}
                  ></div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="text flex">
                  {Icons("notification_circle")}Novedades
                </div>
              </td>
              <td>
                <div className={`switch ${news ? "active" : "inactive"} `}>
                  <div
                    className={`switch-toogle ${news ? "active" : "inactive"} `}
                    onClick={() => setNews(!news)}
                  ></div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="footer">
        <section className="section-buttons flex">
          <div className="button">Guardar cambios</div>
        </section>
      </section>
    </div>
  );
}

export default View;
