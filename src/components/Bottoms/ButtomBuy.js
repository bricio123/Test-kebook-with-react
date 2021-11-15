import React from "react";

import Styled from "styled-components";

export const ButtomBuy = () => {
  return <Container>Comprar um curso</Container>;
};

const Container = Styled.button`
   
    background:var(--color-red);
    color:var(--color-white);
    font-size:18px;
    color:var(--color-white);
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    font-weight:700;
    border-radius:3rem;
    width:20rem;
    height:3rem;
    padding:1rem 1rem;    
    border:none;
    transition: background 1s;
    &:hover{
        background:linear-gradient( to right, red , orange 100%, yellow ) ;
        
    }
    @media (max-width:650px){
       
        margin-bottom:1rem;
        padding:1rem;
    }

`;
