import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Pricing from './pages/Pricing.jsx';
import Calculator from './pages/Calculator.jsx';
import Contact from './pages/Contact.jsx';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 antialiased selection:bg-indigo-500 selection:text-white">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}