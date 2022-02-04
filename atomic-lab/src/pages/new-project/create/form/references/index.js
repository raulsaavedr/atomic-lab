import React from "react";
import View from "./view";

function Index({ data, references, setReferences }) {
  const properties = { data, references, setReferences };

  return <View {...properties} />;
}

export default Index;
