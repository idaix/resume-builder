"use client";

import { AuthContext } from "./context/AuthContext";
import ResumeAppProvider from "./context/useResumeApp";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthContext>
      <ResumeAppProvider>{children}</ResumeAppProvider>
    </AuthContext>
  );
};

export default Providers;
