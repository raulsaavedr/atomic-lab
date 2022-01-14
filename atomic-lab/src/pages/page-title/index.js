import React from "react";
import View from "./view";

function Index({ title }) {
  const properties = { title };

  return <View {...properties} />;
}

export default Index;
