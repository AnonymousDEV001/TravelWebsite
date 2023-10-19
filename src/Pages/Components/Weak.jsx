import Css from "../Css/Weak.module.css";

function Weak(props) {
  return Array.from(Array(7)).map((_, j) => {
    let date = new Date(props.year, props.monthIndex, props.index * 7 + j + 1);
    let month = date.getMonth();

    if (month !== props.monthIndex) {
      return <p key={j}></p>;
    }

    let isSelected =
      props.selectedDate &&
      (props.selectedDate.length === 1
        ? props.selectedDate[0].getDate() === date.getDate() &&
          props.selectedDate[0].getMonth() === date.getMonth()
        : props.selectedDate.length === 2
        ? (props.selectedDate[0].getDate() === date.getDate() &&
            props.selectedDate[0].getMonth() === date.getMonth()) ||
          (props.selectedDate[1].getDate() === date.getDate() &&
            props.selectedDate[1].getMonth() === date.getMonth())
        : false);

    return (
      <p
        key={j}
        style={
          isSelected
            ? { backgroundColor: "blue", color: "white", borderRadius: "1rem" }
            : null
        }
        onClick={(e) => {
          props.setSelectedDate([...props.selectedDate, date]);
        }}
        className={Css.date}
      >
        {date.getDate()}
      </p>
    );
  });
}

export default Weak;
