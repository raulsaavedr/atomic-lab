import React, { useState, useContext, useEffect } from "react";
import DataContext from "../../data-context";
import { useParams, useNavigate } from "react-router-dom";
import View from "./view";

function Index() {
  const navigate = useNavigate();

  const { id } = useParams();

  const { activeProjects, userData } = useContext(DataContext);

  const filterProject = activeProjects.filter((project) => project.id === parseInt(id))[0]
  const projectValues = JSON.parse(filterProject.values);

  const redirectTo = (route) => navigate(route);

  const properties = { filterProject, projectValues, userData, redirectTo, navigate };

  return <View {...properties} />;
}

export default Index;
