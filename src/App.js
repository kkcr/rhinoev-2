import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Aboutus from "./Pages/Aboutus";
import Contact from "./Pages/Contact";
import Compareall from "./Pages/Compareall";
import Prebook from "./Pages/Prebook";


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function NotFound() {
  return (
    <div>
      <h1>404 Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<Aboutus />} />
          <Route path="/Prebook" element={<Prebook />} />
          <Route path="/Compare" element={<Compareall />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Products/:id" element={<Products />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
