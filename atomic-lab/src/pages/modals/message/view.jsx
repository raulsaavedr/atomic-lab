import React, { useState } from "react";
import ReactiveButton from "reactive-button";
import "../../modals/styles.scss";
import "./styles.scss";

function View({ next, cancel, message, subMessage, cancelVisible }) {
  const [state, setState] = useState("idle");

  const onClickHandler = () => {
    setState("loading");
    setTimeout(() => {
      setState("success");
    }, 2000);
  };

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

          <ReactiveButton
            className="button"
            buttonState={state}
            onClick={onClickHandler}
          />

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
