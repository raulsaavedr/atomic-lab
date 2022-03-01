import React, { useContext, useState } from "react";
import DataContext from "../../../../data-context";
import View from "./view";

function Index() {
  const [modalAddMember, setModalAddMember] = useState(false);
  const [dataModals, setDataModals] = useState([]);


  const { attached } = useContext(DataContext);





  const properties = {
    modalAddMember,
    setModalAddMember,
    dataModals,
    setDataModals,
    attached
  };

  return <View {...properties} />;
}

export default Index;
