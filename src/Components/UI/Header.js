import classes from "./Header.module.css";
import React, { useState } from "react";
import Button from './Button';

// This is how to use styled components. Also, check 'React Details.txt' for styled components command for install in the terminal
// import styled from "styled-components";
// const StyledHeader = styled.div`
//   background-color: rgb(93, 41, 110);
//   padding: 1.5rem;
//   color: white;
//   font-weight: bold;
//   font-size: 2rem;
// `;

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const usersClickHandler = () => {
    return console.log("Users was clicked!");
  };

  const adminClickHandler = () => {
    return console.log("Admin was clicked!");
  };

  const logoutClickHandler = () => {
    setIsLoggedIn(false);
    return console.log("Logout was clicked!");
  };

  return (
    <section>
      <div className={classes.header}>
        <div>A Typical Page</div>
        {isLoggedIn && (
          <div className={classes.actions}>
            <button className={classes.button} onClick={usersClickHandler}>Users</button>
            <button className={classes.button} onClick={adminClickHandler}>Admin</button>
            <Button onClick={logoutClickHandler}>Logout</Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Header;
