import React, { useState } from "react";
import PageTitle from "../../../page-title";
import { Icons } from "../../../icons";
import { FORM_INPUTS, USER_DATA } from "../../../constats";
import "../styles.scss";
import "./styles.scss";

function View({ redirectToSelection }) {
  const [libertyLevel, setLibertyLevel] = useState("");

  return (
    <div className="summary-page page">
      <div className="step flex">{Icons("step_summary")}</div>

      <PageTitle
        title={"Revisión del resumen"}
        /* price={serviceData?.price?.basic}
    modalPriceTotal={modalPriceTotal} */
      />

      <section className="description">
        <p>A continuación te mostramos un resumen de tu requerimiento.</p>
        <p>
          Por favor verifica cada punto y cuando estés listo haz click en
          <span className="text-purple"> Iniciar proyecto</span>, de lo
          contrario realiza los ajustes necesarios.
        </p>
      </section>

      <section className="content">
        <div className="info">
          <div className="row">
            <div className="title">Marca</div>
            <div className="value">
              <select name="brand_select" id="brand_select" className="select">
                {USER_DATA.brands.map((brand, index) => (
                  <option key={index} value={brand.value}>
                    {brand.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="row">
            <div className="title">Post</div>
            <div className="value">?</div>
          </div>
          <div className="row">
            <div className="title">Redes Sociales</div>
            <div className="value">?</div>
          </div>
          <div className="row">
            <div className="title">Formulario {Icons("edit")}</div>
            <div className="value">?</div>
            <div className="more text-purple">Ver más...</div>
          </div>
          <div className="row">
            <div className="title">Selección {Icons("edit")}</div>
            <div className="value">?</div>
            <div className="more text-purple">Ver más...</div>
          </div>
        </div>

        <div className="liberty flex">
          <p className="flex">
            ¿Qué tanta libertad quieres que tenga el diseñador en tu proyecto
            basado en su experiencia, conocimiento y criterio?
            {Icons("help_circle")}
          </p>

          <div className="vote-main">
            <div className="vote flex">
              <div className="section">
                <div
                  className={`circle none ${
                    libertyLevel === "none" && "active"
                  }`}
                  onClick={() => setLibertyLevel("none")}
                ></div>
                <p>Ninguna</p>
              </div>
              <div className="section">
                <div
                  className={`circle ${libertyLevel === "medium" && "active"}`}
                  onClick={() => setLibertyLevel("medium")}
                ></div>
                <p>Media</p>
              </div>
              <div className="section">
                <div
                  className={`circle ${libertyLevel === "high" && "active"}`}
                  onClick={() => setLibertyLevel("high")}
                ></div>
                <p>Mucha</p>
              </div>
            </div>
            <div className="line-back"></div>
          </div>
        </div>

        <table>
          {/* <thead>
            <tr>
        
                <th>
                 
                </th>
       
            </tr>
          </thead> */}
          <tbody>
            <tr>
              <td>Costo base del proyecto</td>
              <td>$120</td>
              <td>
                <select
                  name="brand_select"
                  id="brand_select"
                  className="select"
                >
                  {USER_DATA.brands.map((brand, index) => (
                    <option key={index} value={brand.value}>
                      {brand.name}
                    </option>
                  ))}
                </select>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>Tiempo de entrega</td>
              <td>$120</td>
              <td>
                <select
                  name="brand_select"
                  id="brand_select"
                  className="select"
                >
                  {USER_DATA.brands.map((brand, index) => (
                    <option key={index} value={brand.value}>
                      {brand.name}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <div className="more text-purple">
                  Tiempo de entrega estimado (1ra versión): martes, 28 de Sept.
                  - miércoles 30 de Sept.{Icons("help_circle")}
                </div>
              </td>
            </tr>
            <tr>
              <td>Formato de entrega</td>
              <td>$120</td>
              <td>
                <select
                  name="brand_select"
                  id="brand_select"
                  className="select"
                >
                  {USER_DATA.brands.map((brand, index) => (
                    <option key={index} value={brand.value}>
                      {brand.name}
                    </option>
                  ))}
                </select>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>Revisiones</td>
              <td>$120</td>
              <td>
                <select
                  name="brand_select"
                  id="brand_select"
                  className="select"
                >
                  {USER_DATA.brands.map((brand, index) => (
                    <option key={index} value={brand.value}>
                      {brand.name}
                    </option>
                  ))}
                </select>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>Tamaño</td>
              <td>$120</td>
              <td>
                <select
                  name="brand_select"
                  id="brand_select"
                  className="select"
                >
                  {USER_DATA.brands.map((brand, index) => (
                    <option key={index} value={brand.value}>
                      {brand.name}
                    </option>
                  ))}
                </select>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>Archivos editables</td>
              <td>$120</td>
              <td>
                <select
                  name="brand_select"
                  id="brand_select"
                  className="select"
                >
                  {USER_DATA.brands.map((brand, index) => (
                    <option key={index} value={brand.value}>
                      {brand.name}
                    </option>
                  ))}
                </select>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <div className="more text-purple">Total</div>
              </td>
              <td className="credits flex">{Icons("credits")} $120 Monedas</td>
              <td>
                <div
                  className="button-blue flex" /* onClick={() => redirectToService()} */
                >
                  Comprar
                </div>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="footer">
        <section className="section-buttons flex">
          <div className="button" onClick={() => redirectToSelection()}>
            Atrás
          </div>
          <div className="button" /* onClick={() => redirectToSummary()} */>
            Iniciar proyecto
          </div>
        </section>
      </section>
    </div>
  );
}

export default View;
