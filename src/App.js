import { Route, Routes } from "react-router-dom";
import RequireAuth from "./components/Sidebar/RequireAuth";
import SharedSidebar from "./components/Sidebar/SharedSidebar";
import { AuthContext, AuthContextProvider } from "./context/AuthContext";
import AddToInventory from "./pages/AddToInventory";
import Admin from "./pages/Admin/Admin";
import Help from "./pages/Help";
import History from "./pages/History";
import Home from "./pages/Home/Home";
import InventoryList from "./pages/InventoryList/InventoryList";
import Login from "./pages/Login";
import Reports from "./pages/Reports";

function App() {
  return (
    <AuthContextProvider>
      <Routes>

        <Route path="/" element={<SharedSidebar />}>
          <Route path="login" element={<Login />} />
          <Route index element={<Home/>}/>
          <Route path="admin" element={<Admin/>}/>
          <Route path="add-to-inventory" element={<AddToInventory/>}/>
          <Route path="history" element={<History/>}/>
          <Route path="inventory-list" element={<InventoryList/>}/>
          <Route path="reports" element={<Reports/>}/>
          <Route path="help" element={<Help/>}/>
        </Route>
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
