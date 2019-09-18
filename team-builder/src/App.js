import React from "react";
import logo from "./logo.svg";
import { useState } from "react";
import { Container } from "./Form";
import "./App.css";
import styled from "styled-components";

const StyledApp = styled.div`
  background-image: url("https://images.unsplash.com/photo-1556745753-b2904692b3cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1332&q=80");
  background-size: cover;
  background-color: red;
  padding: 50px;
  min-height: 100vh;
`;

function App() {
  // const [username, setUsername] = useState("");

  // const onTeamChange = e => {
  //   setFriendForm({
  //     name: e.target.value
  //   });
  // };
  return (
    <StyledApp>
      <Container />
    </StyledApp>
  );
}

export default App;
