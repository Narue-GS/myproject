"use client"

import Image from 'next/image'
import { styled } from 'styled-components'
import Banner from './components/banner'
import { useState } from 'react'

export default function About() {
  const [txt, setText] = useState("/joaozinhogameplays.jpeg")
  return (
    <Batata>
      <h1 
        onMouseEnter={() => setText("/home/bionce.jpeg")}
        onMouseLeave={() => setText("/joaozinhogameplays.jpeg")}
      >Enfim, somos fodas</h1>
      <Banner txt={txt}/>
    </Batata>
  )
}

const Batata = styled.div`
  h1 {
    margin: 1em;
    width: fit-content;
  }
`