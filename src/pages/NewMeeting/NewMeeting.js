import React from "react";
import style from "./NewMeeting.module.css";
import AddMeeting from "../../components/Meetings/AddMeeting";

const NewMeeting = () => {
  return (
    <div>
      <h2>Add a new meeting</h2>
      <div className={style.page}>
        <AddMeeting className={style["child-cards"]} />
      </div>
    </div>
  );
};

export default NewMeeting;
