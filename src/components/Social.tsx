import { FaFacebook,FaInstagram,FaTiktok,FaWhatsapp    } from "react-icons/fa";

const Social = () => {
    return (
        <div className="flex gap-4 text-2xl p-2">
            <a className="hover:text-blue-700 hover:scale-125 hover:-translate-y-1" href="#">
                <FaFacebook />
            </a>
            <a className="hover:text-red-700 hover:scale-125 hover:-translate-y-1" href="#">
                <FaInstagram />
            </a>
            <a className="hover:font-bold hover:scale-125 hover:-translate-y-1" href="#">
                <FaTiktok />
            </a>
            <a className="hover:text-green-700 hover:scale-125 hover:-translate-y-1" href="#">
                <FaWhatsapp  />
            </a>
        </div>
    )
}

export default Social