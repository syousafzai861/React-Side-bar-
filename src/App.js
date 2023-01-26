
import Sidebar from "./Components/Sidebar";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Dashboard from "./Components/pages/Dashboard";
import About from "./Components/pages/About";
import Analytics from "./Components/pages/Analytics";
import Comment from "./Components/pages/Comment";
import Product from "./Components/pages/Product";
import Productlist from "./Components/pages/Productlist";

function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productlist" element={<Productlist />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
