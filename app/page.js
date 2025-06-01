import HomePage from "@/components/template/HomePage";
import Layout from "../components/layout/Layout";
import { fetchSlides, getData,fetchCategories } from "@/services/fetchData";


export default async function Home() {
    const slides = await fetchSlides();
    const productsData = await getData();
    const categories = await fetchCategories();

  return (
    <Layout>
      <HomePage slides={slides} productsData={productsData} categories={categories}/>
    </Layout>
  );
}
