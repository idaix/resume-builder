"use client";
import Button from "@/app/components/Button";
import InputField from "@/app/components/InputField";
import TwoInputs from "@/app/components/TwoInputs";
import { useResumeAppContext } from "@/app/context/useResumeApp";
import { ChangeEvent, useEffect, useState } from "react";
import LinksBox from "./LinksBox";

enum STEPS {
  PERSONAL = 0,
  LINKS = 1,
  EDUCATION = 2,
}

const ResumeClientForm = () => {
  const { clientData, setClientData } = useResumeAppContext();
  const [steps, setSteps] = useState(STEPS.PERSONAL);

  const goBack = () => {
    setSteps((value) => value - 1);
  };
  const goForward = () => {
    setSteps((value) => value + 1);
  };

  const actionLabel = steps === STEPS.EDUCATION ? "Download Resume" : "Next";
  const actionLabelMobile =
    steps === STEPS.EDUCATION ? "Preview Resume" : "Next";
  const secondaryActionLabel = steps === STEPS.EDUCATION ? undefined : "Back";

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setClientData({
      ...clientData,
      [name]: value,
    });
  };
  const handleClick = () => {
    actionLabel === "Next" && goForward();
  };

  useEffect(() => {
    console.log(clientData);
  }, [clientData]);

  let bodyContent = (
    <>
      <h3 className="text-blue-500 text-lg">Personal Details</h3>
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
    </>
  );

  if (steps === STEPS.LINKS) {
    bodyContent = (
      <>
        <h3 className="text-blue-500 text-lg">Links</h3>
        {clientData?.links?.length ? (
          <div className="flex gap-2 flex-wrap">
            {clientData.links.map((link) => (
              <LinksBox key={link.id} label={link.label} url={link.url} />
            ))}
          </div>
        ) : (
          ""
        )}
        <div className="grid grid-cols-4 gap-2">
          <div className="col-span-1">
            <InputField
              id="linkLabel"
              label="Label"
              placeholder="LinkedIn"
              value={clientData.country}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-3">
            <InputField
              id="linkUrl"
              label="Link"
              placeholder="https://www.linkedin.com/in/daichekkal/"
              value={clientData.country}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="text-right">
          <Button label="Add" bg="secondary" />
        </div>
      </>
    );
  }
  if (steps === STEPS.EDUCATION) {
    bodyContent = (
      <>
        <h3 className="text-blue-500 text-lg">Education</h3>
      </>
    );
  }
  return (
    <div>
      <form>
        <div className="grid gap-4 p-5">
          {bodyContent}
          <div className="mt-5 text-right hidden md:block">
            <Button
              size="large"
              bg="primary"
              label={actionLabel}
              onClick={handleClick}
            />
          </div>
          <div className="mt-5 text-right  md:hidden">
            <Button
              size="large"
              bg="primary"
              label={actionLabelMobile}
              onClick={handleClick}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ResumeClientForm;
