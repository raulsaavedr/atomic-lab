import React from "react";
import PageTitle from "../../../page-title";
import "./styles.scss";
import { Icons } from "../../../icons";

function View({ redirectToBrandForm, brands }) {
  return (
    <div className="brands-page page">
      <PageTitle page={"brands-page"} user={true} title="Mis marcas" />
      <div className="description">
        Agrega la información de tu empresa y de la marca. Si tienes otras
        marcas, las puedes agregar aqui.
      </div>

      <section className="content flex">
        {brands?.map((brand, index) => (
          <div
            key={index}
            className="brand-card"
            onClick={() => redirectToBrandForm(brand.id)}
          >
            <div className="card-content">
              <p>Perfil de la marca</p>

              <p>
                {brand.url_image ? (
                  <img src={brand.url_image} alt={brand.url_image} />
                ) : (
                  Icons("icon_img_post")
                )}
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
