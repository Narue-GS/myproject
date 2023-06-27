"use client"

import { styled } from "styled-components"

import Image from 'next/image'



export default function Banner(props:{txt:string}) {
  return (
    <Okra>
      <Image
        src={props.txt}
        width={1000}
        height={500}
        alt="Um homem lindo"
      />
      <h1>Pequenas pessoas, grandes negócios</h1>
    </Okra>
  )
}

export const batata = "aaaa"

const Okra = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 220%;
  }
`