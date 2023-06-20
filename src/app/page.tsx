"use client"

import Image from 'next/image'
import { styled } from 'styled-components'

export default function Home() {
  return (
    <Potato>
      <Image
        src={"/home/lindo-krause.jpeg"}
        width={400}
        height={800}
        alt='perfeição'
      />
      <Image
        src={"/home/bionce.jpeg"}
        width={300}
        height={600}
        alt='perfeição'
      />
    </Potato>
  )
}

const Potato = styled.div`
  display: flex;
  padding: 2em;
  gap: 2%;
  background-color: rgba(0,0,0, 0.85);
  justify-content: center;
`