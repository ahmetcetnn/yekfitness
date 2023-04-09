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
import Recipe from './Pages/Recipe';
import Core from './Pages/Links/Core';
import Chest from './Pages/Links/Chest'
import Legs from './Pages/Links/Legs'
import Arms from './Pages/Links/Arms'
import Shoulder from './Pages/Links/Shoulder'
import Back from './Pages/Links/Back'
import { GlobalProvider } from './Context/GlobalContext';
import Schedule from './Pages/Schedule';


function App() {
const {currentUser} = useContext(AuthContext)
 
   
  const RequireAuth = ({children}) =>{
    return currentUser ? (children) : <Navigate to= "/login"/>
  }

  return (
    <GlobalProvider>
      <AuthContextProvider>
      <BrowserRouter>
      
    
      <Routes>
        
      <Route path='login' element={<Login/>}/>
      <Route path="/" element={<RequireAuth><Homepage /></RequireAuth>}  />       
      <Route path='register' element={<Register/>}/>
      <Route path="exercise" element={<Exercise/>}/>
      <Route path='nutrition' element={<Nutrition/>}/>
      <Route path="/recipe/:name" element={<Recipe/>}/>
      <Route path="/legs" element={<Legs/>}/>
      <Route path="/chest" element={<Chest/>}/>
      <Route path="/core" element={<Core/>}/>
      <Route path="/back" element={<Back/>}/>
      <Route path="/shoulder" element={<Shoulder/>}/>
      <Route path="/arms" element={<Arms/>}/>
      <Route path="/schedule" element={<Schedule/>}/>
      </Routes>
    
      
      
      </BrowserRouter>
      </AuthContextProvider>
      </GlobalProvider>
    
  );
}

export default App;