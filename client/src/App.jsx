import "./App.css";
import DailyIntake from "./components/DailyIntake/DailyIntake";
import Header from "./components/Header/Header";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/dailyIntake"
          element={<DailyIntake />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/signup"
          element={<Signup />}
        />
        <Route
          path="/profile"
          element={<Profile />}
        />
        <Route
          path="*"
          element={
            <Navigate
              to="/"
              replace
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
