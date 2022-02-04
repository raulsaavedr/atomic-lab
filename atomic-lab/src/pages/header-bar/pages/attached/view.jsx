import React from "react";
import PageTitle from "../../../page-title";
import "./styles.scss";
import { Icons } from "../../../icons";

function View({ data }) {
  const dataAttached = data && data.attached ? data.attached : [];

  return (
    <div className="attached-page page">
      <PageTitle page={"attached-page"} user={true} title="Mis adjuntos" />
      <div className="table-data">
        <table>
          <thead>
            <tr>
              <td>Nombre</td>
              <td>Tipo</td>
              <td>Tamaño</td>
              <td>Descargar</td>
              <td>Eliminar</td>
            </tr>
          </thead>
          <tbody>
            {dataAttached.map((attached, index) => (
              <tr key={index}>
                <td>{attached.filename}</td>
                <td>{attached.type_file}</td>
                <td>{attached.size}</td>
                <td>{Icons("download")}</td>
                <td>{Icons("delete_circle")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <section className="footer">
        <section className="section-buttons flex">
          <div className="button">Guardar cambios</div>
        </section>
      </section>
    </div>
  );
}

export default View;
