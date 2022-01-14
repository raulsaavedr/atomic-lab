import React from "react";
import "./styles.scss";

function View({ redirectTo }) {
  return (
    <div className="header-bar flex">
      <div className="logo">logo</div>
      <div className="icon-home option" onClick={() => redirectTo("/")}>
        home
      </div>
      <div className="icon-add option">add</div>
      <div
        className="icon-active option"
        onClick={() => redirectTo("active-projects")}
      >
        active
      </div>
      <div className="icon-finish option">finish</div>
      <div className="search flex">
        <div className="icon-search">lupa</div>
        <p>Buscar...</p>
      </div>
      <div className="icon-notifications option">notifications</div>
      <div className="credits flex">
        <div className="icon-credit">credit</div>
        <div className="credits-value">$0</div>
        <div className="credits-buy">comprar</div>
      </div>
      <div className="account flex">
        <div className="icon-account">account</div>
        <div className="account-value">
          <p>Pepsi</p>
          <p>Usuario</p>
        </div>
        <div className="icon-arrow-up">+</div>
      </div>
    </div>
  );
}

export default View;
