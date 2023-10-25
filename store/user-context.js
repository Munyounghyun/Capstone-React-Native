import { createContext, useReducer } from "react";

export const UserContext = createContext({
  //초기값 설정
  id: "",
  email: "",
  loginUser: ({ id, email }) => {
    id;
  },
  logoutUser: ({ id }) => {},
});

const userReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { id, email };
    case "LOGOUT":
  }
};

const UserContextProvider = ({ children }) => {
  const [userState, dispatch] = useReducer(useReducer);

  const loginUser = ({ id, email }) => {
    dispatch({ type: "LOGIN", payload: { id, email } });
  };
  const logOut = ({ id }) => {
    dispatch({ type: "LOGOUT", payload: { id } });
  };

  return <UserContext.Provider>{children}</UserContext.Provider>;
};

export default UserContextProvider;
