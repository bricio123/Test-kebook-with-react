import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --background-white: #f6f7fb;
        --color-white:#fff;
        --color-red:#e93e1e;
        --color-text:#3f4351;
        --color-orange: #ff7f00;
        --color-sub-orange:#ff870d;
    
    }   
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    body{
        
        -webkit-font-smoothing:antialiased;
    }
    body, input, textarea, button{
        font-family:'Nunito', sans-serif;
        font-weight:400;
    }
    h1, h2,h3,h4,h5, h6, strong {
        font-weight:600;
    }
    html{ 
        @media (max-width:1080px){
            font-size:87.5%;
        }
        @media (max-width:720px){
            font-size:93.75%;
        }
    }
    button{ 
        cursor:pointer;
    }
    [disabled]{
        opacity:0.6;
        cursor:not-allowed;
    } 
    `;
