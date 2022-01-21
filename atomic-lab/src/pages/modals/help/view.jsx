import React from "react";
import { Icons } from "../../icons";
import "../../modals/styles.scss";
import "./styles.scss";

function View({ close, data }) {
  return (
    <div id="myModal" class="modal help" onClick={() => close()}>
      <div class="modal-content">
        <h3>Ayuda</h3>

        <p>
          Si tienes problemas o dudas solicita ayuda por medio de alguna de las
          siguientes opciones:
        </p>

        <div className="info">
          <table>
            <tbody>
              <tr>
                <td>
                  <div className="flex">
                    <div className="icon">{Icons("tel")}</div>
                    <p className="text-blue">Teléfono</p>
                    <p>301 652 14 88</p>
                  </div>
                </td>
                <td>
                  <div className="flex">
                    <div className="icon">{Icons("email")} </div>
                    <p className="text-blue">Email</p>
                    <p>info@atomiclabco.com</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="flex">
                    <div className="icon">{Icons("whatsapp")} </div>
                    <p className="text-blue">WhatsApp</p>
                    <p>301 654 17 90</p>
                  </div>
                </td>
                <td>
                  <div className="flex">
                    <div className="icon">{Icons("video_call")} </div>
                    <p className="button-gray">Videollamada</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="flex">
                    <div className="icon">{Icons("idea")} </div>
                    <p className="button-blue">FAQ - Preguntas Frecuentes</p>
                  </div>
                </td>
                <td>
                  <div className="flex">
                    <div className="icon">{Icons("blog")} </div>
                    <p className="button-gray">Blog</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="flex">
                    <div className="icon">{Icons("form")} </div>
                    <p className="text-blue">Formulario</p>
                  </div>
                </td>
                <td>
                  <div className="flex">
                    <div className="icon">{Icons("chat")} </div>
                    <p className="button-gray">Chat</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <label htmlFor="questions">
            ¿Cuáles son tus dudas?{Icons("help_circle")}
          </label>
          <p>
            <textarea
              className="input-texarea"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </p>
        </div>

        <section className="footer-modal">
          <section className="section-buttons flex">
            <div className="icons">
              {Icons("linkedin_black")}
              {Icons("twitter_black")}
              {Icons("facebook_black")}
              {Icons("twitter_black")}
              {Icons("instagram_black")}
            </div>

            <div className="button">Enviar</div>
          </section>
        </section>
      </div>
    </div>
  );
}

export default View;
