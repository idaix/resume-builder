export type ClientDataType = {
  // step 01: Personal details
  firstName?: string;
  lastName?: string;
  headline?: string;
  city?: string;
  country?: string;
  email?: string;
  phone?: string;
  links?: ClientDataLinkType[];
  //step 02: education
  education?: ClientDataEducationType[];
};

type ClientDataLinkType = {
  url?: string;
  label?: string;
};

type ClientDataEducationType = {
  title?: string;
  school?: string;
  city?: string;
  description?: string;
};
