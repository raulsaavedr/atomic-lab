import React from "react";
import ReactiveButton from "reactive-button";
import "../../modals/styles.scss";
import "./styles.scss";

function View({
  close,
  assignDesigner,
  listDesigner,
  teamFilter,
  deleteDesigner,
  userData,
}) {
  return (
    <div id="myModal" className="modal designer-assign">
      <div className="modal-content">
        <h3>Diseñadores asignados</h3>

        {userData.rol_id === 8 && (
          <select
            className="select"
            name="level"
            id="level"
            onChange={(e) => assignDesigner(e.target.value)}
          >
            <option disabled selected>
              Asigna un diseñador
            </option>

            {teamFilter
              .filter(
                (user) =>
                  !listDesigner?.some((user_list) => user_list.id === user.id)
              )
              .map((user_data, index) => (
                <option key={index} value={user_data.id}>
                  {user_data?.last_name !== null
                    ? user_data?.name + " " + user_data?.last_name
                    : user_data?.name}
                </option>
              ))}
          </select>
        )}

        <div className="tags flex">
          {listDesigner?.map((user_data, index) => (
            <div key={index} className="tag flex">
              {userData.rol_id !== 3 && (
                <div
                  className="delete"
                  onClick={() =>
                    deleteDesigner(user_data.id, user_data.union_id)
                  }
                >
                  x
                </div>
              )}
              <p>
                {user_data?.last_name !== null
                  ? user_data?.name + " " + user_data?.last_name
                  : user_data?.name}
              </p>
            </div>
          ))}
        </div>

        <section className="footer">
          <section className="section-buttons flex">
            <div className="button" onClick={() => close(false)}>
              Cancelar
            </div>

            {/*  {!name || !email || !rol ? (
              <div className="button-gray">Invitar</div>
            ) : (
              <div className="button-reactive">
                <ReactiveButton
                  className="button"
                  buttonState={state}
                  onClick={() => onClickHandler()}
                  shadow={false}
                  loadingText={"Invitando..."}
                  outline={false}
                  rounded={false}
                  block={false}
                  idleText={"Invitar"}
                />
              </div>
            )} */}
          </section>
        </section>
      </div>
    </div>
  );
}

export default View;
