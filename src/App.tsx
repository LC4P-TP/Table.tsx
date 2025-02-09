import { Route, Routes, Outlet } from "react-router-dom";
import "./App.scss";
import Header from "./parts/header/header";
import Footer from "./parts/footer/footer";

import RequireAuth from "./auth/RequireAuth";
import RequireAccessToShow from "./auth/RequireAccessToShow";

import Login from "./Pages/Login/login";
import Home from "./Pages/Home/home";
import Default from "./Pages/Default";
import TestPage from "./Pages/testPage";

import TestPageMenu from "./Pages/TestPageMenu/testPageMenu";
import TestPageSubMenu from "./Pages/TestPageMenu/testPageSubMenu";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<RequireAuth Component={Outlet} />}>
          <Route path="/" element={<Home />} />
          <Route path="/testPage" element={<RequireAccessToShow accesName="testPage" Component={TestPage} />} />
          <Route
            path="/testPageMenu"
            element={<RequireAccessToShow accesName="testPageMenu" Component={TestPageMenu} />}
          />
          <Route
            path="/testPageSubMenu"
            element={<RequireAccessToShow accesName="testPageSubMenu" Component={TestPageSubMenu} />}
          />

          <Route path="/*" element={<Default />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
