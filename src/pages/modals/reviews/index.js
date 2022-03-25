import React from "react";
import View from "./view";

function Index({ close, data }) {
  const properties = { close, data };

  return <View {...properties} />;
}

export default Index;
