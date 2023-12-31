import { Link } from "react-router-dom"

const Page404 = () => {
    return (
        <section className="w-full h-full flex justify-center items-center">
            <h1>Page Not Found</h1>
            <Link to={"/"}>
                <button className="btn btn-primary">
                    Go to Home
                </button>
            </Link>
        </section>
    )
}

export default Page404