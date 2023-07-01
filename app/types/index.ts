export type ClientDataType = {
  // step 01: Personal details
  firstName?: string;
  lastName?: string;
  headline?: string;
  city?: string;
  country?: string;
  email?: string;
  phone?: string;
  //step 02: links
  links?: ClientDataLinkType[];
  //step 03: education
  education?: ClientDataEducationType[];
};

export type ClientDataLinkType = {
  id?: string;
  url?: string;
  label?: string;
};

type ClientDataEducationType = {
  title?: string;
  school?: string;
  city?: string;
  description?: string;
};
