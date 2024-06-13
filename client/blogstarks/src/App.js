import logo from './logo.svg';
import './App.css';
import useState from "react"
import Signup from './Signup';
import CreateBlog from './createblog/CreateBlog';
import { AppProvider } from './context/context';
import { Routes, Route } from 'react-router-dom';
import Bloglist from './bloglist/BlogList';
import LogIn from './login/LogIn';
import Navbar from './NavBar';

function App() {
 
  return (
    <div className="App">
      <AppProvider>
        <Navbar/>
        <Routes>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/add" element={<CreateBlog/>}/>
          <Route exact path="/" element={<Bloglist />}/>
          <Route path="/login" element={<LogIn />}/>
   
        </Routes>
    </AppProvider>
    </div>
  );
}

export default App;
