import React from "react";

import Styled from "styled-components";

import iconOne from "../../assets/icon_one.png";
import iconTwo from "../../assets/icon_two.png";
import iconThree from "../../assets/icon_three.png";
import iconFour from "../../assets/icon_four.png";

export const ColectionsItens = (li) => {
  return (
    <Container>
      <Content>
        <SelectOptions>
          <img src={iconOne} alt="icon sm" />
          <div>
            <h2>Aprenda com especialistas</h2>
            <p>Selecione cursos dos melhores instrutores do mercado</p>
          </div>
        </SelectOptions>

        <SelectOptions>
          <img src={iconTwo} alt="icon in" />
          <div>
            <h2>Maior empregabilidade</h2>
            <p>Invista no desenvolvimento da sua carreira e vida pessoal</p>
          </div>
        </SelectOptions>

        <SelectOptions>
          <img src={iconThree} alt="icon sm tw" />
          <div>
            <h2>Siga no seu próprio ritmo</h2>
            <p>Defina seu ritmo de estudo conforme à sua disponibilidade</p>
          </div>
        </SelectOptions>

        <SelectOptions>
          <img src={iconFour} alt="icon vd" />
          <div>
            <h2>
              Torne-se um <br /> instrutor
            </h2>
            <p>Possua as ferramentas ideais para ensinar o que você ama</p>
          </div>
        </SelectOptions>
      </Content>
    </Container>
  );
};

const Container = Styled.div`
    max-width:1100px;
    margin:0 auto;
    height:500px;
    @media (max-width:1364px){
     margin-top:5rem;
   }
   @media (max-width:1150px){
     margin-top:5rem;
   }
   @media (max-width:1150px){
     margin-top:8rem;
   }
    
  
`;
const Content = Styled.div`
    padding:7rem 0;
    display:flex;
    @media (max-width:900px){
    padding:8rem;
    flex-direction: column;
    align-items:center;
    @media (max-width:500px){
      padding:0;
        
      }
    @media (max-width:650px){
   
    flex-direction: column;
    align-items:center;
   
   }
   }
`;
const SelectOptions = Styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
        img{
            width:80px;
            height:auto;
        }
        div{
            display:flex;
            flex-direction:column;
        
            h2{
                line-height:29px;
                font-size:26px;
                font-weight:700;
                color:var(--color-text);
                margin-top: 1rem;
                margin-bottom: 0.5rem;
            }
            p{
                font-size:16px;
                font-weight:400;
                color:var(--color-text);
            }
        }
    }
    @media (max-width:1364px){
        display:flex;
      
      }
      @media (max-width:1150px){
        margin:0 2rem;
        
   }
   @media (max-width:1150px){
        margin:0 2rem;
        
   }
`;
