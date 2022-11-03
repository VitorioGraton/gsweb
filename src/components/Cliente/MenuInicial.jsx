import { Link } from "react-router-dom";

export default function MenuInicial(){
    return(
        <>
            <ul>
                <li>
                    <Link to={"/CadastroVeiculos"}>cadastroVeiculos</Link>
                </li>
                <li>
                    <Link to={"/Aluguel"}>Aluguel</Link>
                </li>
                <li>
                    <Link to={"/Perfil"}>Perfil</Link>
                </li>
                <li>
                    <Link to={"/Historico"}>Histórico</Link>
                </li>
                <li>
                    <Link to={"/Logout"}>Logout</Link>
                </li>
            </ul>
        </>
    )
}