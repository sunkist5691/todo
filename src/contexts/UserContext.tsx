import { createContext, ReactNode, useContext, useState } from "react";

type Props = {
  children: ReactNode;
};

export const UserContext = createContext<any>(null);
export const useUserContext = () => useContext(UserContext);

const UserProvider = ({ children }: Props) => {
  const [user, setUser] = useState<string>("");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
