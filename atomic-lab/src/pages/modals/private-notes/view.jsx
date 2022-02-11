import React from "react";
import "../../modals/styles.scss";
import "./styles.scss";

function View({ close, data }) {
  return (
    <div id="myModal" className="modal private-notes">
      <div className="modal-content">
        <h3>Mis notas privadas</h3>

        <div className="content-notes">
          {data.map((item, index) => (
            <div key={index}>
              <p>{item}</p>
            </div>
          ))}
        </div>

        <section className="section-buttons flex">
          <div className="button" onClick={() => close(false)}>
            Cancelar
          </div>
          <div className="button">Guardar</div>
        </section>
      </div>
    </div>
  );
}

export default View;
