import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const login = (email, password) => {
        //Temporary-replace with backend later
        if (email && password) {
            setUser({email});
            return true;
        }
        return false;
    };

    const logout = setUser(null);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}