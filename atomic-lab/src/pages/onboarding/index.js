import React, { useContext, useState } from "react";
import DataContext from "../../data-context";
import { useNavigate } from "react-router-dom";
import { updateOnboardingData, updateOnboardingView } from "../../services"
import View from "./view";

function Index() {
  const navigate = useNavigate();

  const { userData, setOnboarding } = useContext(DataContext);

  const [nameOrganization, setNameOrganization] = useState(null)
  const [urlOrganization, setUrlOrganization] = useState(null)
  const [movil, setMovil] = useState(null)

  const updateDataOnboarding = () => {

    const dataBody = {
      name_organization: nameOrganization,
      url_organizaton: urlOrganization,
      movil: movil
    }

    updateOnboardingData({ user_id: userData.id, data: dataBody }).then((res) => {

      updateOnboardingView({ user_id: userData.id, value: 0 })


      setOnboarding(false);

      redirectTo("/");

    })
      .catch((error) => { })


  }

  const redirectTo = (item) => {
    navigate(item);
  };

  const properties = { redirectTo, setOnboarding, nameOrganization, setNameOrganization, urlOrganization, setUrlOrganization, movil, setMovil, updateDataOnboarding };

  return <View {...properties} />;
}

export default Index;
