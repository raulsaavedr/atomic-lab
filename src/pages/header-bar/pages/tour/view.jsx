import React from "react";
import { useNavigate } from "react-router-dom";
import { Icons } from "../../../icons";
import "./styles.scss";

function View({
  setTourStep,
  tourStep,
  setTourActive,
  title,
  text,
  updateTour,
  numberSteps
}) {
  const navigate = useNavigate();
  return (
    <div className={`tour tour-${tourStep}`}>
      <div className={`tour-content tour-step-${tourStep}`}>
        {tourStep !== 0 && (
          <>
            <div className="corner"></div>
            <div className="steps-title flex">
              <p>{tourStep} / {numberSteps}</p>

              <p onClick={() => setTourActive(false)}>{Icons("close_white")}</p>
            </div>
          </>
        )}

        <h4>{title}</h4>
        <p>{text}</p>

        <div className="buttons">
          {tourStep === 0 ? (
            <div
              className="button"
              onClick={() => {
                setTourActive(false);
                navigate("/new-project");
                updateTour();
              }}
            >
              Cancelar tour
            </div>
          ) : (
            <div className="button" onClick={() => setTourStep(tourStep - 1)}>
              Atrás
            </div>
          )}

          {tourStep <= 3 && (
            <div className="button" onClick={() => setTourStep(tourStep + 1)}>
              Siguiente
            </div>
          )}
          {tourStep === numberSteps && (
            <div
              className="button"
              onClick={() => {
                setTourStep(0);
                setTourActive(false);
                navigate("/new-project");
                updateTour();
              }}
            >
              Finalizar
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default View;
