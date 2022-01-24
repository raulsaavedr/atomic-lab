import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import View from "./view";

function Index({ page, table }) {
  const [modalPrivateNotes, setModalPrivateNotes] = useState(false);
  const [modalLastVersion, setModalLastVersion] = useState(false);
  const [modalReviews, setModalReviews] = useState(false);
  const [dataModals, setDataModals] = useState([]);

  const navigate = useNavigate();

  const redirectToStatusProject = (project) =>
    navigate(`/status-project/${project.id}`, {
      state: { project: project },
    });

  const properties = {
    page,
    table,
    setModalPrivateNotes,
    modalPrivateNotes,
    dataModals,
    setDataModals,
    modalLastVersion,
    setModalLastVersion,
    modalReviews,
    setModalReviews,
    redirectToStatusProject,
  };

  return <View {...properties} />;
}

export default Index;
