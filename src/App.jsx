import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import InsertImg from "./pages/insertImg";

function App() {
  return (
    <div className="h-screen w-full">
      <nav className="w-full flex px-12 h-20 shadow-md bg-white shadow-gray-200 justify-between items-center font-serif">
        <div className="h-full flex items-center">
        <img src="/public/download.jpeg" className="h-16 w-32 rounded-md" alt="" />
        <h1 className="font-bold text-2xl">Image Gallre</h1>
        </div>
       <ul className="flex gap-8 items-center justify-center">
        <li>
          <a href="/">Home</a>
        </li>
        <li><a href="Image">AddImage</a></li>
       </ul>
      </nav>
      {/* nave ended */}
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Images" element={<InsertImg />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App