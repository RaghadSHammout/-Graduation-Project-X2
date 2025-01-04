import React, { useState } from "react";
import "./Frequently.css";
import Title from "../Title/Title";
import FaqItem from "../FaqItem/FaqItem";
import Button from "../Button/Button";
const Frequently = () => {
  const [activeId, setActiveId] = useState(1);

  const faqData = [
    {
      id: 1,
      question: "What is StreamVibe?",
      answer:
        "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
    },
    {
      id: 2,
      question: "How much does StreamVibe cost?",
      answer:
        "StreamVibe offers various subscription plans to suit your needs. Visit our pricing page for details.",
    },
    {
      id: 3,
      question: "What content is available on StreamVibe?",
      answer:
        "StreamVibe offers movies, TV shows, documentaries, and exclusive original content.",
    },
    {
      id: 4,
      question: "How can I watch StreamVibe?",
      answer:
        "You can watch StreamVibe on your smart TV, computer, tablet, or smartphone.",
    },
    {
      id: 5,
      question: "How do I sign up for StreamVibe?",
      answer:
        "Visit our website and click 'Sign Up' to create an account and choose your subscription plan.",
    },
    {
      id: 6,
      question: "What is the StreamVibe free trial?",
      answer:
        "New users can enjoy a free trial for 7 days. Cancel anytime before the trial ends to avoid charges.",
    },
    {
      id: 7,
      question: "How do I contact StreamVibe customer support?",
      answer:
        "You can reach us via our support page, email, or by calling our hotline.",
    },
    {
      id: 8,
      question: "What are the StreamVibe payment methods?",
      answer:
        "StreamVibe accepts credit cards, debit cards, and online payment options like PayPal.",
    },
  ];

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className=" faq-container">
      <div className="faq1">
        <Title
          title={"Frequently Asked Questions"}
          text={
            "Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe."
          }
          size={false}
          maMargin={false}
        />

        <Button pad={false} text={"Ask a Question"} img={false} />
      </div>
      <div className="faq2">
        <div className="faq-large-screen">
          <div className="faq-column">
            {faqData.slice(0, Math.ceil(faqData.length / 2)).map((item) => (
              <FaqItem
                key={item.id}
                id={item.id}
                question={item.question}
                answer={item.answer}
                activeId={activeId}
                onToggle={toggleFAQ}
              />
            ))}
          </div>

          <div className="faq-column">
            {faqData.slice(Math.ceil(faqData.length / 2)).map((item) => (
              <FaqItem
                key={item.id}
                id={item.id}
                question={item.question}
                answer={item.answer}
                activeId={activeId}
                onToggle={toggleFAQ}
              />
            ))}
          </div>
        </div>

        <div className="faq-small-screen">
          {faqData.slice(0, 6).map((item) => (
            <div key={item.id}>
              <FaqItem
                id={item.id}
                question={item.question}
                answer={item.answer}
                activeId={activeId}
                onToggle={toggleFAQ}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Frequently;
