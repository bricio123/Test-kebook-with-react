import React from "react";
import Styled from "styled-components";
import outIcon from "../../assets/out.png";
import { ButtomTeach } from "../Bottoms/ButtomTeach";
import { ButtomBuy } from "../../components/Bottoms/ButtomBuy";

export const Toggle = ({ onClose = () => {} }) => {
  return (
    <Container id="show">
      <section>
        <button onClick={onClose}>
          <img src={outIcon} alt="out icon" className="icon" />
        </button>
        <strong>Kebook</strong>
      </section>
      <div>
        <p>Home</p>
        <p>Sobre</p>
        <p>Instrutor</p>
        <p>Afipado</p>
        <p>Suporte</p>
        <p>Carreiras</p>
        <p>Cursos</p>
      </div>
      <div>
          <ButtomBuy />
          <ButtomTeach />
        </div>



    </Container>
  );
};

//Here you can see the
const Container = Styled.div`
    display:flex;
    flex-direction:column;
    width:100vw;
    height:100%;
    position:fixed;
    z-index:889;
    top:0;
    left:0;
    background:var(--color-orange);
   
    section{
        display:flex;
        align-items:center;
        width:100%;
        height:5rem;
        background:var(--color-sub-orange);
        button{
            background:transparent;
            border:none;
            
        }
        strong{
            color:var(--color-white);
            font-weight:900;
            font-size:20px;
            margin:0 auto;
            padding-right:4rem;

        }
    }
    div{
        width:100%;
        display:flex;
        flex-direction:column;
        align-items:center;
        
        p{
           font-size:25px;
           font-weight:700;
           line-height:29px;
           margin:1rem 0;
           color:var(--color-white);
           list-style:none;
        }
    }
   
`;

