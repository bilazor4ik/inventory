import { Route, Routes } from "react-router-dom";
import RequireAuth from "./components/Sidebar/RequireAuth";
import SharedSidebar from "./components/Sidebar/SharedSidebar";
import { AuthContext, AuthContextProvider } from "./context/AuthContext";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <AuthContextProvider>
      <Routes>

        <Route path="/" element={<SharedSidebar />}>
          <Route path="login" element={<Login />} />
          <Route index element={<Home/>}/>
          <Route path="admin" element={<Admin/>}/>
        </Route>
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
