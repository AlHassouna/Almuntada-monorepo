import { useState } from "react";
import { cookies } from "next/headers";
import { Cookie } from "@mui/icons-material";

// export const setToken = (userToken) => {
//   sessionStorage.setItem("token", JSON.stringify(userToken));
// };

export const useToken = () => {
  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    const testcoockes = cookies().set("test", "test");
    if (tokenString) {
      const userToken = JSON.parse(tokenString);
      return userToken?.token;
    }
  };

  const [token, setToken] = useState(getToken());
  const saveToken = userToken => {
    sessionStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken.token);
  };
  return {
    setToken: saveToken,
    token
  };
};

