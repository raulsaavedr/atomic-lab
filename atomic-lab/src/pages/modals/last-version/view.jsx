import React from "react";
import { Icons } from "../../icons";
import "../../modals/styles.scss";
import "./styles.scss";

function View({ close, data }) {
  return (
    <div id="myModal" class="modal last_review" onClick={() => close(false)}>
      <div class="modal-content">{Icons(data)}</div>
    </div>
  );
}

export default View;
