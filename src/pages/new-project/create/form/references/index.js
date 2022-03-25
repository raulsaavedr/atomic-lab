import React, { useState } from "react";
import View from "./view";

function Index({ data, references, setReferences }) {


  const [referenceFile, setReferenceFile] = useState("");

  const [referenceDescription, setReferenceDescription] = useState("")




  const properties = { data, references, setReferences, referenceFile, setReferenceFile, referenceDescription, setReferenceDescription };

  return <View {...properties} />;
}

export default Index;
