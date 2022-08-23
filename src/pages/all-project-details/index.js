import React, { useContext, useState, useEffect } from "react";
import DataContext from "../../data-context";
import { useParams, useNavigate } from "react-router-dom";
// import { URL_IMG } from "../constants";
import { getAssignDesignerProject } from "../../services";
import View from "./view";
import { Icons } from "../icons";

function Index() {
  const navigate = useNavigate();

  const { id } = useParams();


  const { userData, allProjects } = useContext(DataContext);
  const [designers, setDesigners] = useState([]);
  const { brands } = useContext(DataContext);
  // Get the actual requested project by the project_id
  const filterProject = allProjects.filter((project) => project.id === parseInt(id))[0];
  // Get the project values from  the project filtered
  const projectValues = filterProject?.values[0];

  // Custom Hook AssignDesigner?
  useEffect(() => {
    getAssignDesignerProject(id)
      .then((res) => {
        // console.log(`Designer for project ${id}:`, res.data?.data);

        (typeof res.data === 'object') && setDesigners(res.data.data);
      })
      .catch((error) => { console.log(error) });
  }, [id]);

  // console.log(projectValues)
  // console.log(allProjects)
  // console.log(userData)
  // Check all the other designers
  // console.log(designers)
  // console.log(brands)

  const [modalZoomImg, setModalZoomImg] = useState(false);
  const [dataModals, setDataModals] = useState(false);

  // Create the references section
  const references = projectValues?.references.map((reference, index) => (
    <div className="reference" key={index}>
      <span>
        <a
          rel="noreferrer"
          download={reference.name_file?.split("images/")[1]}
          target="_blank"
          href={reference.name_file}
          title={reference.name_file?.split("images/")[1]}
        >
          {Icons('download')}
        </a>
        <p>{reference.name_file?.split("images/")[1]}</p>
      </span>
      <p>{reference.text}</p>
    </div>
  ))

  // Create the images section
  const images = projectValues?.post?.map((item, index) => (
    <div className="post-data" key={item.id}>
      <span>
        <a
          rel="noreferrer"
          download={item.name_img?.split("images/")[1]}
          target="_blank"
          href={item.name_img}
          title={item.name_img?.split("images/")[1]}
        >
          {Icons('download')}
        </a>
        <p>{item.name_img?.split("images/")[1]}</p>
      </span>
      <p>Objetivo: {item.objetive}</p>
      <p>Texto: {item.text}</p>
    </div>
  ));

  // We compare the actual project against all the brands this user has
  // to get the brand id to be able navigate to the brand page
  const brandId = brands.filter(brand => projectValues?.brand_select === brand.brand)[0]?.id;
  // console.log(brandId)
  // console.log(brands)
  // console.log(projectValues)
  const redirectToBrandForm = () =>
    navigate(brandId ? `/brands/brands-form/${brandId}` : `/brands/brands-form`);


  const properties = {
    filterProject,
    projectValues,
    userData,
    references,
    images,
    navigate,
    designers,
    modalZoomImg,
    setModalZoomImg,
    dataModals,
    setDataModals,
    redirectToBrandForm
  };

  return <View {...properties} />;
}

export default Index;
