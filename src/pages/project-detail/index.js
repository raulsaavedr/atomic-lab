import React, { useContext, useState } from "react";
import DataContext from "../../data-context";
import { useParams, useNavigate } from "react-router-dom";
import { DETAIL_PROJECT_DATA, URL_IMG } from "../constats";
import View from "./view";

function Index() {
  const navigate = useNavigate();

  const { id } = useParams();

  const { userData, allProjects } = useContext(DataContext);

  console.log("alll-", allProjects);

  const filterProject = allProjects.filter(
    (project) => project.id === parseInt(id)
  )[0];

  const projectValues = filterProject.values;

  const redirectTo = (route) => navigate(route);

  let options = [];
  let options_post = [];

  for (const [key, value] of Object.entries(projectValues[0])) {
    DETAIL_PROJECT_DATA[key] &&
      options.push(
        <div className="value flex">
          <p className="title">{DETAIL_PROJECT_DATA[key]}</p>
          <p>
            {typeof value !== "object" &&
              /* ? key === "post" &&
                value.map((item, index) => (
                  <div className="post_img" key={index}>
                    <p>Post #{index + 1}</p>
                    <p>Objetive: {item.objetive}</p>
                    <p>Text: {item.text}</p>
                    <img src={URL_IMG + item.name_img} alt={index} />
                  </div>
                ))
              : */ value}
          </p>
        </div>
      );
  }

  const [modalZoomImg, setModalZoomImg] = useState(false);
  const [dataModals, setDataModals] = useState(false);

  options_post.push(
    <div className="value post-dat-all flex">
      <p className="title">Post</p>

      <div className="post-container">
        {projectValues[0]?.post?.map((item, index) => (
          <div
            className="post-data"
            key={item.id}
            onClick={() => {
              setModalZoomImg(!modalZoomImg);
              setDataModals({
                type: "normal",
                img: item.name_img,
              });
            }}
          >
            <p>Objetive: {item.objetive}</p>
            <p>Text: {item.text}</p>
            <div className="img-container">
              <img src={item.name_img} alt={index} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const properties = {
    projectValues,
    navigate,
    options,
    options_post,
    modalZoomImg,
    setModalZoomImg,
    dataModals,
  };

  return <View {...properties} />;
}

export default Index;
