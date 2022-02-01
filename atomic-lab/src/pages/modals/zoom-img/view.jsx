import React from "react";
import "../../modals/styles.scss";
import "./styles.scss";

function View({ close, data }) {
  return (
    <div id="myModal" class="modal-zoom-img" onClick={() => close(false)}>
      <div class="modal-content">
        <img src={data} alt={data} />
      </div>
    </div>
  );
}

export default View;
