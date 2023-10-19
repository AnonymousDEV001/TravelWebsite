import Css from "../Css/Calender.module.css";
import Weak from "./Weak";
import React, { useEffect, useState } from "react";

function Calender() {
  let year = new Date().getFullYear();
  let monthIndex = new Date().getMonth();
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  let [selectedDate, setSelectedDate] = useState([today, tomorrow]);
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

  useEffect(() => {
    if (selectedDate.length > 2) {
      if (
        selectedDate[0].getMonth() === selectedDate[2].getMonth() &&
        selectedDate[0].getMonth() === selectedDate[1].getMonth()
      ) {
        if (selectedDate[0].getDate() > selectedDate[2].getDate()) {
          console.log("done");
          return setSelectedDate([selectedDate[2]]);
        }
      }
      setSelectedDate([selectedDate[1], selectedDate[2]]);
    }
  }, [selectedDate]);
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
                <Weak
                  key={i}
                  index={i}
                  monthIndex={monthIndex}
                  year={year}
                  selectedDate={selectedDate}
                  setSelectedDate={setSelectedDate}
                />
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
                <Weak
                  key={i}
                  index={i}
                  monthIndex={monthIndex + 1}
                  year={year}
                  selectedDate={selectedDate}
                  setSelectedDate={setSelectedDate}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calender;
