import React, { useState, useContext, useEffect } from "react";
import DataContext from "../../data-context";
import { useParams } from "react-router-dom";
import View from "./view";

function Index() {

  const { id } = useParams();

  const { dataAll } = useContext(DataContext);
  const [projectData, setProjectData] = useState([]);

  const dataActiveProjects = dataAll && dataAll.active_projects ? dataAll.active_projects : [];
  const filterProject = dataActiveProjects.filter((project) => project.id === parseInt(id))[0]

  console.log("id", id)
  console.log("dataActiveProjects--", dataActiveProjects)


  useEffect(() => {
    setProjectData(filterProject && {
      ...filterProject,
      flow: JSON.parse(filterProject?.flow),
      values: JSON.parse(filterProject?.values),

    })
  }, [filterProject])


  console.log(projectData)


  var rating = {};

  function rate(value) {
    rating.starValue = Number(value);
  }

  function reset() {
    var elements = document.querySelectorAll(".stars input[name=stars-1]");
    elements.forEach(function (element) {
      element.checked = false;
    });
    rating = {};
  }


  const properties = { projectData, rate, reset };

  return <View {...properties} />;


}

export default Index;
