import React, { useState, useContext, useEffect } from "react";
import { Icons } from "../../../../icons";
import { FORM_INPUTS } from "../../../../constats";
import CreateFormContext from "../../../../../create-form-context";
import "./styles.scss";
import { filter } from "domutils";

function View({
  id,
  post,
  setPost,
  selectedImg,
  setSelectedImg,
  preview,
  onSelectFile,
  selectedImgArray,
}) {
  const data = useContext(CreateFormContext);

  const formDataImg = new FormData();
  formDataImg.append("img", selectedImg);

  const [objetive, setObjetive] = useState(
    post.filter((item) => item.id === id)[0]?.objetive ||
      data[0]?.post?.filter((item) => item.id === id)[0]?.objetive
  );
  const [textPreview, setTextPreview] = useState(
    post.filter((item) => item.id === id)[0]?.text ||
      data[0]?.post?.filter((item) => item.id === id)[0]?.text
  );

  return (
    <div className="columns upload-file">
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
            {console.log(
              data[0].post &&
                data[0].post.filter((item) => item.id === id)[0].local_img
            )}

            {selectedImgArray.filter((item) => item.id === id)[0]?.object ||
            data[0]?.img_array?.filter((item) => item.id === id)[0]?.object ? (
              <img
                className="img-user"
                src={
                  selectedImgArray.filter((item) => item.id === id)[0]
                    ?.object ||
                  data[0]?.img_array?.filter((item) => item.id === id)[0]
                    ?.object
                }
                alt="preview"
              />
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
          <label for={`reference-${id}`} className="button-blue flex">
            {Icons("clip_white")}
            {selectedImgArray.filter((item) => item.id === id)[0]?.name
              ? selectedImgArray.filter((item) => item.id === id)[0]?.name
              : "Adjuntar"}
          </label>

          <input
            {...FORM_INPUTS.reference_add}
            id={`reference-${id}`}
            onChange={(e) => {
              onSelectFile(e, id);
              setPost(post.filter((item) => item.id !== id));
              setPost((post) => [
                ...post,
                {
                  id: id,
                  text: textPreview,
                  objetive: objetive,
                  file_img: formDataImg,
                },
              ]);
            }}
          />

          <textarea
            {...FORM_INPUTS.image_include}
            id="image_include"
            onChange={(e) => {
              setObjetive(e.target.value);
              setPost(post.filter((item) => item.id !== id));
              setPost((post) => [
                ...post,
                {
                  id: id,
                  text: textPreview,
                  objetive: objetive,
                  file_img: formDataImg,
                },
              ]);
            }}
          >
            {data[0]?.post?.filter((item) => item.id === id)[0]?.objetive
              ? data[0]?.post?.filter((item) => item.id === id)[0].objetive
              : ""}
          </textarea>
        </div>
        <div>
          <label for="text_include">{FORM_INPUTS.text_include.label}</label>
          <section className="section-buttons flex">
            <div className="button-blue flex">
              {Icons("clip_white")}
              Adjuntar
            </div>
          </section>
          <textarea
            {...FORM_INPUTS.text_include}
            id="text_include"
            onChange={(e) => {
              setTextPreview(e.target.value);
              setPost(post.filter((item) => item.id !== id));
              setPost((references) => [
                ...references,
                {
                  id: id,
                  objetive: objetive,
                  text: e.target.value,
                  file_img: formDataImg,
                },
              ]);
            }}
          >
            {data[0]?.post?.filter((item) => item.id === id)[0]?.text
              ? data[0]?.post?.filter((item) => item.id === id)[0].text
              : ""}
          </textarea>
        </div>
      </div>
      <div className="column"></div>
    </div>
  );
}

export default View;
