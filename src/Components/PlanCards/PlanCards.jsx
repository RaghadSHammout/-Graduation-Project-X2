import React from 'react'
import './PlanCards.css'
import Button from '../Button/Button';
export default function PlanCards({subTitle, description , price , duration }) {
  return (
    <div className="LQ-plan-card">
      <div className="LQ-title">
        <h6 className="lq-card-title">{subTitle}</h6>
        <p className="lq-desc">{description}</p>
      </div>
      <div className="lq-price">
        <p class="pricee">{price}</p>
        <span className="lq-duration">{duration}</span>
      </div>
      <div class="lq-btn-container">
        <button class="lq-btn1 L-font-style">Start Free Trial</button>
        <Button
        pad={'LQ-pad'}
        text={"Choose Plan"}
        show={false}
         />
      </div>
    </div>
  );
}
