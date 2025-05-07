import HomePage from "@/components/template/HomePage";
import PopularProducts from "@/components/module/PopularProducts";
import Layout from "../components/layout/Layout";
import { fetchSlides } from "@/services/fetchData";

export default async function Home() {
  const slides = await fetchSlides();
  return (
    <Layout>
      <HomePage slides={slides} />
    </Layout>
  );
}
