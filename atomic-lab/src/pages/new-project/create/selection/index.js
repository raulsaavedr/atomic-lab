import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import View from "./view";

function Index() {
  const navigate = useNavigate();

  const redirectToForm = () => navigate(`/service/create/form`);
  const redirectToSummary = () => navigate(`/service/create/summary`);

  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [textPreview, setTextPreview] = useState("Descripción #hashtags");

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  };

  const properties = {
    redirectToForm,
    redirectToSummary,
    selectedFile,
    preview,
    onSelectFile,
    textPreview,
    setTextPreview,
  };

  return <View {...properties} />;
}

export default Index;
