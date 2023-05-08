import './App.css';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import { useSelector } from 'react-redux';
import Navbar from './components/navbar/Navbar';
import { Routes, Route } from "react-router-dom"
import Auth from './pages/auth/Auth';
import ForgotPasswordPage from './components/forgotPassword/ForgotPassword';
import ResetPassword from './components/resetPassword/ResetPassword';
import Faculty from './components/faculty/Faculty';
import Phd from './components/phd/Phd';
import FacultyRegister from './pages/faculty/FacultyRegister';
import PhdRegister from './pages/phd/PhdRegister';
import Researchs from './pages/research/Researchs';
import Project from './components/project/Project';
import FacultyProject from './components/facultyProject/FacultyProject';
import About from './pages/about/About';


function App() {
  const {loading, isAuthenticated,error}=useSelector((state)=>state.user)

  return (
    <div className="App">
    {/* <ForgotPasswordPage /> */}
    {/* <Faculty /> */}
    {/* <Phd /> */}
    {/* <FacultyRegister /> */}
    {/* <PhdRegister /> */}
    {/* <Researchs /> */}
    {/* <Project /> */}
    {/* <About /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={ <Auth />} />
        <Route path='/forgot/password' element={<ForgotPasswordPage />} />
        <Route path='/api/users/password/reset/:token' element={<ResetPassword />} />
        <Route path='/faculty' element={isAuthenticated ?<Faculty />:<Auth />} />
        <Route path='/phd' element={isAuthenticated ?<Phd /> :<Auth />} />
        <Route path='/addphd' element={<PhdRegister />} />
        <Route path='/addfaculty' element={<FacultyRegister />} />
        <Route path='/addProject' element={<Researchs />} />
        <Route path='/allProject' element={isAuthenticated ?<Project /> :<Auth />} />
        <Route path='/addFacultyProject' element={<FacultyProject /> } />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
