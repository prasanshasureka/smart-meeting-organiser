import React, { useState } from "react";
import Card from "../../UI/Card";
import Button from "../../UI/Button";
import style from "./AddMeeting.module.css";
import { useNavigate } from "react-router-dom";

const AddMeeting = (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    title: "",
    date: "",
    startTime: "",
    endTime: "",
    buildingId: "",
  });

  const inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    const allDataValues = Object.values(data).every((val) => val);
    if (allDataValues) {
      console.log("Proceed");
    } else {
      console.log("Dont Proceed");
    }
    console.log(data);
  };
  return (
    <Card className={props.className}>
      <form
        className={style.form}
        id="add-meeting-form"
        onSubmit={formSubmitHandler}
      >
        <div className={style["input-div"]}>
          <label>Title</label>
          <input
            name="title"
            type="text"
            onChange={inputHandler}
            value={data.title}
          />
        </div>
        <div className={style["input-div"]}>
          <label>Date</label>
          <input
            name="date"
            type="date"
            onChange={inputHandler}
            value={data.date}
          />
        </div>
        <div className={style["input-div"]}>
          <label>Start Time</label>
          <input
            name="startTime"
            type="time"
            onChange={inputHandler}
            value={data.startTime}
          />
        </div>
        <div className={style["input-div"]}>
          <label>End Time</label>
          <input
            name="endTime"
            type="time"
            onChange={inputHandler}
            value={data.endTime}
          />
        </div>
        <div className={style["input-div"]}>
          <label>Building</label>
          <select
            name="buildingId"
            type="select"
            onChange={inputHandler}
            value={data.buildingId}
          >
            <option>Building 1</option>
          </select>
        </div>
      </form>
      <div className={style["button-div"]}>
        <Button title="Cancel" onClick={() => navigate(-1)} className={style.button}/>
        <Button title="Check availability" type="submit" form="add-meeting-form" className={style.button}/>
      </div>
    </Card>
  );
};

export default AddMeeting;
