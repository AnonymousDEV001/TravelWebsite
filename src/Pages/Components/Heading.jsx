import React from 'react'
import HeadingCss from '../Css/Heading.module.css'

function Heading(props) {
  return (
    <div className={HeadingCss.destinationHeading}>
    <span style={props.bColor !== '' ? {color:props.bColor} : null}>{props.bHeading}</span>
    <h3 style={props.sColor !== "" ?{color:props.sColor} : null}>{props.heading}</h3>
  </div>
  )
}

export default Heading
