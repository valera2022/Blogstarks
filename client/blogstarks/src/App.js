import logo from './logo.svg';
import './App.css';
import useState from "react"
import Signup from './Signup';
import CreateBlog from './createblog/CreateBlog';
import { AppProvider } from './context/context';
import { Routes, Route } from 'react-router-dom';

function App() {
 
  return (
    <div className="App">
      <AppProvider>
        <Routes>
          <Route path="/" element={<Signup/>}/>
          <Route path="/add" element={<CreateBlog/>}/>
   
        </Routes>
    </AppProvider>
    </div>
  );
}

export default App;
