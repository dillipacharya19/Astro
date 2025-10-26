import React from "react";
import Export from "../Home/Export";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 text-gray-800">
      {/* Header Section */}
      <h1 className="text-blue-950 text-[40px] md:text-[50px] font-bold text-center bg-gray-100 px-6 py-16 rounded-xl">
        About <span className="text-orange-400 hover:text-blue-950">Astrologer Madhab Kumar Acharya</span>
      </h1>

      {/* Subheading */}
      <h2 className="text-orange-600 text-sm font-semibold mt-10 mb-2">ABOUT ME</h2>

      {/* Title */}
      <h1 className="text-3xl font-bold leading-tight">
        Learn Your <span className="text-orange-500">Ups And Downs</span><br />
        With India's Best Astrologer
      </h1>

      {/* Two side-by-side paragraphs */}
      <div className="flex flex-col md:flex-row gap-6 mt-6 text-gray-600">
        <div className="md:w-1/2">
          Love and trust of people around the world make Astrologer Madhab Kumar Acharya
          one of the best astrologers in India. He has over 15 years of experience
          in Astrology and Vastu services.
        </div>
        <div className="md:w-1/2">
          With qualifications and experience, Astrologer Madhab Kumar Acharya has a special skill
          in studying the planetary positions and their effects. He provides accurate and
          effective remedies for all kinds of Astrology and Vastu problems.
        </div>
      </div>

      {/* Stats Section (reused component) */}
      <Export />
    </div>
  );
};

export default About;
