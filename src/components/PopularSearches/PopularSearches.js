import React from "react"
import { Link } from "react-router-dom"

const POPULAR_SEARCHS = ['Matrix', 'Random', 'Architecture']

export default function PopularSearches() {
    return (
        <div id="popularSearches">
            <h3 id="popularSearchesTitle">Popular searches:</h3>
            <ul id="popularSearchesList" >
                {POPULAR_SEARCHS.map(elem => {
                    return (
                        <Link key={elem} to={`/search/${elem}`}>
                            <li key={elem} className="popularSearchItem">{elem}</li>
                        </Link>
                    )
                })}
            </ul>
        </div>
    )
}

