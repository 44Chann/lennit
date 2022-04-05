import { useState } from "react"

const Search = () => {
    const [value, setValue] = useState("")
    return (
        <>
            <div className="min-w-[400px] border" >
                <input type="text" placeholder="search lennit" className="p-2 w-full bg-gray-50" value={value} onChange={(e) => {
                    setValue(e.target.value)
                }} />
            </div>
        </>
    )
}

export default Search;