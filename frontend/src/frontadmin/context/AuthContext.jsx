import { createContext, useState } from "react";

const AuthContext = createContext();
export default AuthContext;

// eslint-disable-next-line react/prop-types
export function AuthContextProvider({ children }) {
  const [loggedUser, setLoggedUser] = useState({
    status: false,
    user: {},
  });

  return (
    <AuthContext.Provider value={(loggedUser, setLoggedUser)}>
      {children}
    </AuthContext.Provider>
  );
}
