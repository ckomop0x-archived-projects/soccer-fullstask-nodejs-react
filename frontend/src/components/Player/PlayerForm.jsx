import React, { useRef } from "react";
import { getPlayers, savePlayer } from "../../helpers";

const PlayerForm = ({ setPlayers }) => {
  const formRef = useRef(null);
  const onSubmit = async event => {
    event.preventDefault();
    const { firstName, lastName, email } = event.target.elements;

    const playerInfo = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value
    };

    await savePlayer(playerInfo);
    getPlayers()
      .then(players => setPlayers(players))
      .catch(e => console.log(e));
    formRef.current.reset();
  };

  return (
    <div className="row">
      <h2 className="center">Add a new player</h2>
      <form className="col s12" onSubmit={onSubmit} ref={formRef}>
        <div className="col s3">Base player information</div>
        <div className="col s9">
          <div className="row">
            <div className="input-field col s9">
              <input
                // placeholder="Placeholder"
                id="first_name"
                type="text"
                className="validate"
                name="firstName"
              />
              <label htmlFor="first_name">First Name</label>
            </div>
            <div className="input-field col s9">
              <input
                id="last_name"
                type="text"
                className="validate"
                name="lastName"
              />
              <label htmlFor="last_name">Last Name</label>
            </div>
            <div className="input-field col s9">
              <input
                id="email"
                type="email"
                className="validate"
                name="email"
              />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Add player
            <i className="material-icons right">send</i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default PlayerForm;
