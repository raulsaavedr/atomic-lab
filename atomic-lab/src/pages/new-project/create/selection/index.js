import React, { useState, useEffect, useContext } from "react";
import CreateFormContext from "../../../../create-form-context";
import View from "./view";

function Index({ setStep, step }) {

  const data = useContext(CreateFormContext)[0];
  const [formData, setFormData] = useContext(CreateFormContext);

  const [selectedImg, setSelectedImg] = useState();
  const [selectedImgArray, setSelectedImgArray] = useState(data.img_array ? data.img_array : []);

  const [idSelect, setIdSelect] = useState("");

  useEffect(() => {
    if (!selectedImg) {

      return;
    }
    const objectUrl = URL.createObjectURL(selectedImg);

    setSelectedImgArray(selectedImgArray.filter((item) => item.id !== idSelect));

    setSelectedImgArray((selectedImgArray) => [
      ...selectedImgArray,
      {
        id: idSelect,
        object: objectUrl,
        name: selectedImg.name
      },
    ]);


  }, [selectedImg, idSelect]);



  useEffect(() => {



    selectedImgArray.length >= 1 && setFormData({ ...formData, img_array: selectedImgArray, });


  }, [selectedImgArray]);





  const onSelectFile = (e, id) => {

    if (!e.target.files || e.target.files.length === 0) {
      setSelectedImg(undefined);
      return;
    }

    setIdSelect(id)
    setSelectedImg(e.target.files[0]);


  };




  const properties = {
    selectedImg,
    onSelectFile,
    setStep,
    step,

  };

  return <View {...properties} />;
}

export default Index;
