import "./App.css";
import Header from "./Components/UI/Header";
import React from "react";

import Button from "./Components/UI/Button";
import Card from "./Components/UI/Card";
import classes from "./Components/Login/Login.module.css";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Card className={classes.login}>
        <form>
          <div className={classes.control}>
            <label>E-Mail</label>
            <input type="email" placeholder="john.smith@example.com"></input>
          </div>
          <div className={classes.control}>
            <label>Password</label>
            <input type="password"></input>
          </div>
          <div className={classes.actions}>
            <Button className={classes.btn}>Login</Button>
          </div>
        </form>
      </Card>
    </React.Fragment>
  );
}

export default App;
