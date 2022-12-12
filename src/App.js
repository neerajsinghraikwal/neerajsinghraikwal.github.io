import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  return (
    <div className="App">
    <Router>
      <div className="App" >
        <Navbar />
        <Routes>
          <Route path="/:id" element={<Home />} />
          <Route path="*" exact element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </div>
  );
}

export default App;
