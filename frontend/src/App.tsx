import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Support from "./pages/Support";
import History from "./pages/History";
import Projects from "./pages/Projects";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthLayout from "./layout/AuthLayout";

function App() {
  return (
    <Routes>

      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/support" element={<Support />} />
        <Route path="/history" element={<History />} />
        <Route path="/projects" element={<Projects />} />
      </Route>
      
      <Route element={<AuthLayout/>}>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
      </Route>

    </Routes>
  )
}

export default App;
