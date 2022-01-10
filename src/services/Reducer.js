export const initialLoginState = {
  isLoading: true,
  user: null,
  userToken: null,
  userType: null,
};

export const loginReducer = (prevState, action) => {
  switch (action.type) {
    case "RETRIEVE_TOKEN":
      return {
        ...prevState,
        userToken: action.user_token,
        user: action.user,
        userType: action.user_type,
        isLoading: false,
      };
    case "LOGIN":
      return {
        ...prevState,
        userToken: action.user_token,
        user: action.user,
        userType: action.user_type,
        isLoading: false,
      };
    case "LOGOUT":
      return {
        ...prevState,
        user: null,
        userToken: null,
        userType: null,
        isLoading: false,
      };
  }
};
