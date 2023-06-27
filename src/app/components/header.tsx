"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { styled } from "styled-components"

export default function Header() {

  const pathname = usePathname()

  interface Iitem {
    title:string,
    link:string,
  }

  const menu = [
    {title:"Home", link:"/"},
    {title:"Sobre", link:"/about"},
    {title:"Tecnologias", link:"/tech"},
    {title:"Pokedex", link:"/pokedex"},
    {title:"Contate-nos", link:"/contact"}
  ]

  const selectedStyle = {
    backgroundColor: "white",
    color:"black",
    transform:"scale(1.1)",
    transition: "0.2s"
  }

  return (
      <Capybara>
        <h1>
          Empresa Foda
        </h1>
        <div>
          {menu.map(i => (
            <Link 
              style={i.link == pathname? selectedStyle : {}} 
              key={i.link} 
              href={i.link}
              >
              {i.title}
            </Link>
          ))}
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