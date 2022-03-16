import axios, { AxiosError, AxiosResponse } from "axios";
import IRequestObject from "../Interfaces/IRequest";
const customAxios = axios.create({
  timeout: 130000,
  headers: { "Content-Type": "application/json" },
  validateStatus: (status) => {
    return (status >= 200 && status < 300) || status === 422;
  }
});

customAxios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default function HandleRequest({data, url, method}:IRequestObject) {
  customAxios.defaults.baseURL = "https://hey-cinema-deji.herokuapp.com/";

  var config:IRequestObject = requestBuilder({data, url, method});
  const request = customAxios(config)
    .then(function (response:AxiosResponse) {
      return response.data;
    })
    .catch(function (error:AxiosError) {
      return Promise.reject(error);
    });
  return request;
}
function requestBuilder({data, url, method}:IRequestObject) {

  var request:IRequestObject = {
    method: method,
    url: url,
    data: data
  };
  if (method === "GET") {
    delete request.data;
  }

  return request;
}

