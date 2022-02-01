import React from "react";
import "../../modals/styles.scss";
import "./styles.scss";

function View({ next, cancel, message, subMessage, cancelVisible }) {
  return (
    <div id="myModal" class="modal modal-message">
      <div class="modal-content">
        <div className="text flex">
          <div className="text-purple">{message}</div>
          {subMessage && <div>{subMessage}</div>}
        </div>

        <div
          className={`modal-message-buttons flex ${
            cancel && next ? "is-justify" : "is-center"
          }`}
        >
          {cancelVisible && (
            <div className="button" onClick={() => cancel()}>
              Cancelar
            </div>
          )}
          {next && (
            <div className="button" onClick={() => next()}>
              Continuar
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default View;
