import { Link } from "react-router-dom"
const Tabs = () => {
    const tabs = [
        {
            name: "Trending",
            link: "/tranding"
        },
        {
            name: "Random",
            link: "/random"
        }
    ]
    return (
        <>
            <div className="w-full border-b my-4 p-2">
                <ul>
                    {tabs.map((tab) => {
                        return <Link className="mx-3" to={tab.link}>{tab.name}</Link>
                    })}
                </ul>
            </div>
        </>
    )
}

export default Tabs;