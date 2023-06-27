"use client"

import Image from 'next/image'
import { styled } from 'styled-components'


export default function Contact() {

  function trolarnarule(){
    let zero = 0
    while(0<2){
      alert("le le le narule")
      zero = zero+1
    }
  }

  return (
    <Batata>    
      <div>
        <span>
          47-991106500
        </span>
        <h1>Contate-nos</h1>
      </div>

      <p  onClick={() => {
        trolarnarule()
      }}>
        clica aqui naru ê
      </p>
    </Batata>
  )
}

const Batata = styled.div`
  display: flex;
  justify-content: center;
  height: 60vh;
  flex-direction: column;
  place-items: center;
  div {
    width: 14%;
    text-align: center;
    margin: 1em;
    span {
      font-size: 0px;
      display: none;
    }
    background-color: black;
    &:hover {
      span {
        font-size: 1.5em;
        display: block;
      }
      h1{
        font-size: 0px ;
      }
      background-color: #00ff00;
      color: black;
      transform: scale(1.1);
      transition: 0.3s;
    }
    cursor: pointer;
    color: #00ff00;
    padding:0.5em 1em;
    border-radius: 1.5em;
  }
`