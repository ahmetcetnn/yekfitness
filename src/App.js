import { BrowserRouter,Routes,Route,NavLink, Navigate} from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage';
import { AuthContextProvider } from './Context/AuthContext';
import { AuthContext } from './Context/AuthContext';
import { useContext } from 'react';
import Login from './Pages/Login';
import Register from './Pages/Register';
import firebase from "./firesbase"
import Exercise from './Pages/Exercise';
import Nutrition from './Pages/Nutrition';



function App() {
const {currentUser} = useContext(AuthContext)
 
   
  const RequireAuth = ({children}) =>{
    return currentUser ? (children) : <Navigate to= "/login"/>
  }

  return (
    
      <AuthContextProvider>
      <BrowserRouter>
      
    
      <Routes>
        
      <Route path='login' element={<Login/>}/>
      <Route path="/" element={<RequireAuth><Homepage /></RequireAuth>}  />       
      <Route path='register' element={<Register/>}/>
      <Route path="exercise" element={<Exercise/>}/>
      <Route path='nutrition' element={<Nutrition/>}/>
      </Routes>
    
      
      
      </BrowserRouter>
      </AuthContextProvider>
    
  );
}

export default App;