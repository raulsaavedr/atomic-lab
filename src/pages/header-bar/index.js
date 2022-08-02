import React, { useEffect, useContext, useState } from "react";
import DataContext from "../../data-context";
import { useNavigate, useLocation } from "react-router-dom";
import {
  getBrands,
  getTeam,
  getAttached,
  getAllProjects,
  updateTourView,
  getNotifications,
} from "../../services";
import View from "./view";

function Index({ setIsAuthenticated }) {
  const {
    notifications,
    setNotifications,
    userData,
    setBrands,
    setTeam,
    setAttached,
    setAllProjects,
    tourActive,
    setTourActive,
  } = useContext(DataContext);

  const navigate = useNavigate();
  const [menuActive, setMenuActive] = useState(false);
  const [modalBuyCredits, setModalBuyCredit] = useState(false);
  const [dataModals, setDataModals] = useState([]);
  const [tourStep, setTourStep] = useState(0);
  const [notificationsView, setNotificationsView] = useState(false);

  const [modalHelp, setModalHelp] = useState(false);

  let location = useLocation();

  const redirectTo = (item) => {
    if (!tourStep) {
      navigate(item);
      setMenuActive(false);
    }
  };

  const user_id = JSON.parse(sessionStorage?.getItem("atomiclab-user")).user_id;

  useEffect(() => {
    getNotifications(user_id).then(({ data }) => {
      setNotifications(data.response);
    });
    getBrands(user_id).then(({ data }) => {
      setBrands(data.brands);
    });
    getTeam(user_id).then(({ data }) => {
      setTeam(data.team);
    });
    getAttached(user_id).then(({ data }) => {
      setAttached(data.attached);
    });
    getAllProjects(user_id).then(({ data }) => {
      setAllProjects(data.response);
    });
  }, [user_id, setNotifications, setBrands, setTeam, setAttached, setAllProjects]);

  const updateTour = () => {
    updateTourView({ user_id: user_id, value: 0 });
  };

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
    modalHelp,
    setModalHelp,
    updateTour,
    notifications,
    notificationsView,
    setNotificationsView,
  };

  return <View {...properties} />;
}

export default Index;
