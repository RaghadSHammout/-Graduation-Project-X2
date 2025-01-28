import React, { useState } from 'react'
import Title from '../Title/Title'
import './ComparePlansTable.css'
import { TableData } from '../Data/TableData'
import { TableDataOnMobile } from '../Data/TableDataOnMobile'
//import framer-motion library
import {motion} from 'framer-motion'
//import Animation.js
import {fadeIn} from '../../Animation'
export default function ComparePlansTable() {
  const [ActiveTab , setActiveTab]= useState("Standard")
  return (
    <section className="subscription-padding w-100">
      <motion.div 
         variants={fadeIn("up" , 0.2)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once:false , amount:0.7}}
      className="Lq-title-container">
        <Title
          maMargin={"ma-80"}
          size={"ma-title"}
          matext={"ma-text"}
          title={"Compare our plans and find the right one for you"}
          text={
            "StreamVibe offers three different plans to fit your needs: Basic, Standard, and Premium. Compare the features of each plan and choose the one that's right for you"
          }
        />
      </motion.div>
      <table className="Table">
        <thead className="Lq-row-bg">
          <tr>
            <th className="lq-head">Features</th>
            <th className="lq-head">Basic</th>
            <th className="lq-headd">
              Standard
              <div className="lq-small-red-container">
                <span>Popular</span>
              </div>
            </th>
            <th className="lq-head">Premium</th>
          </tr>
        </thead>
        <tbody>
          {TableData.map((row) => (
            <tr key={row.id}>
              <td className="lq-data">{row.feature}</td>
              <td className="lq-data">{row.basic}</td>
              <td className="lq-data">{row.standard}</td>
              <td className="lq-data">{row.premium}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="Lq-mobile">
        <div className="LQ-three-Tabs">
          <button
            className={` basic-btn ${
              ActiveTab === "Basic" ? "Active" : "Dis-Active"
            }`}
            onClick={() => setActiveTab("Basic")}
          >
            Basic
          </button>
          <button
            className={`standard-btn ${
              ActiveTab === "Standard" ? "Active" : "Dis-Active"
            }`}
            onClick={() => setActiveTab("Standard")}
          >
            Standard
          </button>
          <button
            className={`premium-btn ${
              ActiveTab === "Premium" ? "Active" : "Dis-Active"
            }`}
            onClick={() => setActiveTab("Premium")}
          >
            Premium
          </button>
        </div>
        <div className="table-mobile-view">
          <div className="LQ_plans-data LQ-margin">
            <div className="title-desc">
              <h5>Price</h5>
              <p>{TableDataOnMobile[ActiveTab].price}</p>
            </div>
            <div className="title-desc">
              <h5>Free Trail</h5>
              <p>{TableDataOnMobile[ActiveTab].FreeTrail}</p>
            </div>
          </div>
          <div className="title-desc LQ-margin">
            <h5>Content</h5>
            <p>{TableDataOnMobile[ActiveTab].content}</p>
          </div>
          <div className="title-desc LQ-margin">
            <h5>Devices</h5>
            <p>{TableDataOnMobile[ActiveTab].devices}</p>
          </div>
          <div className="LQ_plans-data LQ-margin">
            <div className="title-desc">
              <h5>Cancel Anytime</h5>
              <p>{TableDataOnMobile[ActiveTab].cancel}</p>
            </div>
            <div className="title-desc">
              <h5>HDR</h5>
              <p>{TableDataOnMobile[ActiveTab].hdr}</p>
            </div>
          </div>
          <div className="LQ_plans-data LQ-margin">
            <div className="title-desc">
              <h5>Dolby Atmos</h5>
              <p>{TableDataOnMobile[ActiveTab].dolby}</p>
            </div>
            <div className="title-desc">
              <h5>Ad-Free</h5>
              <p>{TableDataOnMobile[ActiveTab].ad}</p>
            </div>
          </div>
          <div className="LQ_plans-data">
            <div className="title-desc">
              <h5>Offline Viewing</h5>
              <p>{TableDataOnMobile[ActiveTab].viewing}</p>
            </div>
            <div className="title-desc">
              <h5>Family Sharing</h5>
              <p>{TableDataOnMobile[ActiveTab].fSharing}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
