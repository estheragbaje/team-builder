import React from "react";
import uuid from "uuid";
import { useState } from "react";
import styled from "styled-components";

//creating initial values
const initialTeamList = [];
const initialTeamForm = {
  name: "",
  email: "",
  password: "",
  role: ""
};

const StyledOutputText = styled.h5`
  font-size: 20px;
  text-align: left;
  padding-left: 40px;
  color: #484848;
`;

const StyledDivFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
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
      password: teamForm.password,
      role: teamForm.role
    });
  };

  const onEmailChange = e => {
    // we have the new value for the age input inside e.target.value
    setTeamForm({
      name: teamForm.name,
      email: e.target.value,
      password: teamForm.password,
      role: teamForm.role
    });
  };

  const onPasswordChange = e => {
    // we have the new value for the age input inside e.target.value
    setTeamForm({
      name: teamForm.name,
      email: teamForm.email,
      password: e.target.value,
      role: teamForm.role
    });
  };

  const onRoleChange = e => {
    // we have the new value for the age input inside e.target.value
    setTeamForm({
      name: teamForm.name,
      email: teamForm.email,
      password: teamForm.password,
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
      password: teamForm.password,
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
        onPasswordChange={onPasswordChange}
        onRoleChange={onRoleChange}
        teamForm={teamForm}
        onFormSubmit={onFormSubmit}
      />
      <StyledDivFlex>
        {teamsList.map(team => (
          <StyledOutputText key={team.id}>
            My name is {team.name} and I am the {team.role} at Chore Express.
          </StyledOutputText>
        ))}

        <button>Edit</button>
      </StyledDivFlex>
    </div>
  );
}

const StyledHeadline = styled.h2`
  font-size: 30px;
  color: #484848;
  margin-top: 20px;
  margin-bottom: -10px;
  text-align: left;
  margin-left: 40px;
`;

const StyledLabel = styled.label`
  font-size: 18px;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 10px;
  color: #484848;
  text-transform: uppercase;
  text-align: left;
`;

const StyledInput = styled.input`
  padding-left: 12px;
  padding-right: 12px;
  border: 1px solid #ebebeb;
  height: 48px;
  color: #484848;
  border-radius: 4px;
  width: 100%;
  font-size: 17px;
  outline: 0;
  &:focus {
    border-color: green;
  }
`;

const StyledButton = styled.button`
  height: 80px;
  margin-top: 20px;
  border-radius: 10px;
  background-color: #FF5A5F
  font-size: 24px;
  border: 0;
  text-transform: uppercase;
  color: white;
  width: 100%;
  cursor: pointer;

  &:disabled{
      opacity: 0.4;
      cursor: not-allowed;
  }

  &:hover{
    background-color: #f34146
  }

  &:active{
    background-color: #d2292d
  }
`;

function Form(props) {
  // what data does the form need to populate itself?
  // what callbacks does the form need to perform
  // its basic functions of updating fields and submitting?
  const {
    onNameChange,
    onEmailChange,
    onPasswordChange,
    onRoleChange,
    onFormSubmit,
    teamForm
  } = props;
  const { name, email, password, role } = teamForm;
  let hasAllDetails = name && email && password && role;
  //   const isDisabled = () => {
  //     if (!name || !email || !role || !password) {
  //       return true;
  //     }
  //     return false;
  //   };

  return (
    <>
      <StyledHeadline>Team Members Form</StyledHeadline>
      <form className="flex">
        <StyledLabel htmlFor="nameInput">Name</StyledLabel>
        <StyledInput
          //   maxLength={50}
          value={name}
          onChange={onNameChange}
          id="nameInput"
          type="text"
        />

        <StyledLabel htmlFor="emailInput">Email </StyledLabel>
        <StyledInput
          value={email}
          onChange={onEmailChange}
          id="emailInput"
          type="email"
        />

        <StyledLabel htmlFor="passwordInput">Password </StyledLabel>
        <StyledInput
          value={password}
          onChange={onPasswordChange}
          id="passwordInput"
          type="password"
        />

        <StyledLabel htmlFor="roleInput">Role</StyledLabel>

        <StyledInput
          value={role}
          onChange={onRoleChange}
          id="roleInput"
          type="text"
        />

        <StyledButton disabled={!hasAllDetails} onClick={onFormSubmit}>
          submit
        </StyledButton>
      </form>
    </>
  );
}
