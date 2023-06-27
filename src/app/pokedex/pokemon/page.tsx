"use client"

import Image from "next/image";
import { useSearchParams } from "next/navigation";
interface IPokemon {
  name:string,
  scr:string,
}

export default function Pokemon() {
  const params = useSearchParams()
  console.log(params.get("img"));
  
  return (
    <>
      <h1>{params.get("name")}</h1>
      <Image
        src={params.get("img")|| ""}
        width={600}
        height={600}
        alt={params.get("name")|| "not informed"}
      />
    </>
  )
}