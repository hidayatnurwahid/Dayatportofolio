import type { NextApiRequest, NextApiResponse } from 'next'
 
interface  ResponseData {
  location: Location | null,
  social: SocialMedia,
  phone: Phone
}

interface  Location {
  country: string;
  city: string;
  street: string;
}

interface  SocialMedia  {
  email: string;
  skype: string;
  telegram: string;
}

interface  Phone  {
  suport: string | null;
  office: string;
  personal: string;
}

 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const response:ResponseData={
    location:{ 
      city:"Utara Keras", 
      country:"Indonesia", 
      street:"Jl Kota Tua"
    },
    phone:{
      office:"021 0987 9877",
      personal:"0813 0878 7676", 
      suport: null
    },
    social: {
      email:"dayat113@gmail.com",
      skype:"@myname",
      telegram:"@myname"
    }
  }
  res.status(200).json(response)
}