import React from "react";
import { Icons } from "../../icons";
import "../../modals/styles.scss";
import "./styles.scss";

function View({ close, data }) {
  return (
    <div id="myModal" className="modal help">
      <div className="modal-content">
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
                    <p className="button-blue">
                      <a href="tel:+573152253744" target="_blank" rel="noopener noreferrer">Teléfono</a>
                    </p>
                    <p>+57 315 225 37 44</p>
                  </div>
                </td>
                <td>
                  <div className="flex">
                    <div className="icon">{Icons("email")} </div>
                    <p className="button-blue">
                      <a href="mailto:info@atomiclabco.com">Email</a>
                    </p>
                    <p>info@atomiclabco.com</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="flex">
                    <div className="icon">{Icons("whatsapp")} </div>
                    <p className="button-blue">
                      <a href="https://wa.me/573016541790" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                    </p>
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
                    <p className="button-blue">
                      <a href="https://www.atomiclabco.com/#FAQ" target="_blank" rel="noopener noreferrer">
                        FAQ - Preguntas Frecuentes
                      </a>
                    </p>
                  </div>
                </td>
                <td>
                  <div className="flex">
                    <div className="icon">{Icons("blog")} </div>
                    <p className="button-blue">
                      <a href="https://www.atomiclabco.com/blog" target="_blank" rel="noopener noreferrer">
                        Blog
                      </a>
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="flex">
                    <div className="icon">{Icons("form")} </div>
                    <p className="button-blue">
                      <a href="https://www.atomiclabco.com/#Contact" target="_blank" rel="noopener noreferrer">
                        Formulario
                      </a>
                    </p>
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

        <section className="footer-modal flex">
          <div class="button" onClick={() => close()}>Atrás</div>
          <section className="section-buttons flex">
            <div className="icons">
              <a href="https://www.linkedin.com/company/atomiclab" target="_blank" rel="noopener noreferrer">
                {Icons("linkedin_black")}
              </a>
              <a href="https://www.linkedin.com/company/atomiclab" target="_blank" rel="noopener noreferrer">
                {Icons("twitter_black")}
              </a>
              <a href="https://www.linkedin.com/company/atomiclab" target="_blank" rel="noopener noreferrer">
                {Icons("facebook_black")}
              </a>
              <a href="https://www.linkedin.com/company/atomiclab" target="_blank" rel="noopener noreferrer">
                {Icons("instagram_black")}
              </a>
            </div>
          </section>
          <div className="button">Enviar</div>
        </section>
      </div>
    </div>
  );
}

export default View;
