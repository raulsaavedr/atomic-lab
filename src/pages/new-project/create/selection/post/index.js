import React from "react";
import View from "./view";

function Index({
  id,
  post,
  setPost,
  selectedImg,
  onSelectFile,

}) {
  const properties = {
    id,
    post,
    setPost,
    selectedImg,
    onSelectFile,

  };

  return <View {...properties} />;
}

export default Index;
