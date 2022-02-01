import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import View from "./view";

function Index({ page }) {
  const [modalPrivateNotes, setModalPrivateNotes] = useState(false);
  const [modalZoomImg, setModalZoomImg] = useState(false);
  const [modalReviews, setModalReviews] = useState(false);
  const [dataModals, setDataModals] = useState([]);
  const [menuFloat, setMenuFloat] = useState("");

  const navigate = useNavigate();

  const redirectToStatusProject = (project) =>
    navigate(`/status-project/${project.id}`, {
      state: { project: project },
    });
  const redirectToReviews = (id) => navigate(`/reviews/${id}`);

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
  };

  return <View {...properties} />;
}

export default Index;
