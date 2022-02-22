import React from "react";
import PageTitle from "../../../../page-title";
import { FORM_INPUTS_BRANDS, FROM_BRAND_TABLES } from "../../../../constats";
import "./styles.scss";
import { Icons } from "../../../../icons";

function View({ id, redirectTo, dataBrand, onSubmit, handleSubmit, register }) {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="brands-form-page page">
        <PageTitle
          page={"brands-form-page"}
          user={true}
          title={id ? "Editar marca" : "Crear marca"}
        />

        <div className="description">Datos de la compañia/organización</div>

        <section className="content ">
          {FORM_INPUTS_BRANDS.map((input, index) => (
            <div
              key={index}
              className={`item-input ${input.options && input.className}`}
            >
              <label htmlFor={input.id}>{input.label} </label>

              {input.type && (
                <div className="flex">
                  {input.type !== "textarea" && (
                    <input {...input} id={input.id} {...register(input.id)} />
                  )}
                  {input.type === "textarea" && (
                    <textarea
                      {...input}
                      id={input.id}
                      {...register(input.id)}
                    />
                  )}
                  {Icons("edit")}
                </div>
              )}

              {input?.options?.map((option, index) => (
                <div key={index} className={input.className}>
                  <div className="flex-icon flex">
                    {option.icon && Icons(option.id)}{" "}
                    <label htmlFor={option.id}>{option.label} </label>
                  </div>
                  <div className="flex">
                    <input
                      {...option}
                      id={option.id}
                      checked={
                        option.type === "checkbox" &&
                        id &&
                        dataBrand["offers"] === option.id &&
                        true
                      }
                      {...register(option.id)}
                    />

                    {option.type !== "checkbox" && Icons("edit")}
                  </div>
                </div>
              ))}
            </div>
          ))}

          <table className="table">
            <tbody>
              {FROM_BRAND_TABLES.map((item, index) => (
                <tr key={index}>
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
            <div className="button" onClick={() => redirectTo("/brands")}>
              Atrás
            </div>
            <input className="button" type="submit" value={"Guardar Cambios"} />
          </section>
        </section>
      </div>
    </form>
  );
}

export default View;
