import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import View from "./view";

function Index() {
  const navigate = useNavigate();

  const redirectToForm = () => navigate(`/service/create/form`);
  const redirectToSummary = () => navigate(`/service/create/summary`);

  const [selectedImg, setSelectedImg] = useState();
  const [selectedImgArray, setSelectedImgArray] = useState([]);
  const [preview, setPreview] = useState();
  const [textPreview, setTextPreview] = useState("Descripción #hashtags");
  const [idSelect, setIdSelect] = useState("");

  useEffect(() => {
    if (!selectedImg) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedImg);
    setPreview(objectUrl);

    setSelectedImgArray(selectedImgArray.filter((item) => item.id !== idSelect));

    setSelectedImgArray((selectedImgArray) => [
      ...selectedImgArray,
      {
        id: idSelect,
        object: objectUrl,
        name: selectedImg.name

      },
    ]);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedImg, idSelect]);



  const onSelectFile = (e, id) => {

    if (!e.target.files || e.target.files.length === 0) {
      setSelectedImg(undefined);
      return;
    }

    setIdSelect(id)
    setSelectedImg(e.target.files[0]);
  };



  const properties = {
    redirectToForm,
    redirectToSummary,
    selectedImg,
    setSelectedImg,
    preview,
    onSelectFile,
    textPreview,
    setTextPreview, selectedImgArray
  };

  return <View {...properties} />;
}

export default Index;
