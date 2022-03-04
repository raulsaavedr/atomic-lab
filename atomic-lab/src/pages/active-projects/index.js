import React, { useState, useContext } from "react";
import DataContext from "../../data-context";
import { useNavigate } from "react-router-dom";
import View from "./view";

function Index({ page }) {

  const { userData, activeProjects, team } = useContext(DataContext);

  const [modalPrivateNotes, setModalPrivateNotes] = useState(false);
  const [modalZoomImg, setModalZoomImg] = useState(false);
  const [modalDesignerProject, setModalDesignerProject] = useState(false);
  const [modalReviews, setModalReviews] = useState(false);
  const [dataModals, setDataModals] = useState([]);
  const [menuFloat, setMenuFloat] = useState("");


  const navigate = useNavigate();

  const redirectToStatusProject = (project_id) =>
    navigate(`/status-project/${project_id}`, {
      state: { project_id: project_id },
    });
  const redirectToReviews = (id) => navigate(`/reviews/${id}`);
  const redirecToActiveProyects = () => navigate(`/active-projects`);
  const redirectTo = (route) => navigate(route);









  const properties = {
    page,
    setModalPrivateNotes,
    modalPrivateNotes,
    dataModals,
    setDataModals,
    modalReviews,
    setModalReviews,
    redirectToStatusProject,
    redirectToReviews,
    modalZoomImg,
    setModalZoomImg,
    menuFloat,
    setMenuFloat,
    navigate,
    redirecToActiveProyects,
    activeProjects,
    redirectTo,
    userData,
    team,
    modalDesignerProject,
    setModalDesignerProject
  };

  return <View {...properties} />;
}

export default Index;
