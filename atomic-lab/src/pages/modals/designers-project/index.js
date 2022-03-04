import React, { useState, useContext, useEffect } from "react";
import DataContext from "../../../data-context";
import { postAssignDesignerProject, getAssignDesignerProject } from "../../../services";
import View from "./view";

function Index({ close, data }) {
  const { team } = useContext(DataContext);

  const [listDesigner, setListDesigner] = useState([])
  const [teamFilter, setTeamFilter] = useState([])

  useEffect(() => {
    getAssignDesignerProject(data.project_id)
      .then((res) => {
        setListDesigner(res.data.data)
      })
      .catch((error) => {
      });


    setTeamFilter(team.filter((user) => user.rol_id === 3))


  }, [])

  const deleteDesigner = (designer_id) => {

    setListDesigner(listDesigner.filter((user) => user.id !== parseInt(designer_id)))

    //setListDesigner(oldArray => [...oldArray, team.filter((user) => user.id === parseInt(designer_id))[0]]);

    const dataBody = {
      project_id: data.project_id,
      designer_id: designer_id,
    };

    /* postAssignDesignerProject(dataBody)
      .then((res) => {

      })
      .catch((error) => {

      }); */
  };

  const assignDesigner = (designer_id) => {

    setListDesigner(oldArray => [...oldArray, teamFilter.filter((user) => user.id === parseInt(designer_id))[0]]);

    const dataBody = {
      project_id: data.project_id,
      designer_id: designer_id,
    };

    /* postAssignDesignerProject(dataBody)
      .then((res) => {

      })
      .catch((error) => {

      }); */
  };


  const [state, setState] = useState("idle");

  const onClickHandler = () => {
    setState("loading");
    setTimeout(() => {
      /*   onSubmit(); */
    }, 2000);
  };


  const properties = {
    close, team, assignDesigner, listDesigner, teamFilter, deleteDesigner
  };
  return <View {...properties} />;
}

export default Index;
