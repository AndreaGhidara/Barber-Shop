import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="p-10 flex items-center justify-center">
                <div className="container mx-auto flex flex-col items-center justify-center gap-5 md:flex-row md:gap-10">
                    
                    <Link className=" md:translate-y-10" to={"/works"}>
                        <button className="btn btn-primary">Tagli</button>
                    </Link>

                    <Link className=" md:translate-y-5" to={"/service"}>
                        <button className="btn btn-primary">Servizi</button>
                    </Link>

                    <button className="btn btn-primary">
                        <FaWhatsapp />
                        Scrivimi per un appuntamento
                    </button>

                    <Link className=" md:translate-y-5" to={"/foundMe"}>
                        <button className="btn btn-primary">Trova Luogo</button>
                    </Link>

                    <Link className=" md:translate-y-10" to={"/review"}>
                        <button className="btn btn-primary">Review</button>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Navbar