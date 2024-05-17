"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { ChildrenOnlyProps } from "@/types";

const RecaptchaProvider = ({ children }: ChildrenOnlyProps) => {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
};

export default RecaptchaProvider;
