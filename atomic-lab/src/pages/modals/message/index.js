import React from "react";
import View from "./view";

function Index({ next, cancel, message, subMessage, cancelVisible }) {
  const properties = { next, cancel, message, subMessage, cancelVisible };

  return <View {...properties} />;
}

export default Index;
