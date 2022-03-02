import React, { useState } from "react";
import View from "./view";

function Index({ close, data }) {


  const [methodSelect, setMethodSelect] = useState(null)

  const onSubmit = () => {
    /* const data = {
      name: name,
      email: email,
      rol_id: parseInt(rol),
      project_id: 1,
      user_id: JSON.parse(sessionStorage.getItem("atomiclab-user")).user_id,
    };

    postAddTeam(data)
      .then((res) => {
        getTeam(user_id).then(({ data }) => {
          setTeam(data.team);
        });
        close();
      })
      .catch((error) => {
        setState("idle");
      }); */
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
    state,
    onClickHandler,
    methodSelect, setMethodSelect
  };
  return <View {...properties} />;
}

export default Index;
