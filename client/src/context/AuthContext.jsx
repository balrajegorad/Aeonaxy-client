import { createContext, useCallback, useEffect, useState } from "react";
import { baseUrl, postRequest } from "../utils/sevices";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);
    const [registerError, setRegisterError] = useState(null);
    const [loginError, setLoginError] = useState(null);
    const [registerInfo, setRegisterInfo] = useState({
        name: "",
        email: "",
        username: "",
        password: "",
    });
    
    

    

    useEffect(() => {
        const user = localStorage.getItem("User");
        setUser(JSON.parse(user));
    }, []);

    console.log("Userr", user);
    console.log("RegisterInfo", registerInfo);

    const updateRegisterInfo = useCallback((info) => {
        setRegisterInfo(info);
    }, []);

    const registerUser = useCallback(async () => {
        setRegisterError(null);
        try {
            const response = await postRequest(
                `${baseUrl}/users/register`,
                JSON.stringify(registerInfo)
            );

            if (response.error) {
                return setRegisterError(response);
            }

            localStorage.setItem("User", JSON.stringify(response));

            

        } catch (error) {
            console.error("Error registering user:", error);
            setRegisterError("Error registering user");
        }
    }, [registerInfo]);

    const loginUser = useCallback(async (email, password) => {
        try {
            const response = await postRequest(
                `${baseUrl}/users/login`,
                JSON.stringify({ email, password })
            );

            if (response.error) {
               
                return setLoginError(response);
               
            } else {
                
                setUser(response);
                
                localStorage.setItem("User", JSON.stringify(response));
            }
        } catch (error) {
            console.error("Error logging in:", error);
            
        }
    }, []);

    const resendEmail = useCallback(async () => {
        try {
            if (!user) {
                throw new Error("User not found");
            }
            const response = await postRequest(`${baseUrl}/users/resend-email`, { email: user.email });
            console.log(response); 
        } catch (error) {
            console.error("Error resending email:", error);
        }
    }, [user]);


    const logoutUser = useCallback(() => {
        localStorage.removeItem("User");
        setUser(null);
    })

  
    return (
        <AuthContext.Provider value={{
            user,
            registerInfo,
            updateRegisterInfo,
            registerUser,
            registerError,
            loginUser,
            resendEmail,
            loginError,
            logoutUser,
            
        }}>
            {children}
        </AuthContext.Provider>
    );
};

