import { createContext, useReducer } from "react";

export const UserContext = createContext({
  user: {
    id: "",
    userName: "",
    email: "",
  },

  loginUser: ({ id, userName, email }) => {},
  logoutUser: ({ id }) => {},
});

const userReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        id: action.payload.id,
        userName: action.payload.userName,
        email: action.payload.email,
      };
    case "LOGOUT":
      return {
        ...state,
        id: "",
        userName: "",
        email: "",
      };
    default:
      return state;
  }
};

const initialState = {
  id: "",
  userName: "",
  email: "",
};

const UserContextProvider = ({ children }) => {
  const [userState, dispatch] = useReducer(userReducer, initialState);

  const loginUser = ({ id, userName, email }) => {
    dispatch({ type: "LOGIN", payload: { id, userName, email } });
  };

  const logoutUser = ({ id }) => {
    dispatch({ type: "LOGOUT", payload: { id } });
  };

  const value = {
    user: userState,
    loginUser: loginUser,
    logoutUser: logoutUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
