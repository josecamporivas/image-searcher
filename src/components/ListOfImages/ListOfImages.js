import Image from "../Image/Image"

export default function ListOfImages({images}){
    return (
        <div id="listOfImages">
            {images.map(img => {
                return <Image key={img.id} data={img}/>
            })}
        </div>
    )
}