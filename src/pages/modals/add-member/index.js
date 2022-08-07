import React, { useState, useContext } from "react";
import DataContext from "../../../data-context";
import { postAddTeam, getTeam } from "../../../services";
import View from "./view";

function Index({ close, data }) {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [rol, setRol] = useState(null);

  const { userData, setTeam } = useContext(DataContext);

  const user_id = JSON.parse(
    sessionStorage?.getItem("atomiclab-user")
  ).user_id;

  const onSubmit = () => {
    const data = {
      name: name,
      email: email,
      rol_id: parseInt(rol),
      project_id: 1,
      user_id: JSON.parse(sessionStorage?.getItem("atomiclab-user")).user_id,
    };

    postAddTeam(data)
      .then((res) => {
        getTeam(user_id).then(({ data }) => {
          setTeam(data.team);
        });
        close();
      })
      .catch((error) => {
        (error.response?.data?.message.includes("Duplicate entry")) ?
          alert("Vaya! Hubo un problema al procesar tu solicitud. No pueden existir correos duplicados")
          :
          console.log(error)
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
    userData,
    name,
    email,
    rol
  };
  return <View {...properties} />;
}

export default Index;
