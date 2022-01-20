import React from "react";
import { FORM_INPUTS } from "../../../constats";
import PageTitle from "../../../page-title";
import { Icons } from "../../../icons";
import "./styles.scss";

function View({ redirectToService, redirectToSelection }) {
  return (
    <div className="form-page page">
      <div className="step flex">{Icons("step_form")}</div>

      <PageTitle
        title={"Formulario"}
        /* price={serviceData?.price?.basic}
        modalPriceTotal={modalPriceTotal} */
      />

      <section className="subtitle">
        <p>
          Contesta las siguientes preguntas por medio de
          <span className="text-purple"> texto</span>,
          <span className="text-purple"> voz</span>, y/o un video. También
          puedes
          <span className="text-purple"> adjuntar</span> un archivo si lo
          deseas.
        </p>
        <p>
          Todos los campos son opcionales excepto el
          <span className="text-purple"> nombre del proyecto</span>.
        </p>
        <p>
          Entre más información nos brindes, mejor será todo el proceso de
          desarrollo de tu requerimiento.
        </p>
      </section>

      <section className="content">
        <div className="columns">
          <div className="column">
            <div>
              <label for="name">{FORM_INPUTS.name.label}</label>
              <input {...FORM_INPUTS.name} id="name" />
            </div>
          </div>
          <div className="column"></div>
        </div>
        <div className="columns">
          <div className="column">
            <div>
              <label for="public">{FORM_INPUTS.public.label}</label>
              <textarea {...FORM_INPUTS.public} id="public" />
            </div>
          </div>
          <div className="column">
            <div>
              <label for="colors">{FORM_INPUTS.palete_colors.label}</label>
              <textarea {...FORM_INPUTS.palete_colors} id="colors" />
            </div>
          </div>
        </div>

        <p>
          Adjunta los archivos y
          <span className="text-purple"> referencias/ejemplos</span> que creas
          que nos pueden ayudar a diseñar tu requerimiento.
        </p>

        <section className="section-buttons flex">
          <div
            className="button-blue flex" /* onClick={() => redirectToService()} */
          >
            {Icons("clip_white")}
            Adjuntar
          </div>
        </section>

        <div className="columns">
          <div className="column">
            <div>
              <label for="reference">{FORM_INPUTS.reference.label}</label>
              <textarea {...FORM_INPUTS.reference} id="reference" />
            </div>
          </div>
          <div className="column"></div>
        </div>

        <div className="more flex">
          <div className="icon-add flex">{Icons("add_white")}</div>
          <p>Adjuntar más archivos/referencias/ejemplos/etc.</p>
        </div>
      </section>

      <section className="section-buttons flex">
        <div className="button" onClick={() => redirectToService()}>
          Atrás
        </div>
        <div className="button" onClick={() => redirectToSelection()}>
          Continuar
        </div>
      </section>
    </div>
  );
}

export default View;
