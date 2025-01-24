import React, { useState } from "react";
import "./Plans.css";
import PlanCards from "../PlanCards/PlanCards";
import { cardData } from "../Data/CardData";
import Title from "../Title/Title";
//import framer-motion library
import {motion} from 'framer-motion'
//import Animation.js
import {fadeIn} from '../../Animation'

export default function Plans() {
  const [activeTab, setActiveTab] = useState("Monthly");

  return (
    <section className=" plans Desktop-padding-left-right w-100">
      <motion.div
         variants={fadeIn("up" , 0.2)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once:false , amount:0.7}}
       className="LQ-Title-Tab d-flex justify-content-between align-items-end ">
        <div className="Lq-component-container">
          <Title
            size={"ma-title"}
            matext={"ma-text1"}
            title={"Choose the plan that's right for you"}
            text={
              "Join StreamVibe and select from our flexible subscriptions options tailored to suite your viewing preferences .Get ready for non-stop entertainment!"
            }
          />
        </div>

        <div className="lq-tabs d-flex justify-content-between align-items-center">
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

      </motion.div>

      <div className="lq-father-card  d-flex justify-content-between align-items-strech">
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
