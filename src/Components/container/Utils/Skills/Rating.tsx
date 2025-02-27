import React from "react";

interface RatingProps {
  rating: string;
}

const Rating: React.FC<RatingProps> = (props) => {
  let rating = Math.floor(+props?.rating);
  const TOTAL_BARS = 5;

  const res = Array.from({ length: TOTAL_BARS }, (_, i) => {
    return (
      <p
        key={i}
        className={`h-3 lg:w-12 sm:w-10 xs:w-8 mr-0.25 border border-line transition_animation
          ${rating-- > 0 ? "bg-accent border-accent" : "bg-white"}
          rounded-bl-full rounded-tr-full`}
      ></p>
    );
  });

  return (
    <>
      <div className="flex flex-row h-fit">{res}</div>
    </>
  );
};

export default React.memo(Rating);
