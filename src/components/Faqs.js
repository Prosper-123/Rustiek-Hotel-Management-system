import React, { useState } from "react";

const FAQ = () => {
  const faqs = [
    { question: "What are the check-in and check-out times?", answer: "Check-in is at 2 PM, and check-out is at 12 PM." },
    { question: "Is parking available?", answer: "Yes, we offer free on-site parking for our guests." },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section style={styles.container}>
      <h2 style={styles.heading}>FAQs</h2>
      <div style={styles.faqList}>
        {faqs.map((faq, index) => (
          <div key={index} style={styles.faqItem}>
            <h3 style={styles.question} onClick={() => toggleFAQ(index)}>
              {faq.question}
            </h3>
            {activeIndex === index && <p style={styles.answer}>{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  container: {
    padding: "40px",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
  },
  faqList: {
    maxWidth: "600px",
    margin: "0 auto",
  },
  faqItem: {
    marginBottom: "15px",
  },
  question: {
    cursor: "pointer",
    fontWeight: "bold",
    backgroundColor: "#f4f4f4",
    padding: "10px",
    borderRadius: "5px",
  },
  answer: {
    marginTop: "5px",
    padding: "10px",
    backgroundColor: "#e9ecef",
    borderRadius: "5px",
  },
};

export default FAQ;
