import "./App.scss";
import Header from "./parts/header/header";
import Footer from "./parts/footer/footer";

import TestPage from "./Pages/testPage";

function App() {
  return (
    <div className="App">
      <Header />
      <TestPage />
      <Footer />
    </div>
  );
}

export default App;
