import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import View from "./view";

function Index() {
  let location = useLocation();

  const [data] = useState(location?.state?.project);

  const properties = { data };

  return <View {...properties} />;
}

export default Index;
