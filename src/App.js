import Login from './Component/Authencation/Login';
import { Routes, Route } from "react-router-dom";
import Signin from './Component/Authencation/Signin';
import NotFoundPage from './Component/NotFoundPage';
import Products from './Component/ProductAndCatagoris/Products';
import Navbar from './Component/Navbar';
import Dashboard from './Component/Dashboard/Dashboard';
import Catagory from './Component/ProductAndCatagoris/Catagory';
import Profile from './Component/Profile';
import { createContext, useState } from 'react';



export const UserContext = createContext("user");

function App() {
  const [userInfor, setUserInfo] = useState({});



  return (
    <>
      <UserContext.Provider value={[userInfor, setUserInfo]}>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="login" element={<Login />} />
          <Route path="signin" element={<Signin />} />
          <Route path="dashboard" element={
            <Dashboard />
          }>
            <Route index element={<Products />}></Route>
            <Route path="catagory" element={<Catagory />}></Route>
            <Route path="profile" element={<Profile />}></Route>
          </Route>
          <Route path="product" element={<Products />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </UserContext.Provider>

    </>
  );
}

export default App;
