import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getImages from "../../services/getImages";
import ListOfImages from "../../components/ListOfImages/ListOfImages";

export default function SearchResults(){
    const [images, setImages] = useState([])
    const {searchTopic} = useParams()

    useEffect(() => {
        getImages(searchTopic).then(imagesData => setImages(imagesData))
        // eslint-disable-next-line
    }, [searchTopic]) 
    return (
        <div>
            <ListOfImages images={images} />
        </div>
    )
} 