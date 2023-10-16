import React from "react";
import Css from "../Css/CalenderSingleCard.module.css";
import Weak from "./Weak";

function CalenderSingleCard(props) {
  return (
    <>
      <div className={Css.days}>
        <p>Sun</p>
        <p>Mon</p>
        <p>Tue</p>
        <p>Wed</p>
        <p>Thu</p>
        <p>Fri</p>
        <p>Sat</p>
      </div>
      <div className={Css.weaks}>
        <div className={Css.weak}>
          {Array.from(Array(5)).map((_, i) => (
            <Weak index={i} monthIndex={props.monthIndex} year={props.year} />
          ))}
        </div>
      </div>
    </>
  );
}

export default CalenderSingleCard;
