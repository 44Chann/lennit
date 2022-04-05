import { ArticleCard, TrendingCommunities } from "..";
const Feed = () => {
    return <>
        <div className=" w-[80%] m-auto flex  justify-center  ">
            <div className="w-[50%]">
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
            </div>
            <div className="w-[400px] mx-7 ">
                <TrendingCommunities />
            </div>
        </div>

    </>
}

export default Feed;