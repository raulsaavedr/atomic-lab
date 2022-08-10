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
          // <div
          //   key={index}
          //   className="card"
          //   onClick={() => redirectToBrandForm(brand.id)}
          // >
          //   <div
          //     className={brand.url_image.endsWith("svg") ?
          //       "card-header svg-img" : "card-header normal-img"}
          //   >
          //     {brand.url_image ? (
          //       // <ImageWithFallback
          //       //   fallback={icon_img_post}
          //       //   src={brand.url_image}
          //       //   alt={brand.url_image}
          //       // />
          //       console.log("fixing...")
          //     ) : (
          //       Icons("icon_img_post")
          //     )}
          //   </div>
          //   <div className="card-body">
          //     {/* <p>Perfil de la marca</p> */}
          //     {brand.industry ?
          //       <span className="tag tag-teal">{brand.industry}</span> :
          //       undefined
          //     }
          //     <h3>{brand.name}</h3>

          //   </div>
          // </div>
          <BrandCard
            key={index}
            brand={brand}
            redirectToBrandForm={redirectToBrandForm}
          />
        ))
        }
        <div className="card" onClick={() => redirectToBrandForm()}>
          <div className="card-header plus-icon">
            {Icons("add_brand")}
          </div>
          <div className="card-body">
            {/* <p>Perfil de la marca</p> */}
            <h3>Añadir otra marca</h3>
            {/* <span className="tag">This is tag</span> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default View;
