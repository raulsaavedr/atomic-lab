import React from "react";
import { Icons } from "../../icons";
import "../../modals/styles.scss";
import "./styles.scss";

function View({ close, data }) {
  return (
    <div id="myModal" class="modal add-member">
      <div class="modal-content">
        <h3>Invitar personas</h3>

        <p>Añadir personas</p>

        <div className="input-data">
          <input
            className="input-txt"
            type="email"
            name="email_member"
            id="email_member"
          />

          <select className="select" name="level" id="level">
            <option value="view">Puede ver</option>
            <option value="edit">Puede editar</option>
            <option value="comment">Puede comentar</option>
          </select>
        </div>

        <section className="footer">
          <section className="section-buttons flex">
            <div className="button" onClick={() => close(false)}>
              Cancelar
            </div>
            <div className="button">Invitar</div>
          </section>
        </section>
      </div>
    </div>
  );
}

export default View;
