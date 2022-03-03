import React, { useEffect, useContext, useState } from "react";
import DataContext from "../../data-context";
import { useNavigate, useLocation } from "react-router-dom";
import {
  getDataUser,
  getBrands,
  getActiveProjects,
  getTeam,
  getAttached,
  getFinishProjects,
} from "../../services";
import View from "./view";

function Index({ setIsAuthenticated }) {
  const {
    userData,
    setUserData,
    setBrands,
    setActiveProjects,
    setTeam,
    setAttached,
    setFinishProjects,
  } = useContext(DataContext);

  const navigate = useNavigate();
  const [menuActive, setMenuActive] = useState(false);
  const [modalBuyCredits, setModalBuyCredit] = useState(false);
  const [dataModals, setDataModals] = useState([]);
  const [tourStep, setTourStep] = useState(0);
  const [tourActive, setTourActive] = useState(true);


  let location = useLocation();

  const redirectTo = (item) => {
    if (!tourStep) {
      navigate(item);
      setMenuActive(false);
    }
  };

  const user_id = JSON.parse(sessionStorage?.getItem("atomiclab-user")).user_id;

  useEffect(() => {
    getDataUser(user_id).then(({ data }) => {
      setUserData(data.user[0]);
    });
    getBrands(user_id).then(({ data }) => {
      setBrands(data.brands);
    });
    getTeam(user_id).then(({ data }) => {
      setTeam(data.team);
    });
    getActiveProjects(user_id).then(({ data }) => {
      setActiveProjects(data.response);
    });
    getFinishProjects(user_id).then(({ data }) => {
      console.log("aqui-", data);
      setFinishProjects(data.finish_projects);
    });
    getAttached(user_id).then(({ data }) => {
      setAttached(data.attached);
    });
  }, []);

  const properties = {
    redirectTo,
    menuActive,
    setMenuActive,
    setIsAuthenticated,
    location,
    tourStep,
    setTourStep,
    tourActive,
    setTourActive,
    userData,
    modalBuyCredits,
    setModalBuyCredit,
    dataModals,
    setDataModals,
    user_id,
  };

  return <View {...properties} />;
}

export default Index;
