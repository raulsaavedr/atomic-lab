import Reac, { useState } from "react";
import View from "./view";

function Index() {
  const [modalAddMember, setModalAddMember] = useState(false);
  const [dataModals, setDataModals] = useState([]);

  const properties = {
    modalAddMember,
    setModalAddMember,
    dataModals,
    setDataModals,
  };

  return <View {...properties} />;
}

export default Index;
