import React from "react";
import PageTitle from "../../../page-title";
import "./styles.scss";
import { USER_DATA } from "../../../constats";
import { Icons } from "../../../icons";

function View({}) {
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
            {USER_DATA.attached.map((attached) => (
              <tr>
                <td>{attached.name}</td>
                <td>{attached.type}</td>
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
