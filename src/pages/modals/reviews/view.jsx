import React from "react";
import "../../modals/styles.scss";
import "./styles.scss";

function View({ close, data }) {
  return (
    <div
      id="myModal"
      className="modal modal-reviews"
      /* onClick={() => close(false)} */
    >
      <div className="modal-content">
        <h3 className="flex text-blue">Revisiones</h3>
        <div className="subtitle">
          Actualmente tienes <span className="text-blue"> {4 - data} </span>
          revisiones disponibles de un total de{" "}
          <span className="text-blue"> 4</span>.
        </div>
        <div className="buy"></div>

        <section className="section-buttons flex">
          <div className="button-blue" onClick={() => close(false)}>
            Aceptar
          </div>
        </section>
      </div>
    </div>
  );
}

export default View;
