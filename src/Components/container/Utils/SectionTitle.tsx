import React from "react";

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <h3 className="text-center text-xl text-sec-font mt-8 uppercase font-bolder tracking-widest">
      {children}
    </h3>
  );
};
export default React.memo(SectionTitle);
