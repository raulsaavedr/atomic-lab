import React, { useEffect, useContext } from "react";
import DataContext from "../../../../../data-context";
import { useParams, useNavigate } from "react-router-dom";
import { postCreateBrand, putUpdateBrand, getBrands } from "../../../../../services";
import { useForm } from "react-hook-form";
import View from "./view";

function Index() {
  const { brands, setBrands } = useContext(DataContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const redirectTo = (route) => navigate(route);

  const dataBrand =
    brands && brands
      ? brands.filter((brand) => brand.id === parseInt(id))[0]
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
          getBrands(JSON.parse(sessionStorage.getItem('atomiclab-user')).user_id).then(({ data }) => {
            setBrands(data.brands)
          });
          redirectTo("/brands");

        })
        .catch((error) => { })
      :
      postCreateBrand(dataBrand)
        .then((res) => {
          getBrands(JSON.parse(sessionStorage.getItem('atomiclab-user')).user_id).then(({ data }) => {
            setBrands(data.brands)
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
  };

  return <View {...properties} />;
}

export default Index;
