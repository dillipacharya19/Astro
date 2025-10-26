import React, { useState } from "react";

const faqs = [
  {
    question: "What is astrology?",
    answer:
      "Astrology is the study of the movements and positions of celestial bodies and how they affect human life and the natural world.",
  },
  {
    question: "What is a birth chart?",
    answer:
      "A birth chart is a map of where all the planets were in their journey around the Sun at the exact moment you were born.",
  },
  {
    question: "What is a horoscope?",
    answer:
      "A horoscope is a forecast of a person's future based on the position of the planets at a given time.",
  },
  {
    question: "What are the different types of astrology?",
    answer:
      "There are several types, such as Vedic, Western, and Chinese astrology. Each has its own methods and interpretations.",
  },
  {
    question: "What are zodiac signs?",
    answer:
      "Zodiac signs are 12 divisions of the sky based on the path of the Sun, each representing different personality traits.",
  },
  {
    question: "Can astrology be used to improve relationships?",
    answer:
      "Yes, astrology can help people understand compatibility, communication, and emotional needs in a relationship.",
  },
  {
    question: "Can astrology predict the future?",
    answer:
      "Astrology offers insights and patterns but does not guarantee exact future predictions. It helps guide decisions.",
  },
  {
    question: "Is astrology considered a science?",
    answer:
      "Astrology is not a science by modern definitions, but it is studied as a symbolic and ancient system of knowledge.",
  },
];

const Questions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Split into two columns
  const firstHalf = faqs.slice(0, 4);
  const secondHalf = faqs.slice(4);

  const renderFaqs = (items, offset = 0) =>
    items.map((faq, index) => (
      <div
        key={index + offset}
        className="border border-orange-300 rounded-xl px-6 py-5 mb-4 cursor-pointer hover:shadow-md transition"
        onClick={() => toggleFAQ(index + offset)}
      >
        <div className="flex justify-between items-center">
          <span className="text-orange-500 font-semibold">{faq.question}</span>
          <span className="text-xl text-orange-500">
            {activeIndex === index + offset ? "−" : "+"}
          </span>
        </div>
        {activeIndex === index + offset && (
          <p className="mt-3 text-gray-700">{faq.answer}</p>
        )}
      </div>
    ));

  return (
    <div className="py-12 px-4 text-center">
      <h2 className="text-3xl font-bold mb-10">Frequently Asked Questions</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto text-left">
        <div>{renderFaqs(firstHalf)}</div>
        <div>{renderFaqs(secondHalf, 4)}</div>
      </div>
     
    </div>
  );
};

export default Questions;
