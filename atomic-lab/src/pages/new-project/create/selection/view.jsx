import React, { useContext, useState } from "react";
import PageTitle from "../../../page-title";
import { Icons } from "../../../icons";
import { FORM_INPUTS } from "../../../constats";
import CreateFormContext from "../../../../create-form-context";
import Post from "./post";
import "../styles.scss";
import "./styles.scss";

function View({ selectedImg, onSelectFile, setStep, step }) {
  const data = useContext(CreateFormContext);
  const [formData, setFormData] = useContext(CreateFormContext);

  const [post, setPost] = useState(
    data[0].post ? data[0].post : [{ id: 1, objetive: "", text: "" }]
  );
  const [postCount, setPostCount] = useState(
    data[0].post ? data[0].post[data[0].post.length - 1].id : 1
  );

  console.log("DATA", data);

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
            (item) =>
              item.id >= 1 && (
                <Post
                  id={item.id}
                  post={post}
                  setPost={setPost}
                  selectedImg={selectedImg}
                  onSelectFile={onSelectFile}
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
          <div
            className="button"
            onClick={() => {
              setStep(step + 1);
              setFormData({
                ...formData,
                post: post,
                /*  img_array: selectedImgArray, */
              });
            }}
          >
            Continuar
          </div>
        </section>
      </section>
    </div>
  );
}

export default View;
