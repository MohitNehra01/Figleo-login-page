
import { useContext, useEffect } from 'react';
import './App.css';
import { AuthContext } from './context/AccountProvider';
import Login from './components/Login/Login';
import Home from './pages/Home';


function App() {
  const { isAuthenticated, setAuthenticated , setAccount } = useContext(AuthContext)

    useEffect(()=>{
            const checkLogin = ()=>{
              if(localStorage.getItem('userLogin')){
                setAuthenticated(true)
                setAccount(JSON.parse(localStorage.getItem('userLogin')))
              }
            }
            checkLogin();

            
    },[])
      
  return (
    <>
      {
        !isAuthenticated ? <Login /> : <Home />
      }
      
    </>
  );
}

export default App;
