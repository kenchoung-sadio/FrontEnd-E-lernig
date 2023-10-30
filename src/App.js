import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignInPage from './Pages/SignInPage/signIn';
import SignUpPage from './Pages/SignUpPage/signUp';
import Main from './Pages/Main/main';


function App() {



  return (
    <div>
     {/* <Navbar />*/}
        <Routes>
          <Route path="/*" element={<Main />} />
          <Route path="/login" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      {/*<Footer />*/}
    </div>
  );
}

export default App;
