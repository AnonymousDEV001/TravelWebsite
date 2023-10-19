import {container, image_display, text_div, hotel_name, hotel_description,hotel_price} from "../Css/RandomHotels.module.css";

function HotelCard(props) {
  return (
    <div className={container}>
      <span className={image_display} style={{ backgroundImage: `url(${props.hImage})`}}></span>
      <div className={text_div}>
        <h2 className={hotel_name}>{props.hName}</h2>
        <h3 className={hotel_description} dangerouslySetInnerHTML={{__html: props.hDescription}}></h3>
        <p className={hotel_price}>{props.hPrice}</p>
      </div>
    </div>
  );
}

HotelCard.defaultProps = {
  hName: "Hotel Name",
  hDescription: "Hotel Description <br> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut excepturi quam numquam facilis. Molestiae magnam porro id reiciendis architecto maiores debitis dolorem accusantium tempora nemo provident commodi velit, quam maxime.",
  hPrice: "$120 Total"
}

export default HotelCard;