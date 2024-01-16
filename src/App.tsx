import "./App.scss";
import Header from "./parts/header/header";
import Footer from "./parts/footer/footer";

import TestPages from "./Pages/testPages/test";

function App() {
  return (
    <div className="App">
      <Header />
      <TestPages />
      <Footer />
    </div>
  );
}

export default App;
