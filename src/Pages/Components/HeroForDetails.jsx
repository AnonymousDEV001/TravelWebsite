import React from "react";
import Css from "../Css/HeroForDetails.module.css";
import Calender from "./Calender";

function HeroForDetails() {
  return (
    <div className={Css.hero}>
      <div className={Css.heading}>
        <h2>Find your next stay</h2>
        <p>Search deals on hotels, homes, and much more...</p>
      </div>
      <div className={Css.search}>
        <div className={Css.left}>
          <input type="text" placeholder="Where are you going?" />
        </div>
        <div className={Css.middle}>
          <div className={Css.date}>
            <span class={`material-symbols-outlined ${Css.calenderIcon}`}>calendar_today</span> Tue,
            Nov 21 — Tue, Nov 28
          </div>
          <Calender/>
        </div>
        <div className={Css.right}>
          <div className={Css.childrenDetails}>
            <span class={`material-symbols-outlined ${Css.personIcon}`}>
              person
            </span>
            2 adults · 0 children · 1 room
          </div>
          <div className={Css.childrenFields}>
            <div className={Css.childrenField}>
              <span>Adults</span>
              <input type="text" />
            </div>
            <div className={Css.childrenField}>
              <span>Children</span>
              <input type="text" />
            </div>
            <div className={Css.childrenField}>
              <span>Rooms</span>
              <input type="text" />
            </div>
            <div className={Css.childrenField}>
              <button>Done</button>
            </div>
          </div>
        </div>
        <div className={Css.searchBtn}>
          <button>Search</button>
        </div>
      </div>
    </div>
  );
}

export default HeroForDetails;
