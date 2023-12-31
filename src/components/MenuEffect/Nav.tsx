import { useState, useEffect } from "react";
import { useAnimate, stagger } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
// import Menu from "./Menu";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

function useMenuAnimation(isOpen: boolean) {

    const [scope, animate] = useAnimate();

    useEffect(() => {
        const menuAnimations = isOpen
            ? [
                [
                    "nav",
                    { transform: "translateX(0%)" },
                    { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 }
                ],
                [
                    "li",
                    { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
                    { delay: stagger(0.05), at: "-0.1" }
                ]
            ]
            : [
                [
                    "li",
                    { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
                    { delay: stagger(0.05, { from: "last" }), at: "<" }
                ],
                ["nav", { transform: "translateX(-100%)" }, { at: "-0.1" }]
            ];

        animate([
            [
                "path.top",
                { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
                { at: "<" }
            ],
            ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
            [
                "path.bottom",
                { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
                { at: "<" }
            ],
            ...menuAnimations
        ]);
    }, [animate, isOpen]);

    return scope;
}



export default function App() {
    const [isOpen, setIsOpen] = useState(false);

    const scope = useMenuAnimation(isOpen);

    const CloseAndUp = () => {
        setIsOpen(!isOpen);
        window.scrollTo(0, 0);
    }

    return (
        <div className="z-40" ref={scope}>
            {/* <Menu /> */}
            <nav className="menu z-40" >
                <div className="flex justify-start">
                    <img className="w-[50px]" src="icon/barber-shop.png" alt="" />
                </div>
                <ul className="navMenu list-disc">
                    <Link onClick={CloseAndUp} className="flex items-center" to={"/works"}>
                        <li>
                            Tagli
                        </li>
                    </Link>

                    <Link onClick={CloseAndUp} to={"/service"}>
                        <li>
                            Servizi
                        </li>
                    </Link>

                    <Link onClick={CloseAndUp} to={"/foundMe"}>
                        <li>
                            Vieni a trovarmi
                        </li>
                    </Link>

                    {/* <Link to={"/review"}>
                    <li>
                        Review
                    </li>
                </Link> */}

                    <Link onClick={CloseAndUp} to={"/service"}>
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
            <MenuToggle toggle={() => setIsOpen(!isOpen)} />
        </div>
    );
}