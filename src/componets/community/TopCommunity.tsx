import TopCommunity from "./community";

const TrendingCommunities = () => {
    return <>
        <div className="border sticky top-8 text-center">
            <h1 className="font-bold">Trending</h1>
            <div>
                <TopCommunity />
                <TopCommunity />
                <TopCommunity />
                <TopCommunity />
                <TopCommunity />
                <TopCommunity />
                <TopCommunity />
                <TopCommunity />
            </div>
            <div>
                <a href="" className="text-blue-400 underline">Show more</a>
            </div>
        </div>
    </>
}

export default TrendingCommunities;