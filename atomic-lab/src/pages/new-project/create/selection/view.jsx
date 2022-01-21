import React from "react";
import PageTitle from "../../../page-title";
import { Icons } from "../../../icons";
import { FORM_INPUTS } from "../../../constats";
import "../styles.scss";
import "./styles.scss";

function View({
  redirectToForm,
  redirectToSummary,
  selectedFile,
  preview,
  onSelectFile,
  textPreview,
  setTextPreview,
}) {
  return (
    <div className="selection-page page">
      <div className="step flex">{Icons("step_selection")}</div>

      <PageTitle
        title={"Selección"}
        /* price={serviceData?.price?.basic}
        modalPriceTotal={modalPriceTotal} */
      />

      <section className="content">
        <div className="columns">
          <div className="column">
            <div className="column-item">
              <label for="idea">{FORM_INPUTS.idea.label}</label>
              <textarea {...FORM_INPUTS.idea} id="idea" />
            </div>
          </div>
          <div className="column"></div>
        </div>
        <div className="columns">
          <div className="column">
            <div className="post-example">
              <div className="post-header flex">
                <div className="title flex">
                  <div className="circle"></div>
                  <div>@username</div>
                </div>
                <div className="icon-menu-h">{Icons("icon_menu_h")}</div>
              </div>
              <div className="post-content">
                {selectedFile ? (
                  <img className="img-user" src={preview} />
                ) : (
                  Icons("icon_img_post")
                )}
              </div>
              <div className="post-footer">
                <div className="footer-top">{Icons("icons_post")}</div>
                <p>Views</p>
                <p>{textPreview ? textPreview : "Descripción #hashtags"}</p>
              </div>
            </div>
          </div>
          <div className="column">
            <div>
              <label for="image_include">
                {FORM_INPUTS.image_include.label}
              </label>
              <section className="section-buttons flex">
                <div
                  className="button-blue flex" /* onClick={() => redirectToService()} */
                >
                  {Icons("clip_white")}
                  Adjuntar
                </div>
                <div>
                  <input type="file" onChange={onSelectFile} />
                </div>
              </section>
              <textarea {...FORM_INPUTS.image_include} id="image_include" />
            </div>
            <div>
              <label for="text_include">{FORM_INPUTS.text_include.label}</label>
              <section className="section-buttons flex">
                <div
                  className="button-blue flex" /* onClick={() => redirectToService()} */
                >
                  {Icons("clip_white")}
                  Adjuntar
                </div>
              </section>
              <textarea
                {...FORM_INPUTS.text_include}
                id="text_include"
                onChange={(e) => setTextPreview(e.target.value)}
              />
            </div>
          </div>
          <div className="column"></div>
        </div>

        <div className="add flex">
          {Icons("add_white")}
          <p>Añade una nueva publicación a ésta solicitud </p>
        </div>
      </section>

      <section className="footer">
        <section className="section-buttons flex">
          <div className="button" onClick={() => redirectToForm()}>
            Atrás
          </div>
          <div className="button" onClick={() => redirectToSummary()}>
            Continuar
          </div>
        </section>
      </section>
    </div>
  );
}

export default View;
