import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import View from "./view";

function Index() {
  const navigate = useNavigate();

  const redirectToBrandForm = () => navigate("/brands/brands-form");

  const properties = { redirectToBrandForm };

  return <View {...properties} />;
}

export default Index;
