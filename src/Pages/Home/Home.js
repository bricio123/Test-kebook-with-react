import React, { useState } from "react";

import Styled from "styled-components";

import BackgroundImg from "../../assets/back-top-home.png";

import { Hero } from "../../components/Hero/Hero";

import { ColectionsItens } from "../../components/ColectionsItens/ColectionsItens";

//here too, import of icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";

import { ButtomLogin } from "../../components/Bottoms/ButtomLogin";
import { Toggle } from "../../components/Toogle/Toggle";
import { Modal } from "../../components/Modal/Modal";
import { Search } from "../../components/Search/Search";

export const Home = () => {
  const [showToggle, setshowToggle] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <Container>
      <Navigation>
        <List>
          <ul className="content_two_options">
            <li className="logo">Kebook</li>
            <button className="hamburguer " onClick={() => setshowToggle(true)}>
              <FontAwesomeIcon icon={faBars} />
            </button>
            {showToggle ? (
              <Toggle onClose={() => setshowToggle(false)} />
            ) : null}
          </ul>
        </List>
        <List>
          <ul className="list">
            <div onClick={() => setShowModal(true)}>
              Categorias <FontAwesomeIcon icon={faBars} />
            </div>
            {showModal ? <Modal onClose={() => setShowModal(false)} /> : null}

            <li>Home</li>
            <li>Sobre</li>
            <li>Instrutor</li>
            <li>Afiliado</li>
            <li>Suporte</li>
            <li>Carreiras</li>
            <li>Cursos</li>
          </ul>
        </List>
        <List>
          <ul className="two_bottoms">
            <li onClick={() => setShowSearch(true)}>
              <FontAwesomeIcon icon={faSearch} />
              {showSearch ? <Search onClose={() => setShowSearch(false)} /> : null}
            </li>
            <li>
              {" "}
              <ButtomLogin />
            </li>
          </ul>
        </List>
      </Navigation>
              
      <img src={BackgroundImg} alt="img of background" className="img"  />
     
      <Hero />
      <ColectionsItens />
      
    </Container>
  );
};

const Container = Styled.div`
    .img{
        width:100%;
        position:absolute;
        z-index:-1;
    }
    
    @media (min-width:1001px){
      .hamburguer{
        display:none;
      }
    }

height:80vh;
}
    }
    @media (max-width:1252px){
      .img{

}
   }
    @media (max-width:1200px){
      .img{

        height:80vh;
      }
   }

`;

const Navigation = Styled.nav`
    width:100%;
    color:var(--color-white);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top:1rem;
    position:absolute;
    top:0;
   
    .content_two_options{
        margin-left:8rem;
        button{
          margin-left:2rem;
          color:var(--color-white);
          background:transparent;
          border:none;
          font-size:18px;
          font-weight:500;
          @media (max-width:924px){
      span{
        display:none;
      }
      }
    }
        }
    }
    @media (max-width:1364px){
      .content_two_options{
        margin-left:1rem;
      }
    }
    @media (max-width:1252px){
      .content_two_options{
        margin-left:0;
        
   
      }
    }
    @media (max-width:1000px){
      }
      ul{
        li{
          div{
            .span{
              display:none ;
            }
          }
        }
      }
    }
    @media (max-width:1000px){
      .logo{
        display:none;
        .hamburguer{
          li{}
          width:50px;
          height:50px;
        }
}
    }
`;

const List = Styled.div`
    
    ul{
        list-style: none;
        display:flex;
        flex-direction: row; 
        align-items: center;
        li{
            margin:1rem;
            font-size:20px;
            line-height: 29px;
            font-weight:500;
        }
    }
    @media (max-width:1252px){
     ul{
      li{
        font-size:15px;
      }
     } 
  }
  @media (max-width:1000px){
   margin:0 auto;
    .list{
      display:none;
    }
  }

`;
