import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Dashboard from "./components/dashboard/dasboard"
import Login from "./components/login/login.js"
import Signup from "./components/signup/signup.js"
import Class from './components/Students/Class';
import Tasks from './components/Tasks/tasks';
import Webcode from './components/Webcode/Webcode';
import Capstone from './components/Capstone/Capstone';
import Queries from './components/Queries/Queries';
import QueriesList from './components/Queries/QueriesList';
import Requirements from './components/Requirements/Requirements';
import Syllabus from './components/Syllabus/Syllabus';
import Certificate from './components/Certificates/Certificate';
import JoinClass from './components/Students/join';

//  For Protect the Routes 
import { ProtectedRoute } from './ProtectedRoute';
import LogOut from './Logout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}></Route>
          <Route path="/class" element={<ProtectedRoute><Class /></ProtectedRoute>}></Route>
          <Route path='/tasks' element={<ProtectedRoute><Tasks /></ProtectedRoute>}></Route>
          <Route path='/webcode' element={<ProtectedRoute><Webcode /></ProtectedRoute>}></Route>
          <Route path='/capstone' element={<ProtectedRoute><Capstone /></ProtectedRoute>}></Route>
          <Route path='/queries' element={<ProtectedRoute><Queries /></ProtectedRoute>}></Route>
          <Route path='/viewQueries' element={<ProtectedRoute><QueriesList /></ProtectedRoute>}></Route>
          <Route path='/requirements' element={<ProtectedRoute><Requirements /></ProtectedRoute>}></Route>
          <Route path='/syllabus' element={<ProtectedRoute><Syllabus /></ProtectedRoute>}></Route>
          <Route path='/certificate' element={<ProtectedRoute><Certificate /></ProtectedRoute>}></Route>
          <Route path='/joinclass' element={<ProtectedRoute><JoinClass /></ProtectedRoute>}></Route>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App; 