import React from "react";

import "../../modals/styles.scss";
import "./styles.scss";

import "@recogito/annotorious/dist/annotorious.min.css";

function View({ close, data, save, imgEl }) {
  return (
    <div id="myModal" className="modal-zoom-img">
      <div className="modal-content">
        <img ref={imgEl} src={data.img} alt={data.img} id="123" />
        <section className="zoom-footer">
          <section className="section-buttons flex">
            <div className="button" onClick={() => close(false)}>
              Cancelar
            </div>
            <div className="button" onClick={() => save()}>
              Guardar
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}

export default View;
