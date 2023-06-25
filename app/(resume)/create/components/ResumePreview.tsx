"use client";

import { useResumeAppContext } from "@/app/context/useResumeApp";

const ResumePreview = () => {
  const { clientData } = useResumeAppContext();
  return (
    <div className="p-5 bg-white h-screen">
      welcome mr {clientData.firstName}
    </div>
  );
};

export default ResumePreview;
