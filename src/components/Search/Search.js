import React from "react";
import Styled from "styled-components";

import shortLogo from "../../assets/large-icon.png";
import OutIcon from "../../assets/out.png";
import SearchIcon from '../../assets/searchgray.png';

export const Search = ({onClose = () => {}}) => {
  return (
    <Container>
      <div className='Section_search'>
        <img src={shortLogo} alt="image logo" />
        <h1>
          Diga-nos o que você gostaria de encontrar digitando abaixo na pesquisa
        </h1>
        <img src={OutIcon} alt="icon out" onClick={onClose} />
      </div>
      <div className='Section_input'>
          <img src={SearchIcon} alt='icon search'/>
          <input placeholder="Buscar.."/>
      </div>
    </Container>
  );
};

const Container = Styled.div`
    width:100%;
    height:100%;
    background:var(--background-white);
    position:fixed; 
    left:0;
    top:0;
    z-index:50;

    .Section_search{
        margin:3rem;
        display:flex;
        justify-content:center;
        align-items:center;
        img{
            width:50px;
            height:50px;
        }
        h1{
            color:var(--color-text);
            margin:0 2rem;
        }

    }
    .Section_input{
       margin-left:9rem;
        display:flex;
        justify-content:left;
        align-items:center;
        img{
            padding:1rem;
            border-right:1px solid var(--color-text);

        }
        input{
            font-size:25px;
            font-weight:400;
            padding:2rem;
            border:none;
            outline:none;
            background:transparent;
        }
        .input::placeholder{
            font-size:30px;
        }
    }
`;
