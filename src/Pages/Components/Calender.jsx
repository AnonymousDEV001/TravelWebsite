import React from "react";
import Css from "../Css/Calender.module.css";
import Weak from "./Weak";

function Calender() {
  let year = new Date().getFullYear();
  let monthIndex = new Date().getMonth();
  let month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className={Css.calender}>
      <h3>Calender</h3>
      <div className={Css.calenderContainer}>
        <div className={Css.left}>
          <div className={Css.year}>
            <span class="material-symbols-outlined">arrow_back_ios</span>
            {month[monthIndex]} {year}
          </div>
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
                <Weak index={i} monthIndex={monthIndex} year={year} />
              ))}
            </div>
          </div>
        </div>

        <div className={Css.right}>
          <div className={Css.year}>
            {month[monthIndex + 1]} {year}
            <span class="material-symbols-outlined">arrow_forward_ios</span>
          </div>
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
                <Weak index={i} monthIndex={monthIndex + 1} year={year} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calender;
