import React from "react";
import "../../modals/styles.scss";
import "./styles.scss";

function View({ close, data }) {
  return (
    <div id="myModal" className="modal-zoom-img" onClick={() => close(false)}>
      <div className="modal-content">
        <img src={data} alt={data} />
      </div>
    </div>
  );
}

export default View;
