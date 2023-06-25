"use client";

import ResumeAppProvider from "./context/useResumeApp";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ResumeAppProvider>{children}</ResumeAppProvider>;
};

export default Providers;
