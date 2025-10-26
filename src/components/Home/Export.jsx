import React from 'react';
import { LuMedal } from "react-icons/lu";
import { FaRegPaperPlane } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import { LiaTrophySolid } from "react-icons/lia";
import { motion } from "framer-motion";

const Export = () => {
  const cards = [
    { icon: <LuMedal className="text-amber-500 text-4xl" />, title: "15+ Years Of", subtitle: "Experience" },
    { icon: <FaRegPaperPlane className="text-blue-500 text-4xl" />, title: "50K+ Satisfied", subtitle: "Clients" },
    { icon: <MdOutlineSupportAgent className="text-green-500 text-4xl" />, title: "Support", subtitle: "24/7 Support" },
    { icon: <LiaTrophySolid className="text-purple-500 text-4xl" />, title: "30+ Awards", subtitle: "Achievement" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      viewport={{ once: true, amount: 0.5 }}
      className="flex flex-wrap justify-center gap-16 mx-auto my-20 px-6 py-10 max-w-6xl bg-white p-6 shadow-md"
    >
      {cards.map((card, index) => (
        <div key={index} className="flex flex-col items-center text-center space-y-1">
          {card.icon}
          <p className="font-semibold text-lg">{card.title}</p>
          <p>{card.subtitle}</p>
        </div>
      ))}
    </motion.div>
  );
};

export default Export;
