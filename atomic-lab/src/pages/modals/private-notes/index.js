import React, { useState, useContext } from "react";
import DataContext from "../../../data-context";
import { updateNotes, getActiveProjects } from "../../../services";
import View from "./view";

function Index({ close, data }) {
  const [notes, setNotes] = useState(data.notes);
  const { setActiveProjects, userData } = useContext(DataContext);

  const [state, setState] = useState("idle");

  const onClickHandler = () => {
    setState("loading");
    setTimeout(() => {
      saveNote();
    }, 2000);
  };

  const saveNote = () => {
    updateNotes({ project_id: data.project_id, notes: notes })
      .then((res) => {

        getActiveProjects(userData.id).then(({ data }) => {
          setActiveProjects(data.response);
        });



        setState("idle");
        close();
      })
      .catch((error) => { });
  };

  const properties = {
    close,
    data,
    saveNote,
    notes,
    setNotes,
    state,
    onClickHandler,
  };

  return <View {...properties} />;
}

export default Index;
