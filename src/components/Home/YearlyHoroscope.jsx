import React from "react";
import { useParams } from "react-router-dom";
import { horoscopeData } from "../../utils/horoscopeDetailsData";

const YearlyHoroscope = () => {
  const { id } = useParams();

  // Find zodiac by name (case-insensitive)
  const zodiac = horoscopeData.find(
    (z) => z.name.toLowerCase() === id.toLowerCase()
  );

  if (!zodiac)
    return <p className="text-center mt-10 font-bold">Details not found!</p>;

  const currentDate = new Date().toLocaleDateString();

  // Safe regex match function
  const getSection = (labelStart, labelEnd) => {
    const regex = new RegExp(`${labelStart}:(.*)${labelEnd ? labelEnd + ':' : ''}`, 's');
    return regex.exec(zodiac.content)?.[1].trim() || "Not available";
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 bg-white p-11 rounded-xl shadow-lg">
      <h2 className="text-4xl font-bold text-center mb-2">{zodiac.name} Yearly Horoscope 2025</h2>
      <p className="text-center text-2xl text-gray-600 mb-4">{`By Astrologer Madhab Acharya | Date: ${currentDate}`}</p>

      <section className="mb-4">
        <h3 className="font-semibold text-[20px] text-orange-600">Overview</h3>
        <p className="text-gray-700 text-[18px]">{zodiac.content.split("Career:")[0].trim()}</p>
      </section>

      <section className="mb-4">
        <h3 className="font-semibold text-[20px] text-orange-600">Career</h3>
        <p className="text-gray-700 text-[18px]">{getSection("Career", "Family")}</p>
      </section>

      <section className="mb-4">
        <h3 className="font-semibold text-[20px] text-orange-600">Family & Relationship</h3>
        <p className="text-gray-700 text-[18px]">{getSection("Family", "Health")}</p>
      </section>

      <section className="mb-4">
        <h3 className="font-semibold text-[20px] text-orange-600">Health</h3>
        <p className="text-gray-700 text-[18px]">{getSection("Health", "Finance")}</p>
      </section>

      <section className="mb-4">
        <h3 className="font-semibold text-[20px] text-orange-600">Finance</h3>
        <p className="text-gray-700 text-[18px]">{getSection("Finance", "Study")}</p>
      </section>

      <section className="mb-4">
        <h3 className="font-semibold text-[20px] text-orange-600">Study & Career</h3>
        <p className="text-gray-700 text-[18px]">{getSection("Study")}</p>
      </section>
    </div>
  );
};

export default YearlyHoroscope;
