import React, { useContext, useState, useEffect } from "react";
import DataContext from "../../data-context";
import { useParams, useNavigate } from "react-router-dom";
import { URL_IMG } from "../constats";
import { getAssignDesignerProject } from "../../services";
import View from "./view";

function Index() {
  const navigate = useNavigate();

  const { id } = useParams();


  const { userData, allProjects } = useContext(DataContext);
  const [designers, setDesigners] = useState([]);
  // Get the actual requested project by the project_id
  const filterProject = allProjects.filter((project) => project.id === parseInt(id))[0];
  // Get the project values from  the project filtered
  const projectValues = filterProject?.values[0];

  // Custom Hook ?
  useEffect(() => {
    getAssignDesignerProject(id)
      .then((res) => {
        console.log(`Designer for project ${id}: ${res.data}`);

        (typeof res.data === 'object') && setDesigners(res.data.data);
      })
      .catch((error) => { console.log(error) });
  }, [id]);

  console.log(allProjects)
  console.log(userData)
  // Check all the other designers
  // console.log(designers)

  const [modalZoomImg, setModalZoomImg] = useState(false);
  const [dataModals, setDataModals] = useState(false);


  const properties = {
    filterProject,
    projectValues,
    userData,
    navigate,
    designers,
    modalZoomImg,
    setModalZoomImg,
    dataModals,
    setDataModals
  };

  return <View {...properties} />;
}

export default Index;
