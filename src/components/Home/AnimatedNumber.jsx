import React, { useEffect, useState } from "react";
import { animate } from "framer-motion";

const AnimatedNumber = ({ number }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const controls = animate(0, parseInt(number), {
      duration: 2,
      ease: "easeOut",
      onUpdate: (latest) => setValue(Math.floor(latest)),
    });

    return () => controls.stop();
  }, [number]);

  return (
    <h1 className="text-[35px] font-bold text-blue-600">
      {value.toLocaleString()}+
    </h1>
  );
};

export default AnimatedNumber;
