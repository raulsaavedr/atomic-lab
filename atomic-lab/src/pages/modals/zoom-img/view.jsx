import React from "react";

import { useEffect, useRef, useState } from "react";
import { Annotorious } from "@recogito/annotorious";

import "../../modals/styles.scss";
import "./styles.scss";

import "@recogito/annotorious/dist/annotorious.min.css";

function View({ close, data }) {
  // Ref to the image DOM element
  const imgEl = useRef();

  // The current Annotorious instance
  const [anno, setAnno] = useState();

  const test = [
    {
      type: "Annotation",
      body: [
        {
          type: "TextualBody",
          value: "Quitar Arbol",
          purpose: "commenting",
        },
        {
          type: "TextualBody",
          value: "tag quitar arbol",
          purpose: "tagging",
        },
      ],
      target: {
        source: "https://i.postimg.cc/jjKJWHdq/nature-3082832-480.jpg",
        selector: {
          type: "FragmentSelector",
          conformsTo: "http://www.w3.org/TR/media-frags/",
          value: "xywh=pixel:456,115,74,120",
        },
      },
      "@context": "http://www.w3.org/ns/anno.jsonld",
      id: "#56328c24-ab26-4995-a23e-69118bddae91",
    },
  ];

  // Init Annotorious when the component
  // mounts, and keep the current 'anno'
  // instance in the application state
  useEffect(() => {
    let annotorious = null;

    if (imgEl.current) {
      // Init
      annotorious = new Annotorious({
        image: imgEl.current,
      });

      annotorious.loadAnnotations(test);
      annotorious.setAnnotations(test);

      // Attach event handlers here
      annotorious.on("createAnnotation", (annotation) => {
        console.log("created-", annotation);
      });

      annotorious.on("updateAnnotation", (annotation, previous) => {
        console.log("updated-", annotation, previous);
      });

      annotorious.on("deleteAnnotation", (annotation) => {
        console.log("deleted-", annotation);
      });
    }

    // Keep current Annotorious instance in state
    setAnno(annotorious);

    // Cleanup: destroy current instance
    return () => annotorious.destroy();
  }, []);

  const save = () => {
    const annotations = anno.getAnnotations();

    console.log("----", annotations);
  };

  return (
    <div id="myModal" className="modal-zoom-img">
      <div className="modal-content">
        <div>
          <button onClick={() => save()}>Guardar</button>
          <button onClick={() => close(false)}>Cerrar</button>
        </div>

        <img ref={imgEl} src={data} alt={data} id="123" />
      </div>
    </div>
  );
}

export default View;
