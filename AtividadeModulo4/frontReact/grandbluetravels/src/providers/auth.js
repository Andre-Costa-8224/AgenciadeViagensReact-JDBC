import React, { useEffect, useState } from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {

    const [user, setUser] = useState(
        {
            nome: ''
        }
    )

    useEffect(() => {
        const userStorage = localStorage.getItem("user")
        if(userStorage){
            setUser(JSON.parse(userStorage));
        }else{
            setUser({
                nome: ""
            })
        }
    }, [])

    return(
        <AuthContext.Provider value={{user, setUser}}>
            {props.children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => React.useContext(AuthContext)