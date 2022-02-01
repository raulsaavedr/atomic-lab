import React, { useState, useEffect } from "react";
import { USER_DATA } from "../constats";
import { useParams, useNavigate } from "react-router-dom";
import View from "./view";

function Index() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [projectData, setProjectData] = useState([]);
  const [menuTopView, setMenuTopView] = useState("");
  const [modalZoomImg, setModalZoomImg] = useState(false);
  const [modalData, setModalData] = useState({});

  useEffect(() => {
    const data = USER_DATA.active_projects.filter(
      (project) => project.id === parseInt(id)
    );

    setProjectData(data[0]);
  }, [id]);

  const redirectTo = (item) => navigate(item);

  const properties = {
    projectData,
    redirectTo,
    setModalZoomImg,
    modalZoomImg,
    menuTopView,
    setMenuTopView,
    modalData,
    setModalData,
  };

  return <View {...properties} />;
}

export default Index;
