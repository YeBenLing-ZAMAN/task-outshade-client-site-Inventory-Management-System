import Login from './Component/Authencation/Login';
import { Routes, Route } from "react-router-dom";
import Signin from './Component/Authencation/Signin';
import NotFoundPage from './Component/NotFoundPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="login" element={<Login />} />
        <Route path="signin" element={<Signin />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

    </>
  );
}

export default App;
