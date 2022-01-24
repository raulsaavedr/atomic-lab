import React from "react";
import PageTitle from "../../../page-title";
import { USER_DATA } from "../../../constats";
import "./styles.scss";
import { Icons } from "../../../icons";

function View({ redirectToBrandForm }) {
  return (
    <div className="brands-page page">
      <PageTitle page={"brands-page"} user={true} title="Mis marcas" />

      <div className="description">Compañía/organización</div>

      <section className="content flex">
        {USER_DATA.brands.map((brand) => (
          <div className="brand-card" onClick={() => redirectToBrandForm()}>
            <div className="card-content">
              <p>Perfil de la marca</p>

              <p>imagen ?</p>
              <p>{brand.name}</p>
            </div>
            <div className="footer">
              {brand.predeterminate && <p>Predeterminada</p>}
            </div>
          </div>
        ))}
        <div className="brand-card" onClick={() => redirectToBrandForm()}>
          <div className="card-content">
            <p>Perfil de la marca</p>

            {Icons("add_brand")}

            <p>Añadir otra marca</p>
          </div>
          <div className="footer"></div>
        </div>
      </section>
    </div>
  );
}

export default View;
