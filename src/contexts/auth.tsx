import React, { useState, createContext } from 'react';

export const AuthContext = createContext({});

function AuthProvider({ children }: any){
  const [user, setUser] = useState(null);

  return(
    <AuthContext.Provider value={{ signed: user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;