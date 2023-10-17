import React from "react";
import ChooseCss from "../Css/ChooseUs.module.css";
import vector from "../../assets/Vector2.svg";
import Heading from "./Heading";
import Vector2 from "../../assets/Capa_1.svg";
import Vector3 from "../../assets/_x32_.svg";
import Vector4 from "../../assets/safe_shield_2_fill.svg";

function ChooseUs() {
  return (
    <div className={ChooseCss.choose}>
      <div className={ChooseCss.svgVector}>
        <img src={vector} alt="" />
      </div>
      <div className={ChooseCss.mainChooseUs}>
        <div className={ChooseCss.heading}>
          <Heading
            heading="Why Choose Us"
            bHeading="WHY CHOOSE US"
            sColor="#DDF0FF"
            bColor="#0764AA"
          />
        </div>
        <div className={ChooseCss.cards}>
          <div className={ChooseCss.card}>
            <div className={ChooseCss.img}>
              <img src={Vector2} alt="" />
            </div>
            <div className={ChooseCss.text}>
              <h3>Local Expertise</h3>
              <p>
                Our team of seasoned guides have an intimate knowledge of
                Pakistan, ensuring you experience the true essence of this
                diverse nation.
              </p>
            </div>
          </div>
          <div className={ChooseCss.card}>
            <div className={ChooseCss.img}>
              <img src={Vector3} alt="" />
            </div>
            <div className={ChooseCss.text}>
              <h3>Tailored Itineraries</h3>
              <p>
                Whether you're seeking adrenaline-pumping adventures or a
                leisurely cultural immersion, our itineraries are designed to
                cater to your unique interests.
              </p>
            </div>
          </div>
          <div className={`${ChooseCss.card} ${ChooseCss.spam2Columns}`}>
            <div className={ChooseCss.img}>
              <img src={Vector4} alt="" />
            </div>
            <div className={ChooseCss.text}>
              <h3>Tailored Itineraries</h3>
              <p>
                Whether you're seeking adrenaline-pumping adventures or a
                leisurely cultural immersion, our itineraries are designed to
                cater to your unique interests.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={`${ChooseCss.svgVector} ${ChooseCss.reverse}`}>
        <img src={vector} alt="" />
      </div>
    </div>
  );
}

export default ChooseUs;
