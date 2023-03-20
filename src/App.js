import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./home/Home";
import Product from "./product/Product";
import Contact from "./contact/Contact"

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/> }  />
        <Route path="product" element={<Product />} />
        <Route path="contact" element={<Contact />} />
        <Route/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
