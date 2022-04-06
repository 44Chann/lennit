import { Link } from "react-router-dom";

const ArticleCard = () => {
    return (
        <>
            {/* card container  */}


            <div className="border max-w-4xl flex justify-center m-auto p-3">
                {/* card */}
                <div className="">
                    {/* crd head sections */}
                    <div className="flex items-center my-4">
                        <div className="w-10">
                            <img src="/pfp.png" className="object-cover" alt="" />
                        </div>
                        <div>
                            <p className="mx-4 text-lg font-bold">{<Link to="/profile/:userid" className="text-blue-700 underline">Kid</Link>} posted in {<Link to="/boards/:boardid" className="text-blue-700 underline">44Chan</Link>}</p>
                        </div>
                    </div>
                    <Link to="/articles" >
                        <div className="p-3">
                            <h2 className="text-3xl font-bold ">THis First Post to lennit</h2>
                            <p className="text-[12px] text-bold mx-3">posted 2 Days Ago * 10 min read </p>
                        </div>
                    </Link>

                    <Link to="/articles" >
                        <div className="w-full">
                            <img src="/art.avif" className="object-cover" alt="" />
                        </div>
                        {/* summary */}
                        <div>
                            <p className="text-left py-3"> beatae molestiae nesciunt eum nam, ipsam illum perspiciatis. Mollitia reprehibusdam tenetur laboriosam architecto quisquam veniam nesciunt expedita optio sed! Ipsa repudiandae corrupti modi ab repellat eveniet consequatur nam ut ipsum, aspernatur maxime laudantium voluptate et vitae nisi doloremque iusto, eos quos voluptatem fugit? Voluptatem vero tempore, possimus iste repellat delectus dolorem quasi sint accusantium molestias minima vitae suscipit.</p>
                        </div>
                    </Link>

                    {/* likes and commetns */}
                    <div className="border-t flex justify-between m-3">
                        <p className="text-xl font-bold">likes: 2.3k</p>
                        <p className="text-xl font-bold">commets: 100</p>
                    </div>
                </div>


            </div>
        </>
    )
}

export default ArticleCard;