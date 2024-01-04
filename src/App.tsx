import React, { createContext, useState } from 'react';
import AppRoutes from './routes';
import { GlobalStyle } from './globalStyles/GlobalStyles';

interface UserContextType {
  isUser: boolean; 
  setIsUser: React.Dispatch<React.SetStateAction<boolean>>;
}
export const UserContext = createContext<UserContextType>({} as UserContextType);

function App() {
  const [isUser, setIsUser] = useState(false);
  return (
    <>
      <UserContext.Provider value={{ isUser, setIsUser }}>
        <AppRoutes />
        <GlobalStyle />
      </UserContext.Provider>
    </>
  );
}

export default App;
