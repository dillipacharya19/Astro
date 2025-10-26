import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

const RatingBar = () => {
  return (
    <>
      <div>
        <div>
          <p className="my-5">Astrology</p>
          <ProgressBar completed={95} maxCompleted={100} />
          
          <p className="my-5">Vastu</p>
          <ProgressBar completed={98} maxCompleted={100} />
          
          <p className="my-5">Satisfaction Rate</p>
          <ProgressBar completed={99} maxCompleted={100} />
        </div>
      </div>
    </>
  );
};

export default RatingBar;
