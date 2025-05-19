import HomePage from "@/components/template/HomePage";
import PopularProducts from "@/components/module/PopularProducts";
import Layout from "../components/layout/Layout";
import { fetchSlides, getData } from "@/services/fetchData";

export default async function Home() {
    const slides = await fetchSlides();
    const productsData = await getData();

  return (
    <Layout>
      <HomePage slides={slides} productsData={productsData}/>
    </Layout>
  );
}
