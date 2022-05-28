import React from "react"
import { Link } from "react-router-dom"
import './PopularSearches.css'

const POPULAR_SEARCHS = ['matrix', 'random', 'architecture', 'nature']

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

