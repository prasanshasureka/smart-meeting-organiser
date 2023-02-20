import Buildings from "../../components/Buildings/Buildings";
import Meetings from "../../components/Meetings/Meetings";
import Rooms from "../../components/Rooms/Rooms";
import React from "react";
import style from "./Dashboard.module.css";
import { useNavigate } from "react-router-dom";
import Button from "../../UI/Button";

const Dashboard = () => {
  const navigate = useNavigate();

  const addMeetingHandler = () => {
    navigate("add-meeting");
  };

  return (
    <div>
      <div className={style.dashboard}>
        <Buildings className={style["child-cards"]} />
        <Rooms className={style["child-cards"]} />
        <Meetings className={style["child-cards"]} />
      </div>
      <div>
        <Button title="Add Meeting" onClick={addMeetingHandler} />
      </div>
    </div>
  );
};

export default Dashboard;
