import axios from "axios";
import { DOMAIN } from "@miq/shared";

export const ENDPOINT = `${DOMAIN}${process.env.REACT_APP_API_ENDPOINT}`;

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
// axios.defaults.headers["Content-Type"] = "text/html; charset=UTF-8";
axios.defaults.headers.post["Content-Type"] = "application/json";

export const API = axios.create({
    baseURL: ENDPOINT,
    timeout: 3000,
    withCredentials: true,
    // headers: { "X-Requested-With": "XMLHttpRequest" },
    headers: {
        "Content-type": "application/json",
    },
    onUploadProgress: (progressEvt) => {},
});
