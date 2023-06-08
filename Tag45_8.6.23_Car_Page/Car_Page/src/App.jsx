import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

import Home  from "./components/Home";
import Readmore  from "./components/ReadMore";
function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detailpage" element={<Readmore />} />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
