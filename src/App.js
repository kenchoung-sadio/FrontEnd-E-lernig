import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './Pages/LandingPage/landing';
import SignInPage from './Pages/SignInPage/signIn';
import CoursesPage from './Pages/CoursesPage/courses';


function App() {



  return (
    <div>
     {/* <Navbar />*/}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<SignInPage />} />
          <Route path="/list-courses" element={<CoursesPage />} />
        </Routes>
      {/*<Footer />*/}
    </div>
  );
}

export default App;
