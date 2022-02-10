import React, { useState, useContext } from "react";
import DataContext from "../../data-context";
import { useLocation } from "react-router-dom";
import View from "./view";

function Index() {

  const { dataAll } = useContext(DataContext);

  let location = useLocation();

  const [project_id] = useState(location?.state?.project_id);


  const [filterProject] = useState([
    dataAll.active_projects.filter((project) => project.id === project_id)[0],
  ]);

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


  const properties = { filterProject, rate, reset };

  return <View {...properties} />;

}

export default Index;
