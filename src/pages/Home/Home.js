import React from "react";
import './Home.css'
import InputSearcherForm from "../../components/InputSearcherForm/InputSearcherForm";
import PopularSearches from "../../components/PopularSearches/PopularSearches";


export default function Home(){
    return (
        <div>
            <InputSearcherForm />
            <PopularSearches />
        </div>
    )
}
