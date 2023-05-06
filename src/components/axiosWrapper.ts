import { toast } from "react-toastify";
import axios from "axios";

interface ISignInUp {
  first_name?: string;
  last_name?: string;
  email: string;
  password: string;
  device: string;
  user_type?: number;
}

enum APIRouters {
  signin = "http://212.193.62.231:8080/auth/singin",
  signupbase = "http://212.193.62.231:8080/auth/signup/base",
}

const axiosWrapper = {
  post,
};

function post(url: string, body: ISignInUp) {
  return axios
    .post(url, body)
    .then(handleResponse)
    .catch((err) => {
      toast.error(err.message);
    });
}

function handleResponse(response: any) {
  console.log(response);
  if (response.status !== 201) {
    const error = response.statusText;
    return Promise.reject(error);
  }
  return response.data;
}

export const APIUser = {
  signInUser,
  signUpBaseUser,
};

function signInUser(body: ISignInUp) {
  return axiosWrapper.post(APIRouters.signin, body);
}

function signUpBaseUser(body: ISignInUp) {
  return axiosWrapper.post(APIRouters.signupbase, body);
}
