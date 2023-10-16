import React from "react";
import TestimonialsCss from "../Css/Testimonials.module.css";
import Vector from "../../assets/Vector2.svg";
import Heading from "./Heading";

function Testimonials() {
  return (
    <div className={TestimonialsCss.Testimonials}>
      <Heading heading="Testimonials" bHeading="TESTIMONIALS" />

      <div className={TestimonialsCss.TestimonialCards}>


        <div className={TestimonialsCss.card}>
          <div className={TestimonialsCss.img}>
            <img src="//unsplash.it/50/50" alt="" />
          </div>
          <div className={TestimonialsCss.text}>
            <h3>Alex M</h3>
            <p>"Pakistan exceeded my wildest expectations, and [Travel Company Name] made sure every moment was filled with wonder and discovery."</p>
          </div>
        </div>
        <div className={TestimonialsCss.card}>
          <div className={TestimonialsCss.img}>
            <img src="//unsplash.it/70/70" alt="" />
          </div>
          <div className={TestimonialsCss.text}>
            <h3>Emily R</h3>
            <p>"Exploring Pakistan with [Travel Company Name] was a revelation. From the soaring peaks of the north to the ancient wonders of the south, every day was a new adventure. The care and expertise of the team made all the difference. I can't wait to return!"</p>
          </div>
        </div>
        <div className={TestimonialsCss.card}>
          <div className={TestimonialsCss.img}>
            <img src="//unsplash.it/60/60" alt="" />
          </div>
          <div className={TestimonialsCss.text}>
            <h3>Sarah L</h3>
            <p>"The guides were phenomenal. Their passion for Pakistan's history and culture added a layer of depth to every experience." </p>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Testimonials;
