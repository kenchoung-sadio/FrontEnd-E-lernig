import './App.css';
import Footer from './Components/Footer/footer';
import { Navbar } from './Components/Navbar/navbar';
import Landing from './Pages/Landing/landing';


function App() {
  return (
    <div>
      <Navbar />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
