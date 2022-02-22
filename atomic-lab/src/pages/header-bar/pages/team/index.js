import React, { useState } from "react";
import { deleteMemberTeam } from "../../../../services";
import View from "./view";

function Index({ data }) {
  const [modalAddMember, setModalAddMember] = useState(false);
  const [dataModals, setDataModals] = useState([]);





  const deleteMember = (member_id) => {


    deleteMemberTeam(member_id)
      .then((res) => {

      })
      .catch((error) => {

      });
  };






  const properties = {
    modalAddMember,
    setModalAddMember,
    dataModals,
    setDataModals,
    data,
    deleteMember
  };

  return <View {...properties} />;
}

export default Index;
