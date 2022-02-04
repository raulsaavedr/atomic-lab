import React, { useState } from "react";
import { Icons } from "../../../../icons";
import { FORM_INPUTS } from "../../../../constats";
import "./styles.scss";

function View({ data, references, setReferences }) {
  const [referenceFile, setReferenceFile] = useState("");

  const formDataFile = new FormData();
  formDataFile.append("data", referenceFile);

  return (
    <div className="upload-file">
      <label for={`reference-${data && data.id}`} className="button-blue flex">
        {Icons("clip_white")}
        {referenceFile?.name
          ? referenceFile?.name
          : data.name_file
          ? data.name_file
          : "Adjuntar"}
      </label>

      <input
        {...FORM_INPUTS.reference_add}
        id={`reference-${data?.id}`}
        onChange={(e) => {
          setReferenceFile(e.target.files[0]);
        }}
      />

      <div className="columns">
        <div className="column">
          <div>
            <label for="reference">{FORM_INPUTS.reference.label}</label>
            <textarea
              {...FORM_INPUTS.reference}
              id="reference"
              onChange={(e) => {
                setReferences(references.filter((ref) => ref.id !== data.id));
                setReferences((references) => [
                  ...references,
                  {
                    id: data.id,
                    text: e.target.value,
                    content: formDataFile,
                    name_file: referenceFile?.name,
                  },
                ]);
              }}
            >
              {data?.text}
            </textarea>
          </div>
        </div>
        <div className="column"></div>
      </div>
    </div>
  );
}

export default View;
