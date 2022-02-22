import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { postCreateBrand, putUpdateBrand } from "../../../../../services";
import { useForm } from "react-hook-form";
import View from "./view";

function Index({ data }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const redirectTo = (route) => navigate(route);

  const dataBrand =
    data && data.brands
      ? data.brands.filter((brand) => brand.id === parseInt(id))[0]
      : [];

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm();



  useEffect(() => {
    id && reset(dataBrand);
  }, [])




  const onSubmit = (data) => {
    const dataBrand = {
      ...data,
      predeterminate: false,
      user_id: JSON.parse(sessionStorage.getItem("atomiclab-user")).user_id,
    };



    id ?
      putUpdateBrand({ data: dataBrand, brand_id: id })
        .then((res) => {
          redirectTo("/brands");
        })
        .catch((error) => { })
      :
      postCreateBrand(dataBrand)
        .then((res) => {
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
  };

  return <View {...properties} />;
}

export default Index;
