import Reac, { useState } from "react";
import View from "./view";

function Index({ data }) {
  const [modalAddMember, setModalAddMember] = useState(false);
  const [dataModals, setDataModals] = useState([]);

  const properties = {
    modalAddMember,
    setModalAddMember,
    dataModals,
    setDataModals,
    data
  };

  return <View {...properties} />;
}

export default Index;
