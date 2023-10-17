import React from "react";

function Weak(props) {
  return (Array.from(Array(7)).map((_, j) => {
        let date = new Date(props.year, props.monthIndex, props.index * 7 + j + 1);
        return <p>{date.getDate()}</p>;
      })
  );
}

export default Weak;
