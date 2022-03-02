import React, { useState, useEffect, useContext } from "react";
import DataContext from "../../data-context";
import { useParams, useNavigate } from "react-router-dom";
import { getReviewsProject } from "../../services";
import View from "./view";

function Index() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [projectData, setProjectData] = useState([]);
  const [menuTopView, setMenuTopView] = useState("");
  const [modalZoomImg, setModalZoomImg] = useState(false);
  const [modalData, setModalData] = useState({});



  const { activeProjects } = useContext(DataContext);
  const [reviews, setReviews] = useState(null)
  const [versionSelect, setVersionSelect] = useState(1)

  const [versionVote, setVersionVote] = useState(null)



  const filterProject = activeProjects?.filter((project) => project.id === parseInt(id))[0]


  useEffect(() => {
    getReviewsProject(id).then(({ data }) => {
      setReviews(data);
      //setVersionSelect(data?.review_data[0].version)
    });
  }, [])



  useEffect(() => {
    setProjectData(filterProject && {
      ...filterProject,
      values: JSON.parse(filterProject?.values),
    })
  }, [filterProject])


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
    reviews,
    versionSelect,
    setVersionSelect,
    versionVote,
    setVersionVote,
    id
  };

  return <View {...properties} />;
}

export default Index;
