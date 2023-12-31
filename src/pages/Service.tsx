import { useState } from "react"
import Icon from "../components/icon"

const Service = () => {
    const [services] = useState([
        {
            id: 0,
            Title: "Taglio di Capelli Uomo",
            icon:"/icon/taglioCapelli.png",
            services: [
                {
                    text: "Questo servizio include la consulenza sul taglio di capelli più adatto in base alla forma del viso e allo stile desiderato.",
                },
                {
                    text: "Include anche il lavaggio e l'asciugatura dei capelli, se richiesto.",
                }
            ]
        },
        {
            id: 1,
            Title: "Barba e Rifiniture",
            icon:"/icon/taglioBarba.png",
            services: [
                {
                    text: "Questo servizio include la consulenza sul taglio di capelli più adatto in base alla forma del viso e allo stile desiderato.",
                },
                {
                    text: "Alcuni barbieri offrono anche trattamenti specifici per la barba, come l'applicazione di oli o balsami.",
                }
            ]
        },
        {
            id: 2,
            Title: "Trattamenti del Cuoio Capelluto",
            icon:"/icon/hairSpray.png",
            services: [
                {
                    text: "Questo servizio si concentra sulla salute del cuoio capelluto. Può includere massaggi del cuoio capelluto, trattamenti idratanti, e consigli per la cura quotidiana dei capelli.",
                },
                {
                    text: "Alcuni barbieri offrono anche trattamenti specifici per problemi del cuoio capelluto, come la forfora.",
                }
            ]
        },
    ])


    return (
        <div>
            <div className="container mx-auto px-5 flex flex-col items-center justify-around py-5 md:flex-row">
                {services.map((service) => (
                    <div className={`w-[200px] p-3 border border-black rounded text-center relative ${service.id % 2 === 0 ? "mt-20" : "mt-5"}`} >
                        <div className="absolute -left-6 -top-6">
                            <Icon image={service.icon} />
                        </div>
                        <h2 className="p-3 font-bold">{service.Title}</h2>
                        <ul className="text-start text-sm">
                            {service.services.map((service) => (
                                <li>
                                    -{service.text}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                {/* <ServiceBanner /> */}

                {/* <div className="w-[150px] border text-center relative">
                    <div className="absolute -left-6 -top-6">
                        <Icon image="/icon/taglioCapelli.png" />
                    </div>
                    <h2 className="p-3">Taglio di Capelli Uomo</h2>
                    <ul>
                        <li>Questo servizio include la consulenza sul taglio di capelli più adatto in base alla forma del viso e allo stile desiderato.</li>
                        <li>Include anche il lavaggio e l'asciugatura dei capelli, se richiesto.</li>
                    </ul>
                </div>

                <div className="w-[150px] text-center relative border">
                    <div className="absolute -left-6 -top-6">
                        <Icon image="/icon/taglioBarba.png" />
                    </div>
                    <h2 className="p-3">Barba e Rifiniture</h2>
                    <ul className="text-start">
                        <li>-Questo servizio è dedicato alla cura della barba. Può includere la rifinitura della barba, la definizione dei contorni, la rasatura, e la cura della pelle del viso.</li>
                        <li>-Alcuni barbieri offrono anche trattamenti specifici per la barba, come l'applicazione di oli o balsami.</li>
                    </ul>
                </div>

                <div className="w-[150px] text-center relative">
                    <div className="absolute -left-6 -top-6">
                        <Icon image="/icon/hairSpray.png" />
                    </div>
                    <h2 className="p-3">Trattamenti del Cuoio Capelluto</h2>
                    <ul>
                        <li>Questo servizio si concentra sulla salute del cuoio capelluto. Può includere massaggi del cuoio capelluto, trattamenti idratanti, e consigli per la cura quotidiana dei capelli.</li>
                        <li>Alcuni barbieri offrono anche trattamenti specifici per problemi del cuoio capelluto, come la forfora.</li>
                    </ul>
                </div> */}

            </div>
        </div>
    )
}

export default Service