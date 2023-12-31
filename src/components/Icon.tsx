
interface Icon {
    image:string
}

const Icon = ({image}:Icon) =>  {
    return (
        <div className="w-[50px]">
            <img src={image} alt="" />
        </div>
    )
}

export default Icon