import React, { useEffect, useContext, useState } from "react";
import DataContext from "../../data-context";
import { useNavigate, useLocation } from "react-router-dom";
import { getDataUser } from "../../services";
import View from "./view";

function Index({ setIsAuthenticated }) {

  const { dataAll, setDataAll } = useContext(DataContext);

  const navigate = useNavigate();
  const [menuActive, setMenuActive] = useState(false);
  const [tourStep, setTourStep] = useState(0);
  const [tourActive, setTourActive] = useState(true);

  let location = useLocation();

  const redirectTo = (item) => {
    if (!tourStep) {
      navigate(item);
      setMenuActive(false);
    }
  };

  useEffect(() => {
    getDataUser(JSON.parse(sessionStorage.getItem('atomiclab-user')).user_id).then((data) => {
      setDataAll(data.data);
    });
  }, [])


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
    dataAll
  };

  return <View {...properties} />;
}

export default Index;
