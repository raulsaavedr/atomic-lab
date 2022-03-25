import React, { useContext } from "react";
import DataContext from "../../../../data-context";
import { useNavigate } from "react-router-dom";

import View from "./view";

function Index() {

  const { brands } = useContext(DataContext);
  const navigate = useNavigate();

  const redirectToBrandForm = (id) =>
    navigate(id ? `/brands/brands-form/${id}` : `/brands/brands-form`);

  const properties = { redirectToBrandForm, brands };

  return <View {...properties} />;
}

export default Index;
