import { Link } from "react-router-dom"
import { useState } from "react";
import { Form } from "../styled"

export default function Login() {

    const [login, setLogin] = useState({
        'usuario' : '',
        'senha' : ''
    })

        function lerLogin(e){
        setLogin({...login, [e.target.name] : e.target.value})
        }

        return (
        <>
            <Form>
                <fieldset>
                    <legend>Sign-in</legend>
                    <label htmlFor="idUsuario">Nome de Usuário</label>
                    <input id="idUsuario" name="usuario" type="text" onChange={lerLogin} value={login.usuario}/>
                    
                    <label htmlFor="idSenha">Senha</label>
                    <input id="idSenha" name="senha" type="password" onChange={lerLogin} value={login.senha}/>
                    
                    <Link to="/CadastroCliente">Cadastre-se</Link>
                    
                    <input type="submit" value="Login"/>
                </fieldset>                
            </Form>
            </>      
    )
}