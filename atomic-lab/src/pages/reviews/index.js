import React, { useState, useEffect } from "react";
import { USER_DATA } from "../constats";
import { useParams, useNavigate } from "react-router-dom";
import View from "./view";

function Index() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [projectData, setProjectData] = useState([]);

  console.log(id);

  useEffect(() => {
    const data = USER_DATA.active_projects.filter(
      (project) => project.id === parseInt(id)
    );

    setProjectData(data[0]);
  }, [id]);

  const redirectTo = (item) => navigate(item);

  const properties = { projectData, redirectTo };

  return <View {...properties} />;
}

export default Index;
