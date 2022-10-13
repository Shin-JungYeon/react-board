import {useNavigate} from "react-router-dom";
import Menu from "../components/Menu";

function Home() {
    const navigate = useNavigate();  //

    const moveToAbout = () => {
        navigate("/about");
    }

    return (
        <div>
            <h1>Home</h1>
            <p>여기는 Home 입니다.</p>
            <a onClick={moveToAbout}>소개</a>
        </div>
    )
}

export default Home;