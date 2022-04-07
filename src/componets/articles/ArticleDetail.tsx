import { Link } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import MoreArticleCard from "./More";

const ArticleDeatils = () => {
    return (
        <>
            <div className="w-full  p-6 flex">
                <div className="w-[60%]">
                    {/* article section */}
                    {/* board info */}
                    <div className="w-full border flex  items-center">
                        <img src="/pfp.png" className="w-8" alt="" />
                        <h2 className="mx-4">posted in <Link className="font-bold" to="/board/:boardID"><a href="">44Chan</a></Link></h2>
                    </div>
                    {/* writter  and article info  */}
                    <div className="my-9 flex">
                        <div>
                            <img src="/pfp.png" className="w-10" alt="" />
                        </div>
                        <div className="mx-4">
                            <p className="text-xl font-normal">44 Chann</p>
                            <div className="flex">
                                <p>Apr 7 | </p>
                                <p>3 min read</p>
                            </div>
                        </div>
                    </div>

                    {/* article body */}
                    <div>
                        <div>
                            {/* title  */}
                            <h1 className="text-4xl font-black pb-10">The First Lennit Post</h1>
                            {/* header img earhter user puts it or you create one on the server  */}
                            <div className="w-full pb-9">
                                <img src="/art.avif" className="object-cover" alt="art.avif" />
                            </div>
                            {/* content it self */}
                            <p className="text-lg leading-10 text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem rerum aliquam reiciendis reprehenderit, cupiditate nemo fuga asperiores nulla deserunt adipisci, totam commodi facilis accusantium iste? Praesentium recusandae sit ea, aspernatur, repellendus ipsa laboriosam quo adipisci error maiores rem! Debitis perferendis soluta nulla adipisci reprehenderit dolore sapiente hic dicta minus dolorem quibusdam molestias dolores commodi, maiores beatae architecto sunt facere in temporibus magnam! Ipsum, ab veniam laboriosam voluptates, hic soluta aut tempora commodi temporibus nesciunt dolores eum, iure nostrum dolorum fugit tenetur nam nihil quos consectetur culpa sequi voluptatibus magni laudantium sunt. Vitae facere magnam sed tenetur illo dolorum saepe, natus optio quia voluptatem hic adipisci vero quo eaque repellendus, reprehenderit, fuga aut? Temporibus totam odit veniam nemo officia vel facilis a tenetur sapiente consectetur suscipit nobis iusto blanditiis quis, voluptatibus consequatur aliquid. Dolor, iure. Rerum blanditiis ipsa veritatis reprehenderit fugiat temporibus facilis deleniti perferendis officiis quod sunt eos molestias nesciunt rem, aperiam impedit quas labore cupiditate nisi doloremque! Pariatur quisquam aut quibusdam nobis dolore velit sequi fugit, autem ullam eveniet animi quo labore, deserunt optio repellendus impedit esse omnis voluptatem cumque quis, facere expedita totam doloremque. Quibusdam repellendus eaque pariatur quod cum laudantium facere aliquam, culpa fugit eius sit delectus doloribus ratione distinctio et. Dolorum consequatur corrupti explicabo soluta quam quos culpa itaque exercitationem, veritatis velit necessitatibus dolore ducimus cum autem fugiat maxime nesciunt consectetur officia iste facilis. Ducimus reprehenderit accusantium fugiat veniam molestias repudiandae, soluta sed, exercitationem corrupti voluptates iste ad, quasi ipsa omnis. Dignissimos consequatur at ex sint incidunt nam enim ratione necessitatibus aperiam vel, quos in placeat quo. Veritatis, voluptatum, at, quibusdam dolore perferendis provident culpa voluptates obcaecati similique rerum sapiente? Eveniet, vero cumque. Aut hic sequi voluptatum excepturi ducimus totam quasi, error necessitatibus asperiores delectus nemo eveniet minus distinctio consequuntur atque ipsa ipsum quibusdam voluptas provident. Odit quam aspernatur optio velit quos quod, provident culpa quia repellat laborum enim perspiciatis nulla excepturi sunt quibusdam tempora voluptatem ducimus, corporis illo quis? Dignissimos, amet. Commodi quae rerum repellendus quaerat dolor incidunt eum ipsa debitis? Similique quasi molestias dolore cum dolorem tenetur, perspiciatis, obcaecati, excepturi nisi fugiat omnis consectetur cupiditate ea vel voluptates voluptatem culpa deleniti. Unde, dolor quos quisquam voluptatibus odio molestias, in quo nam reiciendis laboriosam necessitatibus? Eum culpa nisi illum assumenda, incidunt ipsa similique perspiciatis! Eos ullam dolorum, aliquam nihil sequi repudiandae saepe ea tenetur sed blanditiis ex quos quisquam quaerat itaque veniam enim totam praesentium.</p>
                        </div>

                        {/*  likes and comment */}
                        <div className="flex my-8 font-bold border-b-black border-b py-4" >
                            <div className="flex pr-4 font-bold">
                                <p className="px-2">like</p>
                                <p>122k</p>
                            </div>
                            <div className="flex">
                                <p className="px-2">
                                    comment
                                </p>
                                <p>12k</p>
                            </div>

                        </div>

                    </div>
                    <div className="py-5">
                        <h2 className="font-bold text-3xl">More</h2>
                        <MoreArticleCard />
                        <MoreArticleCard />
                        <MoreArticleCard />
                        <MoreArticleCard />
                        <MoreArticleCard />
                    </div>
                </div>
                <div className="w-[35%] sticky top-10 h-[800px] ">
                    {/* profiles of board and writter */}
                    {/* board profile */}
                    {/* export this as a board overview componet for other page later  */}
                    <div className=" my-8 mx-7 w-[250px] border border-black h-[350px] px-4 py-2">
                        {/* head section */}
                        <div className="flex items-center py-3 ">
                            <img className="w-8" src="/pfp.png" alt="" />
                            <Link to="/boards/:userid" className="underline">
                                <h2 className="mx-3">b/44 Chan</h2>
                            </Link>

                        </div>
                        {/* descripton */}
                        <div className="py-4">
                            <p className="text-[14px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime corporis cumque exercitationem ipsum possimus! Nihil accusamus et velit ex cum!</p>
                        </div>
                        {/* stats like post and members  */}
                        <div className="flex justify-between text-sm font-medium my-4">
                            <p>120k members</p>
                            <p>11k posts</p>
                        </div>
                        {/* created at  */}
                        <p>Created At 12 Aug 2021</p>

                        <div className="p-3 border-t border w-full flex justify-center ">
                            <button className="border px-4 rounded-full first-letter: border-black ">join</button>
                        </div>
                    </div>
                    <div className=" p-4  mx-7 w-[250px] border border-black h-[300px]">
                        <div className="flex flex-col  items-center py-3 ">
                            <img className="w-12" src="/pfp.png" alt="" />
                            <Link to="/profile/:profileID " className="underline">
                                <h2 className="mx-3">vikash</h2>
                            </Link>
                        </div>
                        <div className="py-4">
                            <p className="text-[14px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime corporis cumque exercitationem ipsum possimus! Nihil accusamus et velit ex cum!</p>
                        </div>

                        <div className="flex  text-sm font-medium my-4">
                            <p>120k followers</p>
                            <button className="mx-4 border px-4 rounded-full first-letter: border-black ">follow</button>
                        </div>
                    </div>
                    {/* user profile */}
                </div>
            </div>

        </>
    )
}

export default ArticleDeatils;

