import ResumeClientForm from "./components/ResumeClientForm";
import ResumePreview from "./components/ResumePreview";

const Create = () => {
  return (
    <div className="grid md:grid-cols-2">
      <ResumeClientForm />
      <ResumePreview />
    </div>
  );
};

export default Create;
