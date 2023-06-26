"use client";
import Button from "@/app/components/Button";
import { useResumeAppContext } from "@/app/context/useResumeApp";
import { useEffect, useRef } from "react";

const ResumePreview = () => {
  const { clientData } = useResumeAppContext();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const context = canvas?.getContext("2d");
    canvas.style.background = "white";
    // Get the device pixel ratio
    const devicePixelRatio = window.devicePixelRatio || 1;

    // Calculate the canvas dimensions based on the device pixel ratio
    const canvasWidth = canvas.offsetWidth * devicePixelRatio;
    const canvasHeight = canvas.offsetHeight * devicePixelRatio;

    // Set the canvas resolution to match the device pixel ratio
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    // Scale the context by the device pixel ratio
    context?.scale(devicePixelRatio, devicePixelRatio);
    if (context) {
      context?.clearRect(0, 0, canvas.width, canvas.height);
      // Set font styles
      context.font = "11px";
      context.fillStyle = "black";

      // Render Personal Details section
      context?.fillText("Personal Details", 20, 40);
      context?.fillText(
        `Name: ${clientData.firstName} ${clientData.lastName}`,
        20,
        60
      );
      context?.fillText(`Headline: ${clientData.headline}`, 20, 80);
      context?.fillText(`City: ${clientData.city}`, 20, 100);
      context?.fillText(`Country: ${clientData.country}`, 20, 120);
      context?.fillText(`Email: ${clientData.email}`, 20, 140);
      context?.fillText(`Phone: ${clientData.phone}`, 20, 160);

      // Render Links section
      context?.fillText("Links", 20, 200);
      let linkY = 220;
      clientData.links?.forEach((link) => {
        context?.fillText(`${link.label}: ${link.url}`, 20, linkY);
        linkY += 20;
      });

      // Render Education section
      context?.fillText("Education", 20, 300);
      let educationY = 320;
      clientData.education?.forEach((educationItem) => {
        context?.fillText(`Title: ${educationItem.title}`, 20, educationY);
        context?.fillText(
          `School: ${educationItem.school}`,
          20,
          educationY + 20
        );
        context?.fillText(`City: ${educationItem.city}`, 20, educationY + 40);
        context?.fillText(
          `Description: ${educationItem.description}`,
          20,
          educationY + 60
        );
        educationY += 100;
      });
    }
  }, [clientData]);

  return (
    <div className="p-5 space-y-2">
      <h2 className="text-gray-500 text-sm">Resume Preview</h2>
      <canvas
        ref={canvasRef}
        className="border border-gray-200 w-full rounded-lg max-h-[100%]"
      />

      <div className="w-full text-right md:hidden">
        <Button label="Download resume" />
      </div>
    </div>
  );
};

export default ResumePreview;
