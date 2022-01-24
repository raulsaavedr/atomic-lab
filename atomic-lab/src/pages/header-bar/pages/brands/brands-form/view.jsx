import React from "react";
import PageTitle from "../../../../page-title";
import {
  USER_DATA,
  FORM_INPUTS_BRANDS,
  FROM_BRAND_TABLES,
} from "../../../../constats";
import "./styles.scss";
import { Icons } from "../../../../icons";

function View({ redirectToBrandForm }) {
  return (
    <div className="brands-form-page page">
      <PageTitle page={"brands-form-page"} user={true} title="Mis marcas" />

      <div className="description">Datos de la compañia/organización</div>

      <section className="content ">
        {FORM_INPUTS_BRANDS.map((input) => (
          <div className={`item-input ${input.options && input.className}`}>
            <label for={input.id}>{input.label} </label>

            {input.type && (
              <div className="flex">
                {input.type !== "textarea" && (
                  <input {...input} id={input.id} />
                )}
                {input.type === "textarea" && (
                  <textarea {...input} id={input.id} />
                )}
                {Icons("edit")}
              </div>
            )}

            {input?.options?.map((option) => (
              <div className={input.className}>
                <div className="flex-icon flex">
                  {option.icon && Icons(option.id)}{" "}
                  <label for={option.id}>{option.label} </label>
                </div>
                <div className="flex">
                  <input {...option} id={option.id} />
                  {option.type !== "checkbox" && Icons("edit")}
                </div>
              </div>
            ))}
          </div>
        ))}

        <table className="table">
          <tbody>
            {FROM_BRAND_TABLES.map((item) => (
              <tr>
                <td>{item.title}</td>
                <td>
                  <div className="flex">{Icons("upload_circle")} Cargar</div>
                </td>
                <td>
                  <div className="flex">
                    {Icons("download_circle")} Descargar
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="footer">
        <section className="section-buttons flex">
          <div className="button">Atrás</div>
          <div className="button">Guardar cambios</div>
        </section>
      </section>
    </div>
  );
}

export default View;
