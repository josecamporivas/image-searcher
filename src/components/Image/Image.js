import UserData from '../UserData/UserData'
import './Image.css'

export default function Image({data}){
    return (
        <div className="image">
            <img alt={data.id} src={data.url}/>
            <UserData userData={data.userData}/>
        </div>
    )
}