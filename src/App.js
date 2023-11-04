import './App.css';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
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


function App() {
  return (
    <>
    <BrowserRouter>
  
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route> 
      <Route path="/dashboard" element={<Dashboard />}></Route> 
      <Route path="/class" element={<Class />}></Route> 
      <Route path='/tasks' element={<Tasks/>}></Route>
      <Route path='/webcode' element={<Webcode/>}></Route>
      <Route path='/capstone' element={<Capstone/>}></Route>
      <Route path='/queries' element={<Queries/>}></Route>
      <Route path='/viewQueries' element={<QueriesList/>}></Route>
      <Route path='/requirements' element={<Requirements/>}></Route>
      <Route path='/syllabus' element={<Syllabus/>}></Route>
      <Route path='/certificate' element={<Certificate/>}></Route>
      <Route path='/joinclass' element={<JoinClass/>}></Route>
    </Routes>
  </BrowserRouter>
   
    </>
    
  );
}

export default App;