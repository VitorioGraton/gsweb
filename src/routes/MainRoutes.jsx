import {Routes, Route} from 'react-router-dom'
import Login from '../components/Login'
import Home from '../components/Home'
import CadastroCliente from '../components/CadastroCliente'
import PaginaInicial from '../components/Cliente/PaginaInicial'
import CadastroVeiculo from '../components/Cliente/CadastroVeiculo'

export default function MainRoutes(){

    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/PaginaInical' element={<PaginaInicial/>}/>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/cadastroCliente' element={<CadastroCliente/>}/>
            <Route path='/cadastroVeiculo' element={<CadastroVeiculo/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
    )
}