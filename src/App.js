import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./component/Homepage";
import Footer from "./component/footer";
import AllRepo from "./component/AllRepo";
function App() {
  return (
    <div className="App">
      <Routes>
    {/*test*/}
        <Route path="/" element={<Homepage />} />
        <Route path="/allrepo" element={<AllRepo />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
