import { ArticleCard, ProfileTabs } from "../.."
import { Link, Outlet } from "react-router-dom";
const BoardProfile = () => {


    return (
        <>
            <div className="w-full items-start flex">
                <div className="w-[60%]" >
                    <div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center ">
                                <img src="/pfp.png" className="w-12" alt="" />
                                <div className=" flex flex-col mx-4">
                                    <h1 className="text-3xl font-bold">44Chann</h1>
                                    <small>b/44Chann</small>
                                </div>
                            </div>
                            <div className="">
                                <button className="px-8 py-1 border border-black rounded-full bg-transparent ">join</button>
                            </div>
                        </div>
                    </div>

                    <div>
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
                </div>
                {/* side profile componet  */}
                <div className="mx-4  max-w-[350px] border my-4 rounded-sm p-5 ">
                    <div>
                        <div >
                            <div className="flex items-center">
                                <img src="/pfp.png" className="w-20 mx-4" alt="" />
                                <div>
                                    <h2>44Chann</h2>
                                    <small>b/44chan</small>
                                    <small className="mx-4 underline">public</small>
                                    <div className="flex">
                                        <p>12k members</p>
                                        <p className="mx-4">2000 posts</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div>
                            <p className="my-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum dignissimos magni sed tot lorem20</p>
                        </div>
                        <div className="w-full">
                            <button className="w-full border border-black rounded-full">join</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default BoardProfile;