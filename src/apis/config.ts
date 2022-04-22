import axios from "axios";

export const client = (setAuthorization: boolean = true) => {
  // Create instance
  let instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  if (setAuthorization) {
    // Set the AUTH token for any request
    instance.interceptors.request.use((config) => {
      config.headers!.app_id = process.env.REACT_APP_ID!;
      config.headers!.app_secret = process.env.REACT_APP_SECRET!;

      return config;
    });
  }

  return instance;
};
