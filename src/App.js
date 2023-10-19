import './App.css';
import Footer from './Components/Footer/footer';
import { Navbar } from './Components/Navbar/navbar';
import LandingPage from './Pages/Landing/landing';


function App() {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
