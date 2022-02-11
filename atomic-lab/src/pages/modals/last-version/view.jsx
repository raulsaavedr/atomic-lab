import React from "react";
import { Icons } from "../../icons";
import "../../modals/styles.scss";
import "./styles.scss";

function View({ close, data }) {
  return (
    <div
      id="myModal"
      className="modal last_review"
      onClick={() => close(false)}
    >
      <div className="modal-content">{Icons(data)}</div>
    </div>
  );
}

export default View;
