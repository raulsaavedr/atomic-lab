import React, { useState } from "react";
import PageTitle from "../page-title";
import { STATUS_TABLES, USER_DATA, STATUS_ID_TABLES } from "../constats";
import { Icons } from "../icons";

import "./styles.scss";

function View({ data }) {
  const [filterProject] = useState([
    USER_DATA.active_projects.filter((project) => project.id === data.id)[0],
  ]);

  var rating = {};

  function rate(value) {
    rating.starValue = Number(value);
  }

  function reset() {
    var elements = document.querySelectorAll(".stars input[name=stars-1]");
    elements.forEach(function (element) {
      element.checked = false;
    });

    rating = {};
  }

  return (
    <div className="page status-projects">
      <PageTitle page={"status"} user={true} title="Estado detallado" />

      <h3>{data.name}</h3>
      <div className="table-data">
        <table>
          <thead>
            <tr>
              {STATUS_TABLES().map((item, index) => (
                <th key={index}>
                  {item.isActive && (
                    <div className="th-flex flex">
                      <p>{item.title}</p>
                      <p className="flex">{Icons("help_circle")}</p>
                    </div>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filterProject[0].status_test.map((status, index) => (
              <tr key={index}>
                <td>{status.title}</td>
                <td>{status.date}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="qualify-experience">
        <div className="qualify-experience-title flex">
          <h3>Califica tu experiencia</h3>
          <p className="flex">{Icons("help_circle")}</p>

          <div class="stars">
            <input
              type="radio"
              name="stars-1"
              id="stars-1-0"
              value="5"
              onclick={() => rate(this.value)}
            />
            <label for="stars-1-0"></label>
            <input
              type="radio"
              name="stars-1"
              id="stars-1-1"
              value="4"
              onclick={() => rate(this.value)}
            />
            <label for="stars-1-1"></label>
            <input
              type="radio"
              name="stars-1"
              id="stars-1-2"
              value="3"
              onclick={() => rate(this.value)}
            />
            <label for="stars-1-2"></label>
            <input
              type="radio"
              name="stars-1"
              id="stars-1-3"
              value="2"
              onclick={() => rate(this.value)}
            />
            <label for="stars-1-3"></label>
            <input
              type="radio"
              name="stars-1"
              id="stars-1-4"
              value="1"
              onclick={() => rate(this.value)}
            />
            <label for="stars-1-4"></label>
          </div>
        </div>
        <div className="comments">
          <p>Escribe tu comentario</p>
          <textarea
            className="comments-textarea"
            name="textarea"
            rows="10"
            cols="50"
          ></textarea>
          <section className="section-buttons flex">
            <div className="button">Enviar</div>
          </section>
        </div>

        <section className="section-buttons flex">
          <div className="button">Atrás</div>
        </section>
      </div>
    </div>
  );
}

export default View;
