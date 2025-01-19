import React from "react";
import "./FaqItem.css";
const FaqItem = ({ id, question, answer, activeId, onToggle }) => {
  const isActive = activeId === id;

  const shouldHaveBorder = [1, 2, 3, 5, 6, 7].includes(id);
  const shouldHaveBorder2 = [1, 2, 3, 5].includes(id);
  const isLargeScreen = window.innerWidth > 576;
  return (
    <>
      {isLargeScreen ? (
        <>
          <div
            className={`faq-item ${isActive ? "active" : ""}`}
            onClick={() => onToggle(id)}
          >
            <div className="faq-number">{id < 10 ? `0${id}` : id}</div>
            <div className={`faq-toggle  ${isActive ? "active" : ""}`}>
              <div className="faq-question">{question}</div>
              {isActive && <div className="faq-answer">{answer}</div>}
            </div>
            <div className="faq-icon">{isActive ? "−" : "+"}</div>
          </div>
          <div className={`${shouldHaveBorder ? "line" : ""}`}></div>
        </>
      ) : (
        <>
          <div
            className={`faq-item-small ${isActive ? "active" : ""}`}
            onClick={() => onToggle(id)}
          >
            <div className="faq-header">
              <div className="faq-number">{id < 10 ? `0${id}` : id}</div>
              <div className="faq-question">{question}</div>
              <div className="faq-icon">{isActive ? "−" : "+"}</div>
            </div>
            {isActive && <div className="faq-answer">{answer}</div>}
          </div>
          <div className={` ${shouldHaveBorder2 ? "line" : "no-line"}`}></div>
        </>
      )}
    </>
  );
};

export default FaqItem;
