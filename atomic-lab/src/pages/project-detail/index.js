import React, { useContext } from "react";
import DataContext from "../../data-context";
import { useParams, useNavigate } from "react-router-dom";
import { DETAIL_PROJECT_DATA, URL_IMG } from "../constats";
import View from "./view";

function Index() {
  const navigate = useNavigate();

  const { id } = useParams();

  const { activeProjects, userData, finishProjects } = useContext(DataContext);

  const projectsAll = [...finishProjects, ...activeProjects]


  const filterProject = projectsAll.filter(
    (project) => project.id === parseInt(id)
  )[0];

  const projectValues = [JSON.parse(filterProject.values)];

  const redirectTo = (route) => navigate(route);

  let options = [];
  for (const [key, value] of Object.entries(projectValues[0])) {
    DETAIL_PROJECT_DATA[key] &&
      options.push(
        <div className="value flex">
          <p className="title">{DETAIL_PROJECT_DATA[key]}</p>
          <p>
            {typeof value === "object"
              ? key === "post" &&
              value.map((item, index) => (
                <div className="post_img" key={index}>
                  <img src={URL_IMG + item.name_img} alt={index} />
                </div>
              ))
              : value}
          </p>
        </div>
      );
  }

  const properties = {
    filterProject,
    projectValues,
    userData,
    redirectTo,
    navigate,
    options,
  };

  return <View {...properties} />;
}

export default Index;
