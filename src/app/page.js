"use client"

import SalesAndPoints from "./Component/SalesAndPoints";
import Image from "next/image";
import BestSelling from "./Component/BestSelling";
import Form from "./Component/Form";

export default function Home() {



  return (
    <>
      <SalesAndPoints />


      <BestSelling />
      <Form />

    </>
  );
}
