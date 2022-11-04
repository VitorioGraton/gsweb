import styled from "styled-components"


export const Form = styled.form`

width: 30vw;
border-radius: 10px;
background-color: #000;
animation: slide2 1.5s;
box-shadow: 4px 4px 100px #fff7;
margin: 2em 0 2em 10vh;

fieldset{
    padding: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

legend{
    border-radius: 10px;
    color: #ccc;
    text-align: center;
    font-size: 1.5em;
    padding: 1em;
    background-color: #002;
}
    
    label{
        align-self: flex-start;
        font-size: 1.4rem;
        padding: 6px;
        color: #ccc;
        margin-left: 4vh;
    }
    input{
        margin-left: 5vh;
        border-bottom: 3px solid #ccc;
        display: block;
        width: 85%;
        color: white;
        padding: 3px;
        transition: transform .5s, box-shadow .5s;
        background-color: black;

        :focus{
            outline: 0;
            transform: scale(1.1);
            border-color : white;
            caret-color: white;
            background-color: #ffffff0f;
        }
    }

    input[type='submit']{
      background-color: #000;
      border: 2px solid #0ab;
      border-radius: 2em;
      margin: 0;
      align-self: center;
      font-size: 1.1em;
      color: #ccc;
      width: 50%;
      transition: background-color .5s, transform .5s;

      :hover{
        transform: scale(1.1);
        background-color: #fff1;
      }
    }
    
    input[type='checkbox']{
        transform: scale(1.2);
        margin: 1em auto;
    }
        
    button{
        border-radius: 2em;
        margin: 0;
        align-self: center;
        font-size: 1em;
        color: #ccc;
        background-color: #000;
        border: 2px solid #cc8866;
        width: 50%;
        padding: .2em;
        transition: transform .5s, background-color .5s;
        letter-spacing: 1px;

        :hover{
        transform: scale(1.1);
        background-color: #fff1;
      }
    }

    a{  
    color: #0ab;
    text-decoration: none;
    padding: 1em;
    transition: color .5s;
    margin: 0 auto;
        :hover{
            color: #faa;
        }     
    }
    p{
        color: white;
        align-self: center;
        margin: 1vh 0;
    }

    @media (max-width:768px){
        width: 60vw;
        margin: 2em auto;

       fieldset{
        width: 100%;
        align-items: center;
       }
       input{
        margin: 0;
       }

       label{
        margin: 0;
        align-self: center;
       }
       
        a{
            ::after{
                display: none;
            }
        }
    }
   @keyframes slide2 {
    0%{
        transform: translateX(-50vw);
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
   }
   
`

export const DivBox = styled.div`
   ::before{
        content:"";
        position: absolute;
        top:20vh;
        right: 0;
        left: 0;
        z-index: -1;
        bottom: 0;
        background-image: linear-gradient(45deg, #23aefd, #cc8866); 	
        transform: skewY(-8deg);
        animation: slide 3s;
   }

   @keyframes slide {
    0%{
        transform: translateY(-10vh);
        opacity: 0;
    }
}
`

export const DivContent = styled.div`
max-width: 50em;
margin: 45vh auto;
position: relative;
text-align: center;

span{
    font-size: 2em;
}

`

export const Span1 = styled.span`
animation: aparecer 1.5s;
animation-timing-function: step-end;

    @keyframes aparecer {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }
`
export const Span2 = styled.span`
animation: aparecer 2s;
animation-timing-function: step-end;
`
export const Span3 = styled.span`
animation: aparecer 2.5s;
animation-timing-function: step-end;
`

export const IdeiaHome = styled.p`
margin-top: 5vh;
animation: slide2 2s;
font-size: 1.1em;

@keyframes slide2{
    0%{
        transform: translateY(30vh);
        opacity:0;
    }
}
`

export const LinkCadastro = styled.span`
    background-color: #cc8866;
    position: relative;
    transition: color .5s, background-color 1s;
    border-radius: 2em;
    padding: .1em;
    overflow: hidden;

    li{
        display: flex;
        a{
            color: black;
            :hover{
                color: black;
            }
        }
    }
    
    :hover{
        background-color: #23aefd;
        ::before{
            animation: brilho 2s;
        }
    }
    
    ::before{
        content: "";
        position:absolute;
        width: 100px;
        height: 200px;
        top: 0;
        left: 50vh;
        background-color: #222;
    }

    @keyframes brilho {
        from{
            opacity: .5;
            transform: translateX(-60vh);
        }
        to{
            opacity: .5;
            transform: translateX(50vh);
        }
    }
`

export const PublicNav = styled.nav`
position: fixed;
top: 0;
z-index: 1;
width: 100%;
background-color: #222;

    ul{
        display: flex;
        justify-content: space-around;
        list-style: none;
        padding: 1em;
        white-space: nowrap;
        align-items: center;

    }

    a{
        text-decoration: none;
        color: #0ab;
        font-size: 1.2em;
        transition:color .5s, background-color .5s;
        width: 100%;
        border-radius: 2em;
        padding:.5em;

            ::after{
                content: '';
                position: relative;
                background-color: #faa;
            }
            :hover{
                color: #faa;
            }
        }

    @media (max-width:768px) {
    width: 10vw;
    border:0;
    height: 8vh;
    background-color: transparent;
    transition: width 1s;
    
    ul{
        align-items: center;
        height: 100%;
        flex-direction: column;
        justify-content: flex-start;
    }

    li{
        display: none;
        margin-top: 1em;
    }

    span{
        background-color: transparent;
        a{
            color: #0ab;

            :hover{
                color: #faa;
            }
        }
        :hover{
            background-color: transparent;
        }

        ::before{
            display: none;
        }
    }


    
    :hover{
        width: 30vw;
        height: 100vh;
        background-color: #222;
        border-right: 1px solid black;

        li{
            display: block;
            animation: surgir 2s;
        }
        div{
            display: none;
        }
    }
}

    @keyframes surgir {
        from{
            opacity: 0;
        }
        to{
            opacity:1;
        }
    }
`
export const MiniMenu = styled.div`
    margin: 5vh;
    display: none;
    height: 3vh;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        display: flex;
     }
`
export const MenuHamb = styled.div`
    height: .7vh;
    border-radius: 1em;
    width: 5vh;
    background-color: #cc8866;
    display: none;

    @media (max-width: 768px) {
        display: block;
     }
`

export const DivTexto = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;

    h2{
        background-image: linear-gradient(to right, rebeccapurple, steelblue, turquoise);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-align: center;
        font-size: 2.4em;
        margin: 6vh 0;
        ::selection{
            background-color: #faa5;
        }
    }
    p{
        color: #ccc;
        font-size: 1.2em;
        text-align: center;
        line-height: 6vh;
        width: 100%;
        padding: 0 10vh;
        ::selection{
            background-color: #faa5;
        }
    }
    span{
        background-image: linear-gradient(to right, white, #00ffaa);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

    }
    a{
        color: #0ab;
        text-decoration: none;
        transition: color .5s;
        :hover{
                color: #faa;
            }
    }
    img{
        margin: 10vh 0;
        max-width: 20%;
    }


`

export const DivFooter = styled.footer`
    background-color: #001;
    position: relative;
    bottom: 0;
    padding: 1.2em;
    width: 100%;
    color: #0ab;

    ul{
        display: flex;
        list-style: none;
        flex-direction: column;
        align-items: center;
    }
    
`

export const DivCarro = styled.div`
    width: 60%;
    margin: 5vh;
    img{
        max-width: 100%;
    }
`

export const DivLogin = styled.div`
    display: flex;
    align-items: center;
    background-image: url("https://maisqueseguro.files.wordpress.com/2014/06/274153_papel-de-parede-porsche-911-em-preto-e-branco_1920x1200.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    margin-top: 15vh;

    @media (max-width: 998px) {
        background-image: none;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`

export const TituloCad = styled.h1`
    margin-top: 20vh;
    text-align: center;
`

export const Cadastro = styled.div`
    display: flex;
    @media (max-width: 768px) {

        flex-direction: column;
    }
`
export const TextoCad = styled.div`
    margin: 2em auto;
    text-align: center;
    width: 40%;

    
`