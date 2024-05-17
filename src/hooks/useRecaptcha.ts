"use client";

import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const useRecaptcha = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const getToken = async (action: string) => {
    if (!executeRecaptcha) {
      console.error("Execute recaptcha not yet available");
      return null;
    }
    return await executeRecaptcha(action);
  };

  return { getToken };
};

export default useRecaptcha;
