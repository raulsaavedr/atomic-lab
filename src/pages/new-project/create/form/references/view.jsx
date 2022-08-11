import React from "react";
import { Icons } from "../../../../icons";
import { FORM_INPUTS } from "../../../../constants";
import "./styles.scss";

function View({
  data,
  references,
  setReferences,
  referenceFile,
  setReferenceFile,
  referenceDescription,
  setReferenceDescription,
}) {
  return (
    <div className="upload-file">
      <label
        htmlFor={`reference-${data && data.id}`}
        className="button-blue flex"
      >
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
          setReferences(references.filter((ref) => ref.id !== data.id));
          setReferences((references) => [
            ...references,
            {
              id: data.id,
              text: referenceDescription,
              name_file: referenceFile?.name,
              file: referenceFile,
            },
          ]);
        }}
      />

      <div className="columns">
        <div className="column">
          <div>
            <label htmlFor="reference">{FORM_INPUTS.reference.label}</label>
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
                    name_file: referenceFile?.name,
                    file: referenceFile,
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
