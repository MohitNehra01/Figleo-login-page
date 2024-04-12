const { createContext ,useState} = require("react");

export const AuthContext = createContext(null)

const AccountProvider = ({ children }) => {
    const [isAuthenticated, setAuthenticated] = useState(false);
    const [account , setAccount] = useState({})
    return (
        <AuthContext.Provider value={{
            isAuthenticated,
            setAuthenticated,
            account,
            setAccount
        } }>
            {children}
        </AuthContext.Provider>
    )
}

export default AccountProvider