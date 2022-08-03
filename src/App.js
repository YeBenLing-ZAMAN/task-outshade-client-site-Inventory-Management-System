import Login from './Component/Authencation/Login';
import { Routes, Route } from "react-router-dom";
import Signin from './Component/Authencation/Signin';
import NotFoundPage from './Component/NotFoundPage';
import Products from './Component/ProductAndCatagoris/Products';
import Navbar from './Component/Navbar';
import Dashboard from './Component/Dashboard/Dashboard';

function App() {
  return (
    <>
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="login" element={<Login />} />
        <Route path="signin" element={<Signin />} />
        <Route path="dashboard" element={
            <Dashboard />
        }></Route>
        <Route path="product" element={<Products />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

    </>
  );
}

export default App;
