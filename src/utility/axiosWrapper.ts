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

interface ILanguageStudentTeacher {
  language: string;
  level: string;
  description: string;
  price?: number;
}

interface ISignUpStudentTeacher {
  date_of_birthday: string;
  country?: string;
  learning_languages?: ILanguageStudentTeacher[];
  teaching_languages?: ILanguageStudentTeacher[];
}

export enum APIRouters {
  signin = "http://212.193.62.231:8080/auth/singin",
  signupbase = "http://212.193.62.231:8080/auth/signup/base",
  userinfo = "http://212.193.62.231:8080/user/profile",
  refreshtoken = "http://212.193.62.231:8080/auth/refreshToken",
  signupstudent = "http://212.193.62.231:8080/auth/signup/student",
  signupteacher = "http://212.193.62.231:8080/auth/signup/teacher",
}

const axiosWrapper = {
  post,
  postWithToken,
};

function post(url: string, body: ISignInUp) {
  return axios
    .post(url, body)
    .then(handleResponse)
    .catch((err) => {
      toast.error(err.message);
    });
}

function postWithToken(urlReq: string, body: ISignUpStudentTeacher) {
  return axios({
    method: "post",
    url: urlReq,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
    data: body,
  })
    .then(handleResponse)
    .catch((err) => {
      toast.error(err.message);
    });
}

function handleResponse(response: any) {
  if (response.status !== 200) {
    const error = response.statusText;
    return Promise.reject(error);
  }
  return response.data;
}

export const APIUser = {
  signInUser,
  signUpBaseUser,
  signupStudent,
  signupTeacher,
};

function signInUser(body: ISignInUp) {
  return axiosWrapper.post(APIRouters.signin, body);
}

function signUpBaseUser(body: ISignInUp) {
  return axiosWrapper.post(APIRouters.signupbase, body);
}

function signupStudent(body: ISignUpStudentTeacher) {
  return axiosWrapper.postWithToken(APIRouters.signupstudent, body);
}

function signupTeacher(body: ISignUpStudentTeacher) {
  return axiosWrapper.postWithToken(APIRouters.signupteacher, body);
}
