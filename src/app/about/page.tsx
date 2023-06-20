"use client"

import Image from 'next/image'
import { styled } from 'styled-components'
import Banner from './components/banner'

export default function About() {
  return (
    <Batata>
      <h1>Enfim, somos fodas</h1>
      <Banner/>
    </Batata>
  )
}

const Batata = styled.div`
  h1 {
    margin: 1em;
  }
`