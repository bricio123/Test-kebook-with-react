import React from "react";

import Styled from "styled-components";

import WomanRocket from "../../assets/woman-in-rocket.png";

import { ButtomTeach } from "../Bottoms/ButtomTeach";
import { ButtomBuy } from "../../components/Bottoms/ButtomBuy";

import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <Container>
      <ContentText>
        <h1>
          Investir em
          <br /> Seu <span>Futuro</span>
        </h1>
        <p>
          A kebook tem os cursos online que você prcisa para ser um profissional
          que o mercado procura
        </p>
        <ButtonGroup>
          <ButtomBuy />
          <ButtomTeach />
        </ButtonGroup>

        <p>
          Tem cadastro na Kebook?
          <Link to="/Login">
            <strong> Acesse seu perfil</strong>
          </Link>
        </p>
      </ContentText>
      <Img>
        <img src={WomanRocket} alt="img rocket" />
      </Img>
    </Container>
  );
};

const Container = Styled.div`
    max-width:1100px;
    height:500px;
    margin: 0 auto; 
    display: flex;
    flex-direction: row;
    @media (max-width:1364px){
        height:400px;
    }
    @media (max-width:1252px){
     height:350px;
   }
   @media (max-width:1200px){
     height:400px;
   }
   @media (max-width:1190px){
        max-width:1000px;
        margin:0 auto;
    }
    @media (max-width:1050px){
        display:flex;
        align-items:center;
        flex-direction:column;
    }
    @media (max-width:1050px){
        height:420px;
    }
   
`;
const ContentText = Styled.main`
    color:var(--color-white);
    display:flex;
    flex-direction: column;
    justify-content: center;
    height:100%;
    margin-top:2rem;
    h1{
        font-weight: 400;
        font-size:80px;
        line-height:88px;
        width:26rem;
    }
    span{
        font-weight: 700;
    }
    p{
        padding-top:1rem;
        width:33rem;
    }
    strong {
        color:var(--color-white);
        text-decoration-color:white;
    }
    @media (max-width:1364px){
       
        h1{
            line-height:70px;
            font-size:60px;  
            margin-top:3rem;
        }
    }
    @media (max-width:1200px){
        
        h1{
            line-height:60px;
            font-size:50px;  
        
    }
    @media (max-width:1190px){
        margin-top:3rem;
        left:20rem; 
        h1{
            line-height:50px;
            font-size:40px;
              
        }
    }
    
}
@media (max-width:650px){
        width:300px;   
        left:10rem; 
       justify-content:center;
       h1{
        width:20rem;
        line-height:40px;
        margin-top:6rem;
            
        }
        p{
            width:20rem;
            margin:2rem 0;

        }
    }
    
`;
const ButtonGroup = Styled.div`
    display:flex;
    flex-direction:row;
    
    @media (max-width:650px){
       display:flex;
       flex-direction:column;
       align-items:center;
       height:20rem;
       width:100%;
    }

`;
const Img = Styled.div`

    img{
        position:relative;
        width:500px;
        height:auto;
        top:10rem;
    }
  
      @media (max-width:1200px){
      
      img{
        left:-5rem;
        width:400px;
      }
      @media (max-width:1243px){
      
      img{
        
        width:350px;
      }
    }
    @media (max-width:1050px){
    img{
        width:300px;
        top:.8rem;
    }
    @media (max-width:650px){
    img{
        display:none;
    }
     
}
`;
