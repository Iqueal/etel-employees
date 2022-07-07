import React, { useEffect, useState } from 'react';

const API_URL = 'https://reactjs-directory.herokuapp.com/employees';

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  const getEmployees = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setEmployees(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getEmployees(API_URL);
  }, []);

  return (
    <AppContext.Provider value={employees}>{children}</AppContext.Provider>
  );
};
