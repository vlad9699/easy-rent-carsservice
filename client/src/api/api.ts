import axios from "axios";

export interface IForm {
  locationUp: string | null;
  fromDate: string;
  locationOff: string | null;
  toDate: string;
  age: string;
  phone: string;
  name: string;
}

const https = process.env.REACT_APP_SERVER_URL;

export const sendEmailRequest = async (data: IForm) => {
  const headers = {
    "Secret": "test123",
  };
  const res = await axios.post(`${https}/form`, data, { headers });
  console.log(2222, res);
  return !!res;

};