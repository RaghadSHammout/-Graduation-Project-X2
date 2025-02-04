import React, { useEffect, useState } from "react";
import Title from "../Title/Title";
import "./ComparePlansTable.css";
import { TableData } from "../Data/TableData";
import { TableDataOnMobile } from "../Data/TableDataOnMobile";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";

export default function ComparePlansTable() {
  const [ActiveTab, setActiveTab] = useState("Standard");
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const handleScrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };
    handleScrollToHash();
    window.addEventListener("hashchange", handleScrollToHash);

    return () => {
      window.removeEventListener("hashchange", handleScrollToHash);
    };
  }, [location]);

  return (
    <section className="subscription-padding home-padding w-100 explore-m-bot" id="features">
      <div
        data-aos="fade-up"
        className="Lq-title-container"
      >
        <Title
          maMargin={"ma-80"}
          size={"ma-title"}
          matext={"ma-text"}
          title={"Compare our plans and find the right one for you"}
          text={
            "StreamVibe offers three different plans to fit your needs: Basic, Standard, and Premium. Compare the features of each plan and choose the one that's right for you"
          }
        />
      </div>
      <table className="Table" data-aos="fade-up">
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
            <tr key={row.id} data-aos="fade-right">
              <td className="lq-data">{row.feature}</td>
              <td className="lq-data">{row.basic}</td>
              <td className="lq-data">{row.standard}</td>
              <td className="lq-data">{row.premium}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="Lq-mobile" data-aos="fade-up">
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
