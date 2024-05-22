export const getBackendHostname = () => {
  if (process.env.BACKEND_HOSTNAME) {
    return process.env.BACKEND_HOSTNAME;
  } else if (process.env.NEXT_PUBLIC_BACKEND_HOSTNAME) {
    return process.env.NEXT_PUBLIC_BACKEND_HOSTNAME;
  }
  return null;
};

export const getImageUrl = (imageId: number) => {
  return `${getBackendHostname()}/api/images/${imageId}`;
};
