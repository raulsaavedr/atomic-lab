import React from "react";
import { USER_DATA, TYPE_PUBLICATION_DATA } from "../constats";
import PageTitle from "../page-title";
import parse from "html-react-parser";
import "./styles.scss";
import { Icons } from "../icons";

function View({
  serviceData,
  typePublication,
  setTypePublication,
  typeManual,
  setTypeManual,
  redirectToHome,
  modalPriceTotal,
  redirectToForm,
}) {
  return (
    <div className="page service-page">
      <PageTitle
        title={serviceData?.title}
        price={serviceData?.price?.basic}
        modalPriceTotal={modalPriceTotal}
      />

      <section className="section-image">
        {Icons(`header_${serviceData?.title.replace(" ", "_").toLowerCase()}`)}
      </section>
      <section className="section-description">
        {parse(serviceData?.description_page)}
      </section>

      <section className="section-specs">
        {serviceData?.specs?.map((spec, index) => (
          <div className="section-specs-spec" key={index}>
            <h3>{spec.title}</h3>
            <ul>
              {spec.options.map((option) => (
                <li>{option}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="section-cards-manuals flex">
        {serviceData?.types_manuals?.map((type, index) => (
          <div key={index} className="card-manual">
            <div className="title-section flex">
              <div className="title">{type.title}</div>
              <div className="check">
                <input
                  checked={typeManual === type.title}
                  key={index}
                  type="checkbox"
                  id="m_type"
                  value={type.title}
                  onClick={() => setTypeManual(type.title)}
                />
              </div>
            </div>

            <div className="content-section">
              {type.options.map((option) => (
                <p className="flex">
                  <div className="icon-check-purple">x</div>
                  <div className="option-value">{option}</div>
                </p>
              ))}
            </div>

            <div className="footer-section flex">
              <div className="icon-credit">X</div>
              <div className="credit-value">$ {type.price} Monedas</div>
            </div>
          </div>
        ))}
      </section>

      <section className="section-brand">
        <h3>¿Cuál marca vas a utilizar?</h3>

        <select name="brand_select" id="brand_select">
          {USER_DATA.brands.map((brand, index) => (
            <option key={index} value={brand.value}>
              {brand.name}
            </option>
          ))}
        </select>
      </section>

      <section className="section-publication-type">
        <h3>{serviceData?.publication_type?.title}</h3>

        <div className="type-check flex">
          {serviceData?.publication_type?.options.map((option, index) => (
            <label>
              <input
                checked={typePublication === option}
                key={index}
                type="checkbox"
                id="p_type"
                value={option}
                onClick={() => setTypePublication(option)}
              />
              {option}
            </label>
          ))}
        </div>

        {typePublication !== "" && (
          <>
            <p>
              Selecciona el tipo de {typePublication.toLowerCase()} que
              nesecitas
            </p>
            <div className="type-cards flex">
              {TYPE_PUBLICATION_DATA[typePublication].options.map((option) => (
                <div className="type-card flex">{option}</div>
              ))}
            </div>
          </>
        )}
      </section>

      <section className="section-social-network">
        <h3>{serviceData?.social_network?.title}</h3>

        <div className="social-network-check flex">
          {serviceData?.social_network?.options.map((option, index) => (
            <label>
              <input
                disabled={option.status === "inactive"}
                key={index}
                type="checkbox"
                id="s_net"
                value={option.name}
              />

              {`${option.name} ${
                option.status === "inactive" && "(próximamente)"
              }`}
            </label>
          ))}
        </div>
      </section>

      <section className="section-buttons flex">
        <div className="button" onClick={() => redirectToHome()}>
          Atrás
        </div>
        <div className="button" onClick={() => redirectToForm()}>
          Continuar
        </div>
      </section>
    </div>
  );
}

export default View;
