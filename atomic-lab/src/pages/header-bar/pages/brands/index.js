import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import View from "./view";

function Index({ data }) {
  const navigate = useNavigate();

  const redirectToBrandForm = (id) =>
    navigate(id ? `/brands/brands-form/${id}` : `/brands/brands-form`);

  const properties = { redirectToBrandForm, data };

  return <View {...properties} />;
}

export default Index;
