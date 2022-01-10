import React, { useReducer } from "react";
import * as SecureStore from "expo-secure-store";
import { initialLoginState, loginReducer } from "../services/Reducer";

const useContextValue = () => {
  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  // login method
  const logIn = async ({ userToken, user, userType }) => {
    const userData = JSON.stringify(user);
    try {
      await SecureStore.setItemAsync("userToken", String(userToken));
      await SecureStore.setItemAsync("userType", userType);
      await SecureStore.setItemAsync("user", userData);
    } catch (e) {
      console.log(e);
    }
    dispatch({
      type: "LOGIN",
      user: user,
      user_token: userToken,
      user_type: userType,
    });
  };

  //logout method
  const logOut = async () => {
    try {
      await SecureStore.deleteItemAsync("userToken");
    } catch (e) {
      console.log(e);
    }
    dispatch({ type: "LOGOUT" });
  };

  // Retrieving user Data
  React.useEffect(() => {
    const bootstrapAsync = async () => {
      {
        let userToken = null;
        let user = null;
        let userType = null;

        try {
          userToken = await SecureStore.getItemAsync("userToken");
          userType = await SecureStore.getItemAsync("userType");
          user = await SecureStore.getItemAsync("user");
        } catch (e) {
          console.log(e);
        }
        dispatch({
          type: "RETRIEVE_TOKEN",
          user_token: userToken,
          user_type: userType,
          user: JSON.parse(user),
        });
      }
    };

    bootstrapAsync();
  }, []);

  // initializng value for Context
  const contextValue = {
    user: loginState.user,
    userToken: loginState.userToken,
    logIn: logIn,
    logOut: logOut,
  };
  return contextValue;
};

export default useContextValue;
