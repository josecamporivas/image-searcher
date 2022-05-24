import './Image.css'

export default function Image({data}){
    return (
        <div className="image">
            <img alt={data.id} src={data.url}/>
            <h4>{data.id}</h4>
            {/* add user data */}
        </div>
    )
}