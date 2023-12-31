import { Link } from "react-router-dom"
import Social from "./Social"
import Nav from "./MenuEffect/Nav"



const Header = () => {
    return (
        <div className="h-[100px] bg-[#221C1C] flex justify-center relative">
            <div> 
                <Nav />
            </div>
            <Link to={"/"}>
                <img className="w-[200px] h-[130px] object-cover rounded-xl translate-y-10" src="./logo.jpg" alt="" />
            </Link>
            <div className="absolute right-0 top-0">
                <Social />
            </div>
        </div>
    )
}

export default Header