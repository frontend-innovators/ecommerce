import GreatSavingCard from "./GreatSavingCard";

export const revalidate = false;

const GreatSaving = async () => {
    let products = [];
    try{
        const result = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/products`, {cache:"no-store"});
        if(!result.ok) throw new Error("faild to fetch data")
    products = await result.json();
    }
    catch(error){
    console.log(error);
    }
    return(
    <div>
      {products.slice(0,4).map(product=>
        <GreatSavingCard key={product._id} image={product.thumbnail} />
      )}
    </div>
    );
}
export default GreatSaving;