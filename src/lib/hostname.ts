export const getBackendHostname = (usePublic: boolean = false) => {
  if (usePublic) {
    return process.env.NEXT_PUBLIC_BACKEND_HOSTNAME ?? null;
  }

  if (process.env.BACKEND_HOSTNAME) {
    return process.env.BACKEND_HOSTNAME;
  } else if (process.env.NEXT_PUBLIC_BACKEND_HOSTNAME) {
    return process.env.NEXT_PUBLIC_BACKEND_HOSTNAME;
  }
  return null;
};

export const getImageUrl = (imageId: number) => {
  return `${getBackendHostname(true)}/api/images/${imageId}`;
};
