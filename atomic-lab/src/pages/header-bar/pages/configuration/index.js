import React, { useState } from "react";
import View from "./view";

function Index() {
  const [uploadVersion, setUploadVersion] = useState(false);
  const [noCommentsVersion, setNoCommentsVersion] = useState(false);
  const [comunicationWeek, setComunicationWeek] = useState(false);
  const [modalMessage, setModalMessage] = useState(false);
  const [news, setNews] = useState(false);
  const [startDelete, setStartDelete] = useState(false);

  const properties = {
    uploadVersion,
    setUploadVersion,
    noCommentsVersion,
    setNoCommentsVersion,
    comunicationWeek,
    setComunicationWeek,
    news,
    setNews,
    modalMessage,
    setModalMessage,
    startDelete,
    setStartDelete,
  };

  return <View {...properties} />;
}

export default Index;
