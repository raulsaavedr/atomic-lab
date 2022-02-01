import React from "react";
import View from "./view";

function Index({
  id,
  post,
  setPost,
  selectedImg,
  setSelectedImg,
  preview,
  onSelectFile,
  textPreview,
  setTextPreview, selectedImgArray
}) {
  const properties = {
    id,
    post,
    setPost,
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
