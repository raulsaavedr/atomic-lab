import React from "react";
import PageTitle from "../../../page-title";
import "./styles.scss";
import { Icons } from "../../../icons";
import BrandCard from "./components/BrandCard";

function View({ redirectToBrandForm, brands }) {
  return (
    <div className="brands-page page">
      <PageTitle page={"brands-page"} user={true} title="Mis marcas" />
      <div className="description">
        Agrega la información de tu empresa y de la marca. Si tienes otras
        marcas, las puedes agregar aqui.
      </div>

      <section className="cards">
        {console.log(brands)}
        {brands?.map((brand, index) => (
          <BrandCard
            key={index}
            brand={brand}
            redirectToBrandForm={redirectToBrandForm}
          />
        ))
        }
        <div className="card">
          <div className="card-header plus-icon" onClick={() => redirectToBrandForm()}>
            {Icons("add_brand")}
          </div>
          <div className="card-body">
            <span className="tag tag-teal">Perfil de la marca</span>
            {/* <p>Perfil de la marca</p> */}
            <h3 onClick={() => redirectToBrandForm()}>Añadir otra marca</h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default View;
