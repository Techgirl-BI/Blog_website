import Navbar from "./components/Navbar";
import Feed from "./pages/MyBlog/Feed";
import Books from "./pages/books/books";
import Home from "./pages/home/home";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Shop from "./pages/shop/shop";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path="/blogs" element={<Feed/>}/>
    <Route path="/" element={<Home/>}/>
    <Route path="/books" element={<Books/>}/>
    <Route path="/shop" element={<Shop/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
   </Routes>
   </BrowserRouter>
   
   </>
  );
}

export default App;
