import axios from "axios";

const url = "http://45.12.239.156:8081/api";

export const getToken = () => localStorage.getItem("accessData");
const savedToken = getToken();
console.log(savedToken);

export function getNewToken(login, password) {
  axios
    .post(`${url}/login/`, { login, password })
    .then(({ data }) => {
      console.log(data.token);
      localStorage.setItem("accessData", data.token);
    })
    .catch((error) => console.log("error", error.response));
}
