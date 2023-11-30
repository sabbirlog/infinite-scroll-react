import axiosInstance from "./api";

export const getAllPost = () => {
  return axiosInstance.post("/returnBlogs");
};

export const getFilterPost = (data?: any) => {
  return axiosInstance.post("/returnBlogs", data);
};
