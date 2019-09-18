import React from "react";
import uuid from "uuid";
import { useState } from "react";

//creating initial values
const initialTeamList = [];
const initialTeamForm = {
  name: "",
  email: "",
  role: ""
};

//creating a functional component called Container
export function Container() {
  // what state does this app need
  // in order to display friends,
  // and keep track of the state of the form?
  const [teamsList, setTeamsList] = useState(initialTeamList);
  const [teamForm, setTeamForm] = useState(initialTeamForm);

  const onNameChange = e => {
    // we have the new value for the name input inside e.target.value
    setTeamForm({
      name: e.target.value,
      email: teamForm.email,
      role: teamForm.role
    });
  };

  const onEmailChange = e => {
    // we have the new value for the age input inside e.target.value
    setTeamForm({
      name: teamForm.name,
      email: e.target.value,
      role: teamForm.role
    });
  };

  const onRoleChange = e => {
    // we have the new value for the age input inside e.target.value
    setTeamForm({
      name: teamForm.name,
      email: teamForm.email,
      role: e.target.value
    });
  };

  const onFormSubmit = e => {
    // we DO need the event object
    e.preventDefault();
    const newTeamMember = {
      id: uuid(),
      name: teamForm.name,
      email: teamForm.email,
      role: teamForm.role
    };
    const newTeamList = teamsList.concat(newTeamMember);
    setTeamsList(newTeamList);
    setTeamForm(initialTeamForm);
  };

  return (
    <div className="container-hello-world">
      <Form
        onNameChange={onNameChange}
        onEmailChange={onEmailChange}
        onRoleChange={onRoleChange}
        teamForm={teamForm}
        onFormSubmit={onFormSubmit}
      />
      {teamsList.map(team => (
        <h5 key={team.id}>
          My name is {team.name} and I am the {team.role}. Email Address is
          {team.email}
        </h5>
      ))}
    </div>
  );
}

function Form(props) {
  // what data does the form need to populate itself?
  // what callbacks does the form need to perform
  // its basic functions of updating fields and submitting?
  const { onNameChange, onEmailChange, onRoleChange, onFormSubmit } = props;
  const { name, email, role } = props.teamForm;
  const isDisabled = () => {
    if (!name || !email || !role) {
      return true;
    }
    return false;
  };

  return (
    <form>
      <label htmlFor="nameInput">Name</label>
      <input
        maxLength={50}
        value={name}
        onChange={onNameChange}
        id="nameInput"
        type="text"
      />

      <label htmlFor="roleInput">Role</label>
      <input value={role} onChange={onRoleChange} id="roleInput" type="text" />

      <label htmlFor="emailInput">Email</label>
      <input
        value={email}
        onChange={onEmailChange}
        id="emailInput"
        type="email"
      />

      <button disabled={isDisabled()} onClick={onFormSubmit}>
        submit
      </button>
    </form>
  );
}
