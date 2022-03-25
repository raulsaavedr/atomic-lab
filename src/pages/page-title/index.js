import React, { useContext, useState } from "react";
import DataContext from "../../data-context";
import View from "./view";

function Index({ page, user, title, price, modalPriceTotal, func }) {
  const [modalHelp, setModalHelp] = useState(false);

  const { userData } = useContext(DataContext);

  const properties = {
    page,
    user,
    title,
    price,
    modalPriceTotal,
    func,
    modalHelp,
    setModalHelp,
    userData,
  };

  return <View {...properties} />;
}

export default Index;
