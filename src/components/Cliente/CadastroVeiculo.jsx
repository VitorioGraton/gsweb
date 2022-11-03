import { Form } from "../../styled"
import { useState } from "react";
import Select from 'react-select'

export default function CadastroVeiculo(){

    const [veiculo, setVeiculo] = useState({'ano' : '','precoHora' : '','endereco':'','horaInicial' : '','horaFinal': '', 'observacoes': ''})

    function inserirVeiculo(e) {
        setVeiculo({...veiculo, [e.target.name] : e.target.value})
    }

    const [marca, setMarca] = useState("");

    const marcaSelecionada = (event) => {
        setMarca(event.target.value);
    };

    const [modelo, setModelo] = useState("");

    const modeloSelecionada = (event) => {
        setModelo(event.target.value);
    };
   
    const modeloHonda = [
        "Escolha...",
        "Civic",
    ];
    const modeloToyota = [
        "Escolha...",
        "Corolla",
        "Etios",
    ];
    const modeloChevrolet = [
        "Escolha...",
        "Onix",
    ];
    const modeloNissan = [
        "Escolha...",
        "Kicks",
    ];
    const modeloVolkswagen = [
        "Escolha...",
        "Tcross",
    ];

    let modelos = null;
    let options = null;
    let preco = null;

    if (marca === "Honda") {
        modelos = modeloHonda;
    } else if (marca === "Toyota") {
        modelos = modeloToyota;
    } else if (marca === "Chevrolet") {
        modelos = modeloChevrolet;
    } else if (marca === "Volkswagen") {
        modelos = modeloVolkswagen;
    } else if (marca === "Nissan") {
        modelos = modeloNissan;
    } 
    if (modelos) {
        options = modelos.map((el) => <option key={el}>{el}</option>);
    }

   return (
        <>
            <Form onSubmit={inserirVeiculo}>
                <fieldset>
                    <select onChange={marcaSelecionada}>
                            <option>Escolha...</option>
                            <option>Honda</option>
                            <option>Toyota</option>
                            <option>Chevrolet</option>
                            <option>Nissan</option>
                            <option>Volkswagen</option>
                        </select>
                        <select onchange={modeloSelecionada}>
                            {options}
                        </select>

                        <label htmlFor="idAno">Ano veiculo: </label>
                        <input type="text" name="ano" id="idAno" />

                        <label htmlFor="idprecoHora">Preco por hora: </label>
                        <input type="text" name="precoHora" id="idprecoHora" disabled="disabled"/>

                        <label htmlFor="idEndereco">Endereco localizado o veiculo: </label>
                        <input type="text" name="endereco" id="idEndereco" />

                        <label htmlFor="idHoraInicial">Hora inicial disponivel do veiculo: </label>
                        <input type="text" name="horaInicial" id="idHoraInicial" />

                        <label htmlFor="idHoraFinal">Hora final disponivel do veiculo: </label>
                        <input type="text" name="horaFinal" id="idHoraFinal" />

                        <label htmlFor="idObservacoes">Observacoes sobre o veiculo: </label>
                        <input type="text" name="observacoes" id="idObservacoes" />
                </fieldset>
            </Form>
        </>
   )
}