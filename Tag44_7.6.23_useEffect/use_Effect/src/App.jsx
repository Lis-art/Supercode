
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ArticlePage from "./components/ArticlePage";
import ArticleGallery from "./pages/ArticleGallery";

function App() {

  return (
    <div className='Wrapper'>
      <BrowserRouter>
        <Routes>
        {/*}  <Route path="/" element={<Home />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
{/*           <Route path="/" element={<ArticleGallery />} /> */}
        <Route path="/" element={<ArticleGallery />} /> 
          <Route path="/:productid" element={<ArticlePage />} />
        </Routes> 
      </BrowserRouter>
    </div>
  )
}

export default App


{/*         {/*}  <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<ArticleGallery />} /> 
      <Route path="/:productid" element={<ArticleGallery />} /> 
        <Route path="/home" element={<ArticlePage />} /> */}