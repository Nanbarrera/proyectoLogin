import React, { createContext, useState, useContext } from 'react';
var ls = require('local-storage');

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userId, setUserId] = useState(null);

    const login = (id_user) => {
        setIsAuthenticated(true);
        ls( "isAuth", true)
        setUserId(id_user);
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUserId(null);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, userId, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};