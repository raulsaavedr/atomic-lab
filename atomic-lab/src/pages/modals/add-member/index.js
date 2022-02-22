import React, { useState } from "react";
import { postAddTeam } from "../../../services";
import View from "./view";

function Index({ close, data }) {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [rol, setRol] = useState(5);

  const onSubmit = () => {
    const data = {
      name: name,
      email: email,
      rol_id: parseInt(rol),
      project_id: 1,
      user_id: JSON.parse(sessionStorage.getItem("atomiclab-user")).user_id,
    };

    postAddTeam(data)
      .then((res) => {
        close();
      })
      .catch((error) => {
        setState("idle");
      });
  };

  const [state, setState] = useState("idle");

  const onClickHandler = () => {
    setState("loading");
    setTimeout(() => {
      onSubmit();
    }, 2000);
  };

  const properties = {
    close,
    setEmail,
    setName,
    setRol,
    state,
    onClickHandler,
  };
  return <View {...properties} />;
}

export default Index;
