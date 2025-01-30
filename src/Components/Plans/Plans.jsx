import React, { useState } from "react";
import "./Plans.css";
import PlanCards from "../PlanCards/PlanCards";
import { cardData } from "../Data/CardData";
import Title from "../Title/Title";
//import framer-motion library
import {motion} from 'framer-motion'
//import Animation.js
import {fadeIn} from '../../Animation'
import{useEffect} from "react";
import { useLocation } from 'react-router-dom';
export default function Plans({addPlans}) {
  const [activeTab, setActiveTab] = useState("Monthly");
  const location = useLocation(); 
  useEffect(() => {
    const handleScrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' }); 
        }
      }
    };
    handleScrollToHash();
    window.addEventListener('hashchange', handleScrollToHash);

    return () => {
      window.removeEventListener('hashchange', handleScrollToHash);
    };
  }, [location]);
 
  return (
    <section className={` Desktop-padding-left-right w-100 ${ addPlans? 'plans' : 'new-plans'}`} id="Pricing" >
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
            className={activeTab === "Monthly" ? "LQactive" : "dis-LQactive"}
            onClick={() => setActiveTab("Monthly")}
          >
            Monthly
          </button>
          <button
            className={activeTab === "Yearly" ? "LQactive" : "dis-LQactive"}
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
