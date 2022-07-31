import http from "../../http/http";
import { signInRoute } from "../routes/authentication";

const signIn = (signInData) => {
  return http.post(signInRoute(), signInData);
};

const authenticationEndpoints = { signIn };

export default authenticationEndpoints;
