import React from "react";

const Container = ({ children }) => {
  return (
    <div className="lg:max-w-6xl md:max-w-5xl w-full mx-auto">{children}</div>
  );
};

export default Container;
