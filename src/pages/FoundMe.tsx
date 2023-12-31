const FoundMe = () => {
    return (
        <div className="container mx-auto px-10">
            <section>
                <div className="h-[400px] bg-slate-400">
                    <a target="_blanck" href="https://www.google.com/maps/place/Piazza+dei+Caduti+in+Guerra,+1,+12040+Sant'Albano+Stura+CN/@44.5097324,7.7188498,17z/data=!3m1!4b1!4m6!3m5!1s0x12cd5ec98b9a2603:0xc2dd80c5a7c011c1!8m2!3d44.5097286!4d7.7214247!16s%2Fg%2F11c23519_1?">
                        <img className="w-full h-full object-cover" src="/image/mapsNegozio.png" alt="" />
                    </a>
                </div>
                <div className="flex flex-col justify-center items-center pt-10 sm:p-10">
                    <p>Mi trovi a Sant'Albano Stura</p>
                    <p>In <span className=" font-semibold">PIAZZA CADUTI IN GUERRA 1,</span></p>
                    <p>
                        12040
                        <span>
                            Sant'Albano Stura
                        </span>
                        ,
                        <span>
                            CN
                        </span>
                    </p>
                </div>
            </section>
            <section>
                <div>
                    <div className="flex pt-10">
                        <a className="w-[50px] flex items-end" target="_blanck" href="https://www.google.com/maps/place/Piazza+dei+Caduti+in+Guerra,+1,+12040+Sant'Albano+Stura+CN/@44.5097324,7.7188498,17z/data=!3m1!4b1!4m6!3m5!1s0x12cd5ec98b9a2603:0xc2dd80c5a7c011c1!8m2!3d44.5097286!4d7.7214247!16s%2Fg%2F11c23519_1?">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Google_Maps_icon_%282020%29.svg/714px-Google_Maps_icon_%282020%29.svg.png" alt="" />
                            <p>Raggiungimi</p>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FoundMe