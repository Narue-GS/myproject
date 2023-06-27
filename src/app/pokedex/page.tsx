"use client"

import { useEffect, useState } from 'react'
import { styled } from 'styled-components'

import Image from 'next/image'
import Link from 'next/link'

import { IPokemon } from "./interfaces"

export default function Pokemons() {
  const [img, setImage] = useState("/pokedex/quem.jpeg")
  const [pokedex, setPokedex] = useState<IPokemon[]>([])
  
  async function getImage(url:string) {
    const res = await fetch(url)
    const data = await res.json()
    return await data?.sprites.front_default
  }

  async function getPokemons() {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/")
    
    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    const response = await res.json()
    const pokemons = response.results.map(async (p:IPokemon) => {      
      const get = await fetch(p.url)
      const img = await get.json()
      p.url = await img.sprites.front_default
      return response.results
    })
    setPokedex( response.results )
    return res.ok
  }

  useEffect(() => {
    getPokemons()
  },[])

  return (
    <Wrapper>
      <div className='pokedex'>
        {pokedex.map(i => (
          <Link key={i.url} 
            href={{
              pathname:"/pokedex/pokemon",
              query:i.name
            }}>
            <div 
              key={i.url} 
              className='pokeItem'
              onMouseEnter={() => setImage(i.url)}
              onMouseLeave={() => setImage("/pokedex/quem.jpeg")}
            >
              <h1>
                {i.name}
              </h1>
              <Image
                src={i.url}
                width={50}
                height={50}
                alt="img"
                priority
              />
          </div>
          </Link>
        ))}
      </div>
      {img?
        <Image
          className='pokemon'
          src={img}
          width={500}
          height={500}
          loading={'eager'}
          alt="img"
        />
        : <></>
      }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  .pokedex {
    border-right: solid 1px black;
    a {
      text-decoration: none;
      color: inherit;
      div {
        display: flex;
        padding: 1em;
        cursor: pointer;
        &:hover {
          background-color: rgba(0,0,0,0.1);
          transition: 0.2s;
          img {
            transform: scale(1.2);
          }
        }
      }
    }
  }
  .pokemon {
    position: fixed;
    right: 1em;
  }
`