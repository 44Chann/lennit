
import { Link } from "react-router-dom"
import Search from "./Search"
const Navbar = () => {


    const navlinks = [
        {
            url: "/signup",
            name: "signup"
        },
        {
            url: "/login",
            name: "login"
        }
    ]

    return (
        <>
            <nav className="flex justify-between p-6">
                <h1 className="text-3xl">Lennit</h1>
                <Search />
                <ul className="flex">
                    {navlinks.map((link) => {
                        return <Link className="mx-3" to={link.url}>{link.name}</Link>
                    })}
                </ul>
            </nav>
        </>
    )
}

export default Navbar;