import { axiosClient } from "../../../Services/apiClient";

export const requestgetPost = () => {
  const res = axiosClient.get("/product");
  return res;
};
