import React from "react";
import Styled from "styled-components";



export const Modal = ({ id = "modal" ,onClose = () => {} }) => {

  const hendleOutSideClick = (e) => {
    if(e.target.id === id) onClose();
  }

  return (
    <Container onClick={hendleOutSideClick} id={id}>
      <SectionCategory>
        
        <section>
          <h5>Categorias </h5>
          <div>Arte</div>
          <div>Casa E Jardim</div>
          <div>Design Educação</div>
          <div>Saúde E Fitness</div>
        </section>
        <section>
          <div>Artesanato</div>
          <div>Comida E Bebida </div>
          <div>Estilo de Vida E Passatempos</div>
          <div>Música</div>
          <div>Tecnologia E Programação</div>
        </section>
        <section>
          <div>Carreiras</div>
          <div>Dsenvolvimento Pessoal </div>
          <div>Finanças E Contabidivdade</div>
          <div>Produtividade</div>
        </section>
      </SectionCategory>
    </Container>
  );
};

//Here you can see the
const Container = Styled.div`
  width:100%;
  height:100vh;
  z-index:99;
  position:absolute;
  top:0;
  left:0;
  color:black;
 
`;

const SectionCategory = Styled.div`
  display:flex;
    width:40rem;
    height:300px;
    position:relative;
    top:5rem;
    left:20rem;
    border-radius: 0 50px 30px 50px;
    background-color:var( --background-white);
    box-shadow:1px 5px 3px 5px var(--color-black);
    h5{
      padding-left:1rem;
      margin-bottom:2rem;
    }
    section{
        width:100%;
        display:flex;
        padding: 2rem;
        justify-content:center;
        flex-direction:column;
       
        div{
           font-size:15px;
           font-weight:700;
           color:var(--color-black);
           list-style:none;
           padding:.5rem;
        }
        div:hover{
          color:var(--color-white);
          background-color:var(--color-orange);
        }
    }
  


`;
