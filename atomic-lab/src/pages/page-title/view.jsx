import React from "react";
import { Icons } from "../icons";
import "./styles.scss";

function View({ page, user, title, price, modalPriceTotal }) {
  return (
    <>
      {page !== "home" && user && <p>Hola Usuario,</p>}
      <div className="page-title flex">
        <div className="title">
          {page === "home" ? <h2>{title}</h2> : <h1>{title}</h1>}
        </div>

        <div className="section-header-rigth flex">
          {price && (
            <div className="section-header-credit flex">
              <div className="icon-credit">icon</div>
              <div className="credit-value">$ {price[0]?.price} monedas</div>

              <div className="section-header-credit-modal">
                {price.map((price) => (
                  <div className="price-option flex">
                    <p>{price.name}</p>
                    <p>{price.price}</p>
                  </div>
                ))}

                <div className="total flex">
                  <p>Total</p>
                  <div className="total-icon flex">
                    <div className="icon-credit">x</div>
                    <div className="credit-total">
                      $ {modalPriceTotal} Monedas
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {page === "team-page" && (
            <div className="button-blue">Invitar personas</div>
          )}

          {page !== "home" && (
            <div className="section-header-help flex pointer">
              <div className="icon-help flex">{Icons("help")}</div>
              <div className="help-text">Ayuda</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default View;
