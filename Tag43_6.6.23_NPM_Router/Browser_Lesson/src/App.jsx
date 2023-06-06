
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/about";
import Contact from "./pages/contact";
import Oeffnungszeiten from "./pages/oeffnungszeiten"
import Speisekarte from "./pages/speisekarte"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<Home pizza="Willkommen" />}/>
          <Route path="/contact" element={<Contact pizza="Kontaktier uns gerne"/>} />
          <Route path="/oeffnungszeiten" element={<Oeffnungszeiten pizza="Öffnungszeiten" />} />
          <Route path="/speisekarte" element={<Speisekarte pizza="Unsere Speisen" />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
