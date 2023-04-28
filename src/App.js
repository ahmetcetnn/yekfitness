import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/Homepage";

import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Exercise from "./Pages/Exercise";
import Nutrition from "./Pages/Nutrition";
import Recipe from "./Pages/Recipe";
import Core from "./Pages/Links/Core";
import Chest from "./Pages/Links/Chest";
import Legs from "./Pages/Links/Legs";
import Arms from "./Pages/Links/Arms";
import Shoulder from "./Pages/Links/Shoulder";
import Back from "./Pages/Links/Back";
import { GlobalProvider } from "./Context/GlobalContext";
import Schedule from "./Pages/Schedule";
import Progess from "./Pages/Progess";
import PrivateRoute from "./Components/PrivateRoute";
import AuthProvider from "./Context/AuthContext";

function App() {
  return (
    <GlobalProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="login" element={<Login />} />
            <Route exact path="/" element={<PrivateRoute />}>
              <Route exact path="/" element={<Homepage />} />
            </Route>
            <Route path="register" element={<Register />} />
            <Route path="exercise" element={<Exercise />} />
            <Route path="nutrition" element={<Nutrition />} />
            <Route path="/recipe/:name" element={<Recipe />} />
            <Route path="/legs" element={<Legs />} />
            <Route path="/chest" element={<Chest />} />
            <Route path="/core" element={<Core />} />
            <Route path="/back" element={<Back />} />
            <Route path="/shoulder" element={<Shoulder />} />
            <Route path="/arms" element={<Arms />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/progress" element={<Progess />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </GlobalProvider>
  );
}

export default App;
