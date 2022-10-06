import logo from './logo.svg';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import MemberList from "./pages/members/MemberList";

function App() {
  return (
      <Routes>
          <Route path="/" element={<MemberList />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
      </Routes>
  );
}

export default App;
