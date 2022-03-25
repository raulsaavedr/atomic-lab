import React, { useContext, useState, useEffect } from "react";
import DataContext from "../../../../data-context";
import { updateConfigurations } from "../../../../services";
import View from "./view";

function Index() {

  const [uploadVersion, setUploadVersion] = useState(false);
  const [noCommentsVersion, setNoCommentsVersion] = useState(false);
  const [comunicationWeek, setComunicationWeek] = useState(false);
  const [modalMessage, setModalMessage] = useState(false);
  const [news, setNews] = useState(false);
  const [startDelete, setStartDelete] = useState(false);

  const [languaje, setLanguaje] = useState("español")

  const { userData } = useContext(DataContext);



  useEffect(() => {



    if (typeof userData?.configurations === "string") {

      const config = JSON.parse(userData?.configurations)


      setComunicationWeek(config.comunication_week)
      setNews(config.news)
      setNoCommentsVersion(config.notification_comment)
      setUploadVersion(config.notification_designer)
      setLanguaje(config.languaje)
    }

  }, [userData])





  const updateDataConfigurations = () => {

    const dataBody = {
      languaje: languaje,
      notification_designer: uploadVersion,
      notification_comment: noCommentsVersion,
      comunication_week: comunicationWeek,
      news: news,
    }

    updateConfigurations({ user_id: userData.id, data: dataBody }).then((res) => {


    })
      .catch((error) => { })


  }





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
    languaje,
    setLanguaje,
    updateDataConfigurations
  };

  return <View {...properties} />;
}

export default Index;
