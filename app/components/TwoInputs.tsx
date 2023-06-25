"use client";
const TwoInputs = ({ children }: { children: React.ReactNode }) => {
  return <div className="grid sm:grid-cols-2 gap-4">{children}</div>;
};

export default TwoInputs;
