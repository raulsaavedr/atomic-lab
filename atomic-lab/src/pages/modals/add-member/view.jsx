import React from "react";
import ReactiveButton from "reactive-button";
import "../../modals/styles.scss";
import "./styles.scss";

function View({ close, setEmail, setName, setRol, state, onClickHandler }) {
  return (
    <div id="myModal" className="modal add-member">
      <div className="modal-content">
        <h3>Invitar personas</h3>

        <p>Añadir personas</p>

        <div className="input-data">
          <div className="input-data-input flex">
            <div className="text">Nombre:</div>
            <input
              className="input-txt"
              type="email"
              name="email_member"
              id="email_member"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-data-input flex">
            <div className="text">Email:</div>
            <input
              className="input-txt"
              type="email"
              name="email_member"
              id="email_member"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-data-input flex">
            <div className="text">Rol:</div>
            <select
              className="select"
              name="level"
              id="level"
              onChange={(e) => setRol(e.target.value)}
            >
              <option value="5">Puede ver</option>
              <option value="6">Puede editar</option>
              <option value="7">Puede comentar</option>
            </select>
          </div>
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
                loadingText={"Invitando..."}
                outline={false}
                rounded={false}
                block={false}
                idleText={"Invitar"}
              />
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}

export default View;
