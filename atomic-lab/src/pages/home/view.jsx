import React from "react";
import Services from "./components/services";
import "./styles.scss";

function View() {
  return (
    <div className="home">
      <div className="home-content">
        <Services></Services>
      </div>
    </div>
  );
}

export default View;
