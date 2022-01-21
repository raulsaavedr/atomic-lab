import React, { useState } from "react";
import View from "./view";

function Index({ page, user, title, price, modalPriceTotal, func }) {
  const [modalHelp, setModalHelp] = useState(false);

  const properties = {
    page,
    user,
    title,
    price,
    modalPriceTotal,
    func,
    modalHelp,
    setModalHelp,
  };

  return <View {...properties} />;
}

export default Index;
