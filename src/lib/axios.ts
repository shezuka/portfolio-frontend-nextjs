import { Axios } from "axios";

const axios = new Axios({
  baseURL: "/api",
});

axios.interceptors.request.use((config) => {
  if (config.data instanceof FormData) {
    config.headers["Content-Type"] = "multipart/form-data";
  } else if (typeof config.data === "object") {
    config.data = JSON.stringify(config.data);
    config.headers["Content-Type"] = "application/json";
  }
  return config;
});

axios.interceptors.response.use((response) => {
  if (
    typeof response.data === "string" &&
    ["{", "["].includes(response.data[0]) &&
    ["}", "]"].includes(response.data[response.data.length - 1])
  ) {
    try {
      response.data = JSON.parse(response.data);
      response.headers["Content-Type"] = "application/json";
    } catch (err) {
      console.error(err);
    }
  }
  return response;
});

export default axios;
