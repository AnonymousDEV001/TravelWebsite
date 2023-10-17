import React, { useEffect, useState } from "react";
import HotelCard from "./HotelCard";
import css from "../Css/RandomHotels.module.css";

const url = 'https://hotels-com-provider.p.rapidapi.com/v2/hotels/offers?checkout_date=2023-10-27&checkin_date=2023-10-26&adults_number=1&hotel_id=1105156&locale=en_GB&domain=AE&children_ages=4%2C0';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '4baafabbcfmshca97c13421da7f7p1aaa48jsna9de2c594d16',
    'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com'
  }
};

function RandomHotels() {
  const [hotelDetails, updateDetails] = useState([])

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        const hotels = result.units;
        let detailsGathered = [];

        for (let i = 0; i < hotels.length; i++) {
          detailsGathered[i] = {
            description: hotels[i].description,
            name: hotels[i].header.text,
            images: hotels[i].unitGallery.gallery[0].image.url,
            price: hotels[i].ratePlans[0].priceDetails[0].totalPriceMessage,
          }
        }

        updateDetails(detailsGathered);

      } catch (error) {
        console.error(error);
      }
    };

    fetchHotels();
  })

  const hotelCards = hotelDetails.map((hotel, i) => {
    return <HotelCard hName={hotel.name} hDescription={hotel.description} hPrice={hotel.price} hImage={hotel.images} />
  })

  return (
    <div className={css.randomHotels}>
      <h3 className={css.heading}>Explore Pakistan's Diverse Accommodations</h3>
      <div className={css.cards}>
        {hotelCards}
      </div>
    </div>
  );
}

export default RandomHotels;