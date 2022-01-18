import React from "react";
import { USER_DATA } from "../constats";
import { Icons } from "../icons";

import "./styles.scss";

function View({ redirectTo }) {
  return (
    <div className="header-bar flex">
      <div className="icon-logo">{Icons("logo")}</div>
      <div className="icon-home option" onClick={() => redirectTo("/")}>
        {Icons("home")}
      </div>
      <div
        className="icon-add option"
        onClick={() => redirectTo("/new-project")}
      >
        {Icons("add")}
      </div>
      <div
        className="icon-active option"
        onClick={() => redirectTo("active-projects")}
      >
        {Icons("active")}
      </div>
      <div
        className="icon-finish option"
        onClick={() => redirectTo("/finish-projects")}
      >
        {Icons("finish")}
      </div>
      <div className="search flex">
        <div className="icon-search flex"> {Icons("search")}</div>
        <p>Buscar...</p>
      </div>
      <div className="icon-notifications option">{Icons("notifications")}</div>
      <div className="credits flex">
        <div className="icon-credit flex">
          {Icons("credits")} ${USER_DATA.credits}
        </div>
        <div className="credits-buy flex">Comprar</div>
      </div>
      <div className="account flex">
        <div className="icon-account">account</div>
        <div className="account-value">
          <div>Pepsi</div>
          <div>Usuario</div>
        </div>
        <div className="icon-arrow-up">{Icons("arrow_down")}</div>
      </div>
    </div>
  );
}

export default View;
