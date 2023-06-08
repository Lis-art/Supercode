
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewsWebsite from './components/NewsWebsite';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewsWebsite />} />
        <Route path="/country/:country" element={<NewsWebsite />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
