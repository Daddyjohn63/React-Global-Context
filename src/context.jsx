import { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

//cusotm hook

export const useGlobalContext = () => useContext(GlobalContext);

//define the component we are going to return from this file.
const AppContext = ({ children }) => {
  const [name, setName] = useState('peter');
  return (
    <GlobalContext.Provider value={{ name, setName }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
