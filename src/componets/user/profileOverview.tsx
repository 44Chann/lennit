import { ArticleCard } from "../.."

const ProfileOVerview = () => {
    return (
        <>
            <div className="w-full items-start flex">
                <div className="w-[60%]" >
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
                {/* side profile componet  */}
                <div className="mx-4  max-w-[350px] border my-4 rounded-sm p-5 ">
                    <div >
                        <div className="flex items-center">
                            <img src="/pfp.png" className="w-20 mx-4" alt="" />
                            <div>
                                <h2>44Chann</h2>
                                <small>u/44chan</small>
                                <div className="flex">
                                    <p>12 followers</p>
                                    <p className="mx-4">2o posts</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div>
                        <p className="my-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum dignissimos magni sed tot lorem20</p>
                    </div>
                    <div className="w-full">
                        <button className="w-full border border-black rounded-full">follow</button>
                    </div>
                </div>
            </div>
        </>
    )

}

export default ProfileOVerview;