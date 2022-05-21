import React from "react"

export default function InputSearcherForm() {
    return (
        <div id="searchForm">
            <h1>Image Searcher</h1>
            <form>
                <label htmlFor="inputTopic" >Topic</label>
                <input id="inputTopic" placeholder="write the image topic..." />
                <input type="submit" id="inputSubmit" />
            </form>
        </div>
    )
}
