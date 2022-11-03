import styled from "styled-components"


export const Form = styled.form`

width: 70%;
margin: 5vh auto;
border: 1px solid #0ab;
border-radius: 10px;
display: flex;
flex-direction: column;
background-color: black;
animation: slide2 1.5s;

fieldset{
    padding: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

legend{
    border-radius: 10px;
    color: black;
    text-align: center;
    font-size: 1.5em;
    padding: 1em;
    background-color: #ccc4;
}
    
    label{
        align-self: flex-start;
        margin:0 auto;
        font-size: 1.4rem;
        padding: 6px;
        color: #ccc;
    }
    input{
        border-bottom: 3px solid #0ab;
        display: block;
        width: 80%;
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
      border: 0;
    }
    
    input[type='checkbox']{
        margin: 5px;
    }
        
    textarea{
        
    }

    a{  
        :hover{
            color: #67a;
        }     
    }

    p{
        color: white;
        margin: .7em;

        ::after{
            content: '';
            background-color: white;
            width: 20vh;
            height: 2px;
            position: absolute;
            transform: translate(6px ,.7em);
        }
        ::before{
            content: '';
            background-color: white;
            width: 20vh;
            height: 2px;
            position: absolute;
            transform: translate(-21vh, .7em);
        }
    }

    @media (max-width:768px){

       fieldset{
        width: 100%;
        align-items: center;
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
        transform: translateX(60%);
        opacity: 0;
    }
    60%{
        opacity: .5;
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
margin: 0 auto;
position: relative;
text-align: center;
margin-top: 45vh;

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
margin-top: 10vh;
animation: slide2 2s;
font-size: 1.1em;

@keyframes slide2{
    0%{
        transform: translateY(30vh);
        opacity:0;
    }
}
`

export const PublicNav = styled.nav`
position: fixed;
top: 0;
z-index: 1;
width: 100%;
background-color: #222;
border-bottom: 1px solid black;

    ul{
        display: flex;
        justify-content: space-around;
        list-style: none;
        padding: 1em;
    }
    a{
        text-decoration: none;
        color: #0ab;
        font-size: 1.2em;
        transition:color .5s;

            :hover{
                color: #faa;
            }
        }
`

export const DivTexto = styled.div`
margin: 60vh auto;
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
        margin-bottom: 2vh;
    }
    p{
        color: #ccc;
        font-size: 1.2em;
        text-align: center;
        line-height: 6vh;
        width: 100%;
        padding: 0 10vh;
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
        max-width: 50%;
    }

`