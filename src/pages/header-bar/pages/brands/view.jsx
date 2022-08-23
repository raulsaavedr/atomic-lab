import React from "react";
import PageTitle from "../../../page-title";
import "./styles.scss";
import { Icons } from "../../../icons";
import BrandCard from "./components/BrandCard";

function View({ redirectToBrandForm, brands, rol }) {
  return (
    <div className="brands-page page">
      <PageTitle page={"brands-page"} user={true} title="Mis marcas" />
      <div className="description">
        { rol === 1 ?
          "Agrega la información de tu empresa y de la marca. Si tienes otras marcas, las puedes agregar aqui." :
          "Aquí puedes ver la información de las marcas o empresas con las que estas trabajando."
        }

      </div>

      <section className="cards">
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
            <div>
              <span className="tag tag-teal">Perfil de la marca</span>
              {/* <p>Perfil de la marca</p> */}
              <h3 onClick={() => redirectToBrandForm()}>Añadir otra marca</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default View;
