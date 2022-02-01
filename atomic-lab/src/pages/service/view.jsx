import React, { useContext } from "react";
import CreateFormContext from "../../create-form-context";
import { USER_DATA, TYPE_PUBLICATION_DATA } from "../constats";
import PageTitle from "../page-title";
import parse from "html-react-parser";
import ModalMessage from "../modals/message";

import { Icons } from "../icons";
import "./styles.scss";

function View({
  serviceData,
  typePublication,
  setTypePublication,
  typeManual,
  setTypeManual,
  redirectToHome,
  modalPriceTotal,
  redirectToForm,
  selectType,
  setSelectType,
  modalMessage,
  setModalMessage,
  socialNetwork,
  setSocialNetwork,
}) {
  const data = useContext(CreateFormContext)[0];
  const [formData, setFormData] = useContext(CreateFormContext);

  console.log("data", data);

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

      {serviceData?.types_manuals && (
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
      )}

      <section className="section-brand">
        <h3>1. ¿Cuál marca vas a utilizar?</h3>

        <select
          name="brand_select"
          id="brand_select"
          className="select"
          onChange={(e) =>
            setFormData({ ...formData, brand_select: e.target.value })
          }
        >
          <option disabled selected>
            Selecciona una opción
          </option>
          {USER_DATA.brands.map((brand, index) => (
            <option key={index} value={brand.value}>
              {brand.name}
            </option>
          ))}
        </select>
      </section>

      <section className="section-publication-type">
        <h3>2. {serviceData?.publication_type?.title}</h3>

        <div className="type-check flex">
          {serviceData?.publication_type?.options.map((option, index) => (
            <label className="flex">
              <div className="circle-check">
                <input
                  checked={typePublication === option}
                  key={index}
                  type="checkbox"
                  id="p_type"
                  value={option}
                  onClick={() => {
                    setTypePublication(option);
                    setFormData({
                      ...formData,
                      type_publication: option
                        .replaceAll(" ", "-")
                        .toLowerCase(),
                    });
                  }}
                />
              </div>
              {option}
            </label>
          ))}
        </div>

        {typePublication !== "" && (
          <>
            <p className="type-check-desc">
              Selecciona el tipo de {typePublication.toLowerCase()} que
              nesecitas
            </p>
            <div className="type-cards flex">
              {TYPE_PUBLICATION_DATA[typePublication].options.map((option) => (
                <div
                  className={`type-card flex ${
                    selectType === option && "active"
                  }`}
                  onClick={() => {
                    setSelectType(selectType === option ? "" : option);
                    setFormData({
                      ...formData,
                      type_post: option.replaceAll(" ", "-").toLowerCase(),
                    });
                  }}
                >
                  {option}

                  {Icons("img_circle")}
                </div>
              ))}
            </div>
          </>
        )}
      </section>

      <section className="section-social-network">
        <h3>3. {serviceData?.social_network?.title}</h3>

        <div className="social-network-check flex">
          {serviceData?.social_network?.options.map((option, index) => (
            <label className="flex">
              <div className="circle-check">
                <input
                  checked={socialNetwork === option.name}
                  disabled={option.status === "inactive"}
                  key={index}
                  type="checkbox"
                  id="s_net"
                  value={option.name}
                  onChange={(e) => {
                    setSocialNetwork(e.target.value);
                    setFormData({
                      ...formData,
                      social_network: e.target.value,
                    });
                  }}
                />
              </div>
              <div>
                <p>{option.name}</p>
                <p>{option.status === "inactive" ? "(próximamente)" : ""}</p>
              </div>
            </label>
          ))}
        </div>
      </section>

      <section className="section-buttons flex">
        <div className="button" onClick={() => redirectToHome()}>
          Atrás
        </div>

        {!data.brand_select ||
        !data.type_publication ||
        !data.type_post ||
        !data.social_network ? (
          <div className="button-gray">Continuar</div>
        ) : (
          <div className="button" onClick={() => redirectToForm()}>
            Continuar
          </div>
        )}
      </section>

      {modalMessage && (
        <ModalMessage
          next={setModalMessage}
          message="Una vez empieces, la información ingresada se guardará automáticamente en tus borradores"
        />
      )}
    </div>
  );
}

export default View;
