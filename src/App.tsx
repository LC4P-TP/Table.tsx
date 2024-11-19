import { Route, Routes, Outlet } from "react-router-dom";
import "./App.scss";
import Header from "./parts/header/header";
import Footer from "./parts/footer/footer";
import RequireAuth from "./auth/RequireAuth";
import Login from "./Pages/Login/login";
import Home from "./Pages/Home/home";
import TestPage from "./Pages/testPage";
import InboundSupplies from "./Pages/inboundSupplies";
import RequireAccess from "./auth/RequireAccess";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={RequireAuth(Outlet)({})}>
          <Route path="/" element={<Home />} />
          <Route path="/TestPage" element={<TestPage />} />
          <Route path="/InboundSupplies" element={RequireAccess("income", InboundSupplies)({})} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
