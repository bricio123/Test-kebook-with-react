import React from 'react'

import Styled from 'styled-components';

//ok so this is the import of icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'

export const ButtomLogin = () => {
     const value = {
        Login: "login",
        Sub:" Inscrever-se",
    }
    
    return (
        <Container>
            <Content>
             
                <FontAwesomeIcon icon={faUserAlt} />
              
                <small> {value.Login} </small>
                <small> {value.Sub}</small>
            </Content>
        </Container>
    )
}


const Container = Styled.div`
    width:100%;
    display:flex;
    flex-direction: row;
    margin-right: 2rem;
    color:var(--color-white);
`
const Content = Styled.button`
    font-size:18px;
    color:var(--color-white);
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width:12rem;
    font-weight:700;
    height:3.2rem;
    border-radius:3rem;
    background:transparent;
    border:2px solid var(--color-white);
    transition: background 1s;
    &:hover{
        background:var(--color-red);
        border:1px solid var(--color-red);
    }
    @media (max-width:1000px){
      border:none;
      display:inline;
      width:1rem;
      small{
          display:none;
      }
      &:hover{
        background:none;
        border:none;
    }
   
}

`