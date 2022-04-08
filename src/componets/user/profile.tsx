import { Link, Outlet } from "react-router-dom";
import { ArticleCard } from "../..";

const Profile = () => {

    const links = [
        {
            name: "overview",
            link: ""
        },
        {
            name: "posts",
            link: "posts"
        },
        {
            name: "followers",
            link: "followers"
        },
        {
            name: "communities",
            link: "communities"
        },
    ]

    return (
        <>
            <div className="w-full items-start">
                {/* profile main */}
                <div className=" border border-black">
                    {/* top tab bar overview posts followers communities tags  */}
                    <div className="flex w-full my-1 drop-shadow-2xl  border-b p-3">
                        {links.map((link) => {
                            return <Link className="font-medium underline underline-offset-1 text-lg mx-2" to={link.link} >{link.name}</Link>
                        })}
                    </div>
                    <Outlet />
                </div>
            </div>
        </>
    )
}


export default Profile;