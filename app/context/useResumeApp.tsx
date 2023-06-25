import { ReactNode, createContext, useContext, useState } from "react";
import { ClientDataType } from "../types";

type ResumeAppType = {
  clientData: ClientDataType;
  setClientData: (value: ClientDataType) => void;
};

export const ResumeAppContext = createContext<ResumeAppType>(
  {} as ResumeAppType
);

export const useResumeAppContext = () => useContext(ResumeAppContext);

const ResumeAppProvider = ({ children }: { children: ReactNode }) => {
  const [clientData, setClientData] = useState<ClientDataType>({
    firstName: "",
    lastName: "",
    city: "",
    country: "",
    email: "",
    phone: "",
    headline: "",
    links: [],
    education: [],
  });
  return (
    <ResumeAppContext.Provider
      value={{
        clientData,
        setClientData,
      }}
    >
      {children}
    </ResumeAppContext.Provider>
  );
};

export default ResumeAppProvider;
