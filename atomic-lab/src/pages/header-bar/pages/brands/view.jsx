import React from "react";
import PageTitle from "../../../page-title";
import "./styles.scss";
import { Icons } from "../../../icons";

function View({ redirectToBrandForm, data }) {
  const dataBrand = data && data.brands ? data.brands : [];

  return (
    <div className="brands-page page">
      <PageTitle page={"brands-page"} user={true} title="Mis marcas" />

      <div className="description">Compañía/organización</div>

      <section className="content flex">
        {dataBrand.map((brand, index) => (
          <div
            key={index}
            className="brand-card"
            onClick={() => redirectToBrandForm(brand.id)}
          >
            <div className="card-content">
              <p>Perfil de la marca</p>

              <p>
                <img src={brand.filename_logo} alt={brand.filename_logo} />
              </p>
              <p>{brand.name}</p>
            </div>
            <div className="footer">
              {brand.predeterminate === 1 && <p>Predeterminada</p>}
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
