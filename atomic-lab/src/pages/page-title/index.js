import React from "react";
import View from "./view";

function Index({ page, user, title, price, modalPriceTotal }) {
  const properties = { page, user, title, price, modalPriceTotal };

  return <View {...properties} />;
}

export default Index;
