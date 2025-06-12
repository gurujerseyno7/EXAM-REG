import axios from "axios";

export const addRatingForm = async (data: any) => {
  const response = axios({
    method: "POST",
    url: `http://localhost:8080/api/v1/user-info/add`,
    data,
  });
  return response;
};
