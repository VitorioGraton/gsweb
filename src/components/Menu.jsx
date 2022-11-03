import { Link } from "react-router-dom"

import { PublicNav } from "../styled"

export default function Menu(){

    return(
        <PublicNav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/CadastroCliente">Cadastro</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </PublicNav>
        
    )

}