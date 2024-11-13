import "./App.scss";
import Header from "./parts/header/header";
import Footer from "./parts/footer/footer";

import TestPage from "./Pages/testPage";
import RequireAuth from "./auth/RequireAuth";

function App() {
  const ProtectedDashboard = RequireAuth(TestPage);
  return (
    <div className="App">
      <Header />
      <ProtectedDashboard  />
      <Footer />
    </div>
  );
}

export default App;
