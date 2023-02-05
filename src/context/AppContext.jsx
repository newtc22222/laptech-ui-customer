import React, { createContext, useEffect, useState } from 'react';

/**
 * @since 2022-12-22
 * @link (resources): https://www.youtube.com/watch?v=SjoWgz0x15s
 */

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [userData, setUserData] = useState({});

  const getUserData = async phone => {
    await fetch(`http://localhost:8088/api/v1/users?phone=${phone}`)
      .then(res => res.json())
      .then(data => {
        setUserData(data);
      });
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <AppContext.Provider value={{ userData }}>{children}</AppContext.Provider>
  );
};
