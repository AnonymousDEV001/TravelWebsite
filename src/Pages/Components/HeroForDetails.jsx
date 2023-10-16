import React from 'react'
import Css from '../Css/HeroForDetails.module.css'

function HeroForDetails() {
  return (
    <div className={Css.hero}>
      <div className={Css.heading}>
      <h2>Find your next stay</h2>
      <p>Search deals on hotels, homes, and much more...</p>
      </div>
      <div className={Css.search}>
        <div className={Css.left}>
          <input type="text" placeholder='Where are you going' />
        </div>
        <div className={Css.middle}></div>
        <div className={Css.right}></div>
      </div>
    </div>
  )
}

export default HeroForDetails
