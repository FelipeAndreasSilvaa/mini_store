"use client"
import Image from "next/image";
import { Banner } from "./Components/Banner/Banner";
import Costumers from "./Components/Costumers/Costumers";
import Produtos from "./Components/Produtos/Produto";
import SubscribeNow from "./Components/SubscribeNow/SubscribeNow";
import ShopOurInsta from "./Components/ShopOurInsta/ShopOurInsta";
import Footer from "./Components/Footer/Footer";

export default function Home() {


  return (
    <>
      <Banner />
      <Costumers />
      <Produtos />
      <br />
      <SubscribeNow />
      <br />
      <ShopOurInsta />
        <Footer />
        </>
   
  );
}
