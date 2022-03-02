import React from "react";
import ReactiveButton from "reactive-button";

import { METHOD_SELECT } from "../../constats";

import "../../modals/styles.scss";
import "./styles.scss";

function View({ close, state, onClickHandler, methodSelect, setMethodSelect }) {
  return (
    <div id="myModal" className="modal buy-credits">
      <div className="modal-content">
        <h3>Selecciona un método de pago</h3>

        <div className="options">
          {METHOD_SELECT.map((method) => (
            <div
              className="checkbox flex"
              onClick={() => setMethodSelect(method)}
            >
              <input
                checked={method === methodSelect}
                type="checkbox"
                name=""
                id=""
              />
              <p>{method}</p>
            </div>
          ))}
        </div>

        <section className="footer">
          <section className="section-buttons flex">
            <div className="button" onClick={() => close(false)}>
              Cancelar
            </div>
            <div className="button-reactive">
              <ReactiveButton
                className="button"
                buttonState={state}
                onClick={() => onClickHandler()}
                shadow={false}
                loadingText={"Comprando..."}
                outline={false}
                rounded={false}
                block={false}
                idleText={"Comprar"}
              />
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}

export default View;
