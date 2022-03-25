import React, { useContext, } from "react";
import DataContext from "../../../../data-context";
import View from "./view";

function Index() {

  const { userData } = useContext(DataContext);

  const properties = { userData };

  return <View {...properties} />;
}

export default Index;
