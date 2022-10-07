import {Route, Routes} from 'react-router-dom';
import './assets/css/App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import MemberList from "./pages/members/MemberList";

// 화면에 보여지고 있는 초기 컴포넌트
function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/member" element={<MemberList/>}/>
        </Routes>
    );
}

export default App;
