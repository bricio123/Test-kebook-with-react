import React from 'react';
import Styled from 'styled-components';


export const ButtomTeach = () => {
    return (
        <Container>
            <Content>
                Comece a ensinar agora mesmo
            </Content>
        </Container>
    )
}



const Container = Styled.div`
    width:100%;
    display:flex;
    flex-direction: row;
    
    color:var(--color-white);
    @media (max-width:650px){
   
        margin-left:0;
        
    }
`;
const Content = Styled.button`
    font-size:18px;
    color:var(--color-white);
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width:20rem;
    font-weight:700;
    height:3.2rem;
    border-radius:3rem;
    background:transparent;
    border:2px solid var(--color-white);
    transition: background 1s;
    &:hover{
        background:var(--color-red);
        border:2px solid var(--color-red);
    }
    @media (max-width:650px){
       
        margin-bottom:1rem;
        padding:1rem;
        
    }
    
`