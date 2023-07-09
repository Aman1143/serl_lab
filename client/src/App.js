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
  const token=JSON.stringify(localStorage.getItem('token'));
  const {loading, isAuthenticated,error}=useSelector((state)=>state.user)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={ <Auth />} />
        <Route path='/forgot/password' element={<ForgotPasswordPage />} />
        <Route path='/api/users/password/reset/:token' element={<ResetPassword />} />
        <Route path='/faculty' element={ <Faculty />} />
        <Route path='/phd' element={ <Phd /> } />
        <Route path='/addphd' element={isAuthenticated ? <PhdRegister />:<Auth />} />
        <Route path='/addfaculty' element={isAuthenticated ?<FacultyRegister />:<Auth />} />
        <Route path='/addProject' element={<Researchs />} />
        <Route path='/allProject' element={<Project /> }/>
        <Route path='/addFacultyProject' element={ <FacultyProject />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
