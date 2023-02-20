import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <Link to="/">
        {/* <img src="/assets/meeting.png" width={40} height={40} alt="SMO logo" /> */}
        <h1>Meeting Organiser</h1>
      </Link>
    </header>
  );
};

export default React.memo(Header);
