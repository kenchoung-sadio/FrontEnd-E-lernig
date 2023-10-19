import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/footer';
import { Navbar } from './Components/Navbar/navbar';
import LandingPage from './Pages/LandingPage/landing';
import SignInPage from './Pages/SignInPage/signIn';


function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<SignInPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
