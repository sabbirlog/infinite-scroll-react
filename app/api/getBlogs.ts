import axiosInstance from "./api";

export const getAllPost = ({ pageParam }: {
  pageParam: number
}) => {
  return axiosInstance.post("/returnBlogs", {
    offset: pageParam,
    limit: 2
  });
};

export const getFilterPost = (data?: any) => {
  return axiosInstance.post("/returnBlogs", data);
};
