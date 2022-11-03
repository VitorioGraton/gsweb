import {DivBox,DivContent, Span1, Span2, Span3, IdeiaHome, DivTexto} from '../styled'
import Menu from './Menu'
import { Link } from "react-router-dom"
import ImgLogo from '../img/logonp2.jpeg'
export default function Home(){
    return(
        <>
        <Menu/>
        <DivBox>
            <DivContent>
                <h1>
                    <Span1>Seja</Span1>
                    <Span2> Bem</Span2>
                    <Span3>-Vindo!</Span3>
                </h1>
                <IdeiaHome>A nossa ideia foi pensada para você ganhar dinheiro enquanto não ultiliza seu veículo.🤑</IdeiaHome>
            </DivContent>
            <DivTexto>
                <h2>Como Funciona ?</h2>
                <p>A No Stop vai permitir que você alugue seu carro enqunto ele está parado! Um exemplo disso é o João, ele demora aproximadamente 30 minutos para chegar ao trabalho e seu carro fica parado 8 horas até o fim do seu expediente, na volta ele demora os mesmos 30 minutos da ida. Exemplificando, João fica com o carro mais parado do que em movimento.</p>
                <p>E é nesse cenário que o <span>No Stop</span> irá ajudá-lo, enquanto seu carro fica parado outra pessoa pode alugar através da nossa plataforma, João não precisa pagar o estacionamento e além disso ganha dinheiro 🤑</p>
                <p>
                    <Link to="/CadastroCliente">Faça seu cadastro!</Link>
                </p>
                <img src={ImgLogo} />
                

            </DivTexto>
        </DivBox>
        </>
    )
}