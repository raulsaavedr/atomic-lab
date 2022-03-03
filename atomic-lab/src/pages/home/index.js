import React, { useContext } from "react";
import DataContext from "../../data-context";
import { useNavigate } from "react-router-dom";
import View from "./view";

function Index() {
  const navigate = useNavigate();

  const { userData } = useContext(DataContext);

  const redirectTo = (item) => {
    navigate(item);
  };

  const properties = {
    redirectTo,
    userData
  };

  return <View {...properties} />;
}

export default Index;
