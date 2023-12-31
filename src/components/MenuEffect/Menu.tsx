import { FaWhatsapp } from "react-icons/fa"
import { Link } from "react-router-dom"

const Menu = ( {pippo}:any ) => {
    
    
    return (
        <nav className="menu z-40" >
            <div className="flex justify-start">
                <img className="w-[50px]" src="icon/barber-shop.png" alt="" />
            </div>
            <ul className="navMenu list-disc">
                <Link onClick={pippo} className="flex items-center" to={"/works"}>
                    <li>
                        Tagli
                    </li>
                </Link>

                <Link to={"/service"}>
                    <li>
                        Servizi
                    </li>
                </Link>

                <Link to={"/foundMe"}>
                    <li>
                        Vieni a trovarmi
                    </li>
                </Link>

                {/* <Link to={"/review"}>
                    <li>
                        Review
                    </li>
                </Link> */}

                <Link to={"/service"}>
                    <div className="flex">
                        <li className="">
                            Prendi <br /> un appuntamento
                        </li>
                        <li className="p-0">
                            <span className="p-0 -translate-x-4 text-green-400"><FaWhatsapp /></span>
                        </li>
                        {/* <p className="text-3xl flex items-end text-green-400">
                            <FaWhatsapp />
                        </p> */}
                    </div>
                </Link>

            </ul>
        </nav>
    )
}

export default Menu