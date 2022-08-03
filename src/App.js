import Login from './Component/Authencation/Login';
import { Routes, Route } from "react-router-dom";
import Signin from './Component/Authencation/Signin';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="login" element={<Login />} />
        <Route path="signin" element={<Signin />} />
      </Routes>

    </>
  );
}

export default App;
