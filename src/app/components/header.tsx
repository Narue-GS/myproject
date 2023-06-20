"use client"

import { styled } from "styled-components"

export default function Header() {
  return (
      <Capybara>
        <h1>
          Empresa Foda
        </h1>
        <div>
          <a href="/">Home</a>
          <a href="/about">Sobre</a>
          <a href="/tech">Tecnologias</a>
          <a href="/contact">Contate-nos</a>
        </div>
      </Capybara>
  )
}


const Capybara = styled.header`
  background-color: black;
  border-bottom: solid 1px white;
  color: white;
  padding: 1em;
  font-size: 130%;
  text-align: center;
  div {
    display: flex;
    gap: 2%;
    justify-content: center;
    a {
      color: white;
      text-decoration: none;
    }
  }
`