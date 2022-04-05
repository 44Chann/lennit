const TopCommunity = () => {
    return (
        <>
            <div className="flex border drop-shadow-md p-2 items-center my-3">
                <div className="flex mx-2 items-center">
                    <h2 className="mx-2">1</h2>
                    <p className="text-green-400">up</p>
                </div>
                <div className="flex grow justify-between mx-2 items-center">
                    <div className="flex items-center">
                        <div className="mx-2 w-8">
                            <img src="/pfp.png" alt="" /></div>
                        <p>lennit</p>
                    </div>
                    <p className="border-black border rounded-full px-4">follow</p>
                </div>
            </div>
        </>
    )
}

export default TopCommunity;