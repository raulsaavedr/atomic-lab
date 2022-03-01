import React, { useState, useContext } from "react";
import DataContext from "../../../../data-context";
import { deleteMemberTeam, getTeam } from "../../../../services";
import View from "./view";

function Index() {
  const [modalAddMember, setModalAddMember] = useState(false);
  const [dataModals, setDataModals] = useState([]);

  const { team, setTeam } = useContext(DataContext);

  const user_id = JSON.parse(
    sessionStorage.getItem("atomiclab-user")
  ).user_id;



  const deleteMember = (member_id) => {


    deleteMemberTeam(member_id)
      .then((res) => {
        getTeam(user_id).then(({ data }) => {
          setTeam(data.team);
        });
      })
      .catch((error) => {

      });
  };






  const properties = {
    modalAddMember,
    setModalAddMember,
    dataModals,
    setDataModals,
    team,
    deleteMember
  };

  return <View {...properties} />;
}

export default Index;
