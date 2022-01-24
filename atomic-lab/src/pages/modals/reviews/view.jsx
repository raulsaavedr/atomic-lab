import React from "react";
import { Icons } from "../../icons";
import "../../modals/styles.scss";
import "./styles.scss";

function View({ close, data }) {
  return (
    <div id="myModal" class="modal reviews" onClick={() => close(false)}>
      <div class="modal-content">
        <h3 className="flex">Revisiones</h3>
        <div className="subtitle">
          Actualmente tienes {4 - data} revisiones disponibles de un total de 4.
        </div>
        <div className="buy"></div>

        <section className="section-buttons flex">
          <div className="button" onClick={() => close(false)}>
            Aceptar
          </div>
        </section>
      </div>
    </div>
  );
}

export default View;
