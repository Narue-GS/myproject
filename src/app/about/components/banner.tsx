"use client"

import { styled } from "styled-components"

import Image from 'next/image'

export default function Banner() {
  return (
    <Okra>
      <Image
        src={"/joaozinhogameplays.jpeg"}
        width={1000}
        height={500}
        alt="Um homem lindo"
      />
      <h1>Pequenas pessoas, grandes negócios</h1>
    </Okra>
  )
}

const Okra = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 220%;
  }
`