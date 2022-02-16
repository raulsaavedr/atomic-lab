import React, { useState, useEffect, useContext } from "react";
import DataContext from "../../data-context";
import { useParams, useNavigate } from "react-router-dom";
import View from "./view";

function Index() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [projectData, setProjectData] = useState([]);
  const [menuTopView, setMenuTopView] = useState("");
  const [modalZoomImg, setModalZoomImg] = useState(false);
  const [modalData, setModalData] = useState({});



  const { dataAll } = useContext(DataContext);

  const dataActiveProjects = dataAll && dataAll.active_projects ? dataAll.active_projects : [];
  const filterProject = dataActiveProjects.filter((project) => project.id === parseInt(id))[0]




  useEffect(() => {
    setProjectData(filterProject && {
      ...filterProject,
      values: JSON.parse(filterProject?.values),
    })
  }, [filterProject])


  const redirectTo = (item) => navigate(item);

  const properties = {
    projectData,
    redirectTo,
    setModalZoomImg,
    modalZoomImg,
    menuTopView,
    setMenuTopView,
    modalData,
    setModalData
  };

  return <View {...properties} />;
}

export default Index;
