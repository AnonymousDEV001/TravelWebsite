import React, { useEffect, useState } from "react";
import css from "../Css/RandomHotels.module.css";

function RandomHotels() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
    };

    fetchHotels();
  }, []);
  return (
    <div className={css.randomHotels}>
      <h3>Explore Pakistan's Diverse Accommodations</h3>
      <div className={css.cards}>
        {hotels.map((hotel) => (
          <div className={css.card}>
            <img src={hotel.main_photo_url} alt="" width={'100%'}/>
            <h3>{hotel.hotel_name}</h3>
            <p>RS : {hotel.min_total_price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RandomHotels;
