import auth0 from "auth0-js";

import axios from "axios";
import qs from "qs";
// ? "https://thinlimbfrontend.herokuapp.com/callback"
//         : "https://thinlimbfrontend.herokuapp.com/callback",

export default class Auth {
  // Please use your own credentials here
  auth0 = new auth0.WebAuth({
    domain: "india699icu.auth0.com",
    clientID: "oJDcQfWuGKs1aRbM2J3FeGzpB4KbIsCb",
    redirectUri:
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/callback"
        : "http://localhost:3000/callback",
    audience: "https://india699icu.auth0.com/userinfo",
    responseType: "token id_token",
    scope: "openid  profile email"
  });

  login = () => {
    this.auth0.authorize();
  };

  // parses the result after authentication from URL hash
  handleAuthentication = async e => {
    this.auth0.parseHash(
      async (err, authResult) => {
        console.log("daasasasasta", authResult, authResult.idTokenPayload.name);
        let data = await {
          userName: authResult.idTokenPayload.name,
          userEmail: authResult.idTokenPayload.email,
          lastUpdate: authResult.idTokenPayload.updated_at,
          usesPic: authResult.idTokenPayload.picture,
          userToken: authResult.accessToken,
          userStatus: authResult.idTokenPayload.email_verified
        };
        console.log("data", data);
        if (data) {
          localStorage.setItem("userName", authResult.idTokenPayload.name);
          localStorage.setItem("userEmail", authResult.idTokenPayload.email);
          localStorage.setItem("userToken", authResult.accessToken);
          localStorage.setItem(
            "lastUpdate",
            authResult.idTokenPayload.updated_at
          );
          localStorage.setItem(
            "userStatus",
            authResult.idTokenPayload.email_verified
          );
        }
        if (authResult) {
          axios
            .post(`https://beckendthinlimbs.herokuapp.com/usersign`, data)
            .then(res => {
              console.log("data is finalllyyy");
              return authResult;
            });
        }
      }

      // var data = {
      //   email: authResult.idTokenPayload.email,
      //   status: authResult.idTokenPayload.email_verified,
      //   lastUpdate: authResult.idTokenPayload.updated_at,
      //   pic: authResult.idTokenPayload.picture,
      //   token: authResult.accessToken
      // };

      //window.location = "/home";
    );
  };

  // Sets user details in localStorage
  setSession = authResult => {
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );
    localStorage.setItem("access_token", authResult.accessToken);
    localStorage.setItem("id_token", authResult.idToken);
    localStorage.setItem("expires_at", expiresAt);
    // navigate to the home route
  };

  // removes user details from localStorage
  logout = () => {
    // Clear access token and ID token from local storage
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    // navigate to the home route
  };

  // checks if the user is authenticated
  isAuthenticated = () => {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
    return new Date().getTime() < expiresAt;
  };
}
