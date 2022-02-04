import React, { useState } from "react";
import View from "./view";

function Index({ next, cancel, message, subMessage, cancelVisible, next_type }) {

  const properties = { next, cancel, message, subMessage, cancelVisible, next_type };

  return <View {...properties} />;
}

export default Index;
