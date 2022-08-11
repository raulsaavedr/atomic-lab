import React, { useContext, useState } from "react";
import PageTitle from "../../../page-title";
import { Icons } from "../../../icons";
import { FORM_INPUTS } from "../../../constants";
import CreateFormContext from "../../../../create-form-context";
import Post from "./post";
import "../styles.scss";
import "./styles.scss";

function View({ selectedImg, onSelectFile, setStep, step, onSelectText }) {
  const data = useContext(CreateFormContext);
  const [formData, setFormData] = useContext(CreateFormContext);

  const [post, setPost] = useState(
    data[0].post ? data[0].post : [{ id: 1, objetive: "", text: "" }]
  );
  const [postCount, setPostCount] = useState(
    data[0].post ? data[0].post[data[0].post.length - 1].id : 1
  );

  return (
    <div className="selection-page page">
      <div className="step flex">{Icons("step_selection")}</div>

      <PageTitle title={"Contenido"} />

      <section className="subtitle">
        <p>
          Ingresa la información que tengas para cada una de las publicaciones a
          diseñar
        </p>
      </section>

      <section className="content">
        <div className="columns">
          <div className="column">
            <div className="column-item">
              <label htmlFor="idea">
                {FORM_INPUTS.idea.label}{" "}
                {FORM_INPUTS.idea.required && "(Requerido)"}
              </label>
              <textarea
                {...FORM_INPUTS.idea}
                id="idea"
                onChange={(e) => {
                  setFormData({ ...formData, idea_post: e.target.value });
                }}
              >
                {data[0].idea_post ? data[0].idea_post : ""}
              </textarea>
            </div>
          </div>
          <div className="column"></div>
        </div>

        {post
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map(
            (item, index) =>
              item.id >= 1 && (
                <Post
                  key={index}
                  id={item.id}
                  post={post}
                  setPost={setPost}
                  selectedImg={selectedImg}
                  onSelectFile={onSelectFile}
                  onSelectText={onSelectText}
                />
              )
          )}

        <div
          className="add flex"
          onClick={() => {
            setPost((post) => [
              ...post,
              { id: postCount + 1, objetive: "", text: "" },
            ]);
            setPostCount(postCount + 1);
          }}
        >
          {Icons("add_white")}
          <p>Añade una nueva publicación a ésta solicitud </p>
        </div>
      </section>

      <section className="footer">
        <section className="section-buttons flex">
          <div className="button" onClick={() => setStep(step - 1)}>
            Atrás
          </div>

          {!formData.idea_post || !post ? (
            <div className="button-gray">Continuar</div>
          ) : (
            <div
              className="button"
              onClick={() => {
                setStep(step + 1);
                setFormData({
                  ...formData,
                  post: post,
                });
              }}
            >
              Continuar
            </div>
          )}
        </section>
      </section>
    </div>
  );
}

export default View;
