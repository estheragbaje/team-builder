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