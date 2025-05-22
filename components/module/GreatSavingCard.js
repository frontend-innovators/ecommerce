import Image from "next/image";

const GreatSavingCard = ({image}) => {

    return(
        <div>
            <Image alt="image" src={image} width={400} height={400}/>
           
        </div>
    )
}
export default GreatSavingCard;