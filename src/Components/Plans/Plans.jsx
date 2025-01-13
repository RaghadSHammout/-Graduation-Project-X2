import React, { useState } from 'react'
import './Plans.css'
import PlanCards from '../PlanCards/PlanCards'
import { cardData } from '../Data/CardData'
import Title from '../Title/Title'
export default function Plans() {
    const [activeTab , setActiveTab]= useState("Monthly")
  return (
    <section className=" plans Desktop-padding-left-right ">
      <div className="LQ-Title-Tab">
        <Title
        maMargin={'ma-80'}
        size={'ma-title'}
        matext={'ma-text'}
        title={"Choose the plan that's right for you"} 
        text={"Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"}
         />
        <div className="lq-tabs">
          <button
            className={activeTab === "Monthly" ? "active" : "dis-active"}
            onClick={() => setActiveTab("Monthly")}
          >
            Monthly
          </button>
          <button
            className={activeTab === "Yearly" ? "active" : "dis-active"}
            onClick={() => setActiveTab("Yearly")}
          >
            Yearly
          </button>
        </div>
      </div>
      <div className="lq-father-card">
        {cardData[activeTab].map((PlanCard, index) => (
          <PlanCards
            key={index}
            subTitle={PlanCard.subTitle}
            description={PlanCard.description}
            price={PlanCard.price}
            duration={PlanCard.duration}
          />
        ))}
      </div>
    </section>
  );
}
