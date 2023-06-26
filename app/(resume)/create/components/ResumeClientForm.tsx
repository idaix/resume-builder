"use client";
import Button from "@/app/components/Button";
import InputField from "@/app/components/InputField";
import TwoInputs from "@/app/components/TwoInputs";
import { useResumeAppContext } from "@/app/context/useResumeApp";
import { ChangeEvent, useEffect, useRef } from "react";

const ResumeClientForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { clientData, setClientData } = useResumeAppContext();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setClientData({
      ...clientData,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log(clientData);
  }, [clientData]);
  return (
    <div>
      <form>
        <div className="grid gap-4 p-5">
          <TwoInputs>
            <InputField
              id="firstName"
              label="First Name"
              placeholder="Dai"
              value={clientData.firstName}
              onChange={handleInputChange}
            />
            <InputField
              id="lastName"
              label="Last Name"
              placeholder="Chekkal"
              value={clientData.lastName}
              onChange={handleInputChange}
            />
          </TwoInputs>

          <InputField
            id="email"
            label="Email"
            placeholder="yourname@domain.com"
            value={clientData.email}
            onChange={handleInputChange}
          />
          <InputField
            id="headline"
            label="Headline"
            placeholder="Bla bla bla..."
            value={clientData.headline}
            onChange={handleInputChange}
          />
          <InputField
            id="phone"
            label="Phone Number"
            placeholder="000 000 000"
            value={clientData.phone}
            onChange={handleInputChange}
          />
          <TwoInputs>
            <InputField
              id="city"
              label="City"
              placeholder="City"
              value={clientData.city}
              onChange={handleInputChange}
            />
            <InputField
              id="country"
              label="Country"
              placeholder="Country"
              value={clientData.country}
              onChange={handleInputChange}
            />
          </TwoInputs>
          <div className="mt-5 text-right hidden md:block">
            <Button label="Download resume" />
          </div>
          <div className="mt-5 text-right  md:hidden">
            <Button label="Preview resume" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ResumeClientForm;
