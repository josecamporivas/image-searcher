import React from "react"

const POPULAR_SEARCHS = ['Matrix', 'Random', 'Architecture']

export default function PopularSearches() {
    return (
        <div id="popularSearches">
            <h3 id="popularSearchesTitle">Popular searches</h3>
            <ul id="popularSearchesList" >
                {POPULAR_SEARCHS.map(elem => {
                    return <li key={elem} className="popularSearchItem">{elem}</li>
                })}
            </ul>
        </div>
    )
}

