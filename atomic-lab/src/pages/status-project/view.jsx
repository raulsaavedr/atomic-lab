import React from "react";
import PageTitle from "../page-title";
import { STATUS_TABLES } from "../constats";
import { Icons } from "../icons";

import "./styles.scss";

function View({ filterProject, rate, reset }) {
  return (
    <div className="page status-projects">
      <PageTitle page={"status"} user={true} title="Estado detallado" />

      <h3>
        {filterProject[0] && JSON.parse(filterProject[0].values).name_project}
      </h3>
      <div className="table-data">
        <table>
          <thead>
            <tr>
              <th></th>
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
            <tr>
              <td>
                {Icons(
                  filterProject[0].status >= 1
                    ? "check_blue"
                    : "check_blue_none"
                )}
                <div className="line-td"></div>
              </td>
              <td>Proyecto Iniciado</td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td>
                {Icons(
                  filterProject[0].status >= 2
                    ? "check_blue"
                    : "check_blue_none"
                )}
              </td>
              <td>Proyecto Asignado</td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td>
                {Icons(
                  filterProject[0].status >= 3
                    ? "check_blue"
                    : "check_blue_none"
                )}
              </td>
              <td>Proyecto Cargado</td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td>
                {Icons(
                  filterProject[0].status >= 4
                    ? "check_blue"
                    : "check_blue_none"
                )}
              </td>
              <td>Proyecto Finalizado</td>
              <td></td>
              <td></td>
            </tr>

            {/*  {filterProject.map((status, index) => (
              <tr key={index}>
                <td>Proyecto Iniciado</td>
                <td>Proyecto Asignado</td>
                <td>Proyecto Cargado</td>
                <td>Proyecto Finalizado</td>
              </tr>
            ))} */}
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
