import { useState } from "react";
import { useSearchParams, useLoaderData } from "react-router-dom"
import { Cards } from "./cards";

export const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [search, setSearch] = useState();
    const lessons = useLoaderData()
    const setOrdering = () => {
        const newOrdering = search;
        searchParams.set("ask", newOrdering);
        setSearchParams(searchParams, { replace: false });
    };
    return (
        <>
            <label htmlFor="input">Enter the lesson you want to find</label>
            <input type="text" id="input" onBlur={(e) => setSearch(e.target.value)} />
            <button onClick={setOrdering}>Search</button>
             <Cards lessons={lessons} />
        </>

    )
}