import React from "react";
import View from "./view";

function Index({ id, references, setReferences }) {
  const properties = { id, references, setReferences };

  return <View {...properties} />;
}

export default Index;
