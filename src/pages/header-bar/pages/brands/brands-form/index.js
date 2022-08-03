import React, { useState, useEffect, useContext, useMemo } from "react";
import DataContext from "../../../../../data-context";
import { useParams, useNavigate } from "react-router-dom";
import {
  postCreateBrand,
  putUpdateBrand,
  getBrands,
} from "../../../../../services";
import { useForm } from "react-hook-form";
import View from "./view";

function Index() {
  const { brands, setBrands, userData } = useContext(DataContext);

  console.log(userData);

  const { id } = useParams();
  const navigate = useNavigate();

  const redirectTo = (route) => navigate(route);

  const dataBrand = useMemo(() => (
    brands && brands
      ? brands.filter((brand) => brand.id === parseInt(id))[0]
      : [])
    , [id, brands]);
  const {
    register,
    handleSubmit,
    // watch,
    // setValue,
    reset,
    // formState: { errors },
  } = useForm();

  useEffect(() => {
    id && reset(dataBrand);
  }, [id, dataBrand, reset]);

  const [selectedImg, setSelectedImg] = useState();
  const [selectedImgArray, setSelectedImgArray] = useState([]);
  const [filesBrands, setFilesBrands] = useState([]);

  const onSelectFile = (e, id) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedImg(undefined);
      return;
    }

    /*     setIdSelect(id); */
    setSelectedImg(e.target.files[0]);
  };

  // What does this effect?
  useEffect(() => {
    if (!selectedImg) {
      return;
    }
    const objectUrl = URL.createObjectURL(selectedImg);

    setSelectedImgArray({
      object: objectUrl,
      name: selectedImg.name,
      formData: selectedImg,
    });
  }, [selectedImg]);

  const onSubmit = (data) => {
    const dataBrand = {
      ...data,
      predeterminate: false,
      user_id: JSON.parse(sessionStorage?.getItem("atomiclab-user")).user_id,
    };

    JSON.safeStringify = (obj, indent = 2) => {
      let cache = [];
      const retVal = JSON.stringify(
        obj,
        (key, value) =>
          typeof value === "object" && value !== null
            ? cache.includes(value)
              ? undefined // Duplicate reference found, discard key
              : cache.push(value) && value // Store value in our collection
            : value,
        indent
      );
      cache = null;
      return retVal;
    };

    const formData = new FormData();

    formData.append(selectedImgArray.name, selectedImgArray.formData);

    filesBrands.map((file) => formData.append(file.name, file.file));

    formData.append("jsondataRequest", JSON.safeStringify(dataBrand));

    id
      ? putUpdateBrand({ data: formData, brand_id: id })
        .then((res) => {
          getBrands(
            JSON.parse(sessionStorage?.getItem("atomiclab-user")).user_id
          ).then(({ data }) => {
            setBrands(data.brands);
          });
          redirectTo("/brands");
        })
        .catch((error) => {})
      : postCreateBrand(formData)
        .then((res) => {
          getBrands(
            JSON.parse(sessionStorage?.getItem("atomiclab-user")).user_id
          ).then(({ data }) => {
            setBrands(data.brands);
          });
          redirectTo("/brands");
        })
        .catch((error) => { });
  };

  const properties = {
    id,
    redirectTo,
    dataBrand,
    onSubmit,
    handleSubmit,
    register,
    selectedImgArray,
    onSelectFile,
    filesBrands,
    setFilesBrands,
    rol: userData?.rol_id,
  };

  return <View {...properties} />;
}

export default Index;
