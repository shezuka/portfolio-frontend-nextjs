"use client";

const getRecaptchaToken = async (action: string) => {
  return new Promise((resolve, reject) => {
    // @ts-ignore
    const executeRecaptcha = window.grecaptcha.execute;

    if (!executeRecaptcha) {
      reject(new Error("ReCAPTCHA script not loaded"));
      return;
    }

    executeRecaptcha(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, { action })
      .then((token: string) => {
        resolve(token);
      })
      .catch((error: any) => {
        reject(error);
      });
  });
};

export default getRecaptchaToken;
