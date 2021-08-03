import React from "react";
import { Container } from "@material-ui/core";
import Tracker from "./components/Tracker";


function App() {
  return (
    <Container maxWidth="lg" style={{marinTop: '20px'}}>
       <Tracker />
    </Container>
  );
}

export default App;
