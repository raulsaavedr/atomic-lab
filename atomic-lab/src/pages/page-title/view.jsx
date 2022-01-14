import React from "react";
import "./styles.scss";

function View({ title }) {
  return (
    <div className="page-title flex">
      <div className="title">
        <h1>{title}</h1>
      </div>
      <div className="help flex">
        <div className="icon-help">X</div>
        <div className="text-help">Ayuda</div>
      </div>
    </div>
  );
}

export default View;
