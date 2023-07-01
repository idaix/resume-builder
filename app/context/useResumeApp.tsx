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
    links: [
      {
        id: "1",
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/daichekkal/",
      },
      {
        id: "2",
        label: "Github",
        url: "https://github.com/daishek",
      },
    ],
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
