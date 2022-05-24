import React, { useState } from "react"
import {useNavigate} from 'react-router-dom'

export default function InputSearcherForm() {
    const [searchTopic, setSearchTopic] = useState('')
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault()
        navigate(`./search/${searchTopic}`)
    }

    const handleChange = (event) => {
        setSearchTopic(event.target.value)
    }

    return (
        <div id="searchForm">
            <h1>Image Searcher</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="inputTopic" >Topic</label>
                <input id="inputTopic" onChange={handleChange} placeholder="write the image topic..." />
                <input type="submit" id="inputSubmit" />
            </form>
        </div>
    )
}
