import { Component } from "react";


export default class Home extends Component{
    render(){
        return(
            <div className="mt-5 p-3 mb-5">
                <h2 className="text-center">Desafio da Six</h2>
                <div className="jumbotron">
                    <h1 className="display-4">Benvindo</h1>
                    <p className="lead">Case: 
                    A empresa XPTO necessita de um software para atender o cadastro de clientes da área comercial. A
                        aplicação deve seguir os seguintes requisitos:
                        <p></p>
                        <strong>1. Requisitos Funcionais:</strong><p></p>
                        a. Devem ser armazenados os seguintes dados:
                        <p className="text-center">
                            i. Código do Cliente - numérico e sequencial<p></p>
                            ii. CNPJ - numérico de 14 posições com formatação 00.000.000/0000-00<p></p>
                            iii. Razão Social - alfanumérico com 60 caracteres<p></p>
                            iv. Nome Fantasia - alfanumérico com 30 caracteres<p></p>
                            v. Contato Principal - alfanumérico contendo o e-mail com 50 caracteres<p></p>
                            vi. Telefone do Contato - numérico de 11 posições com formatação (00) 00000-0000
                        </p>
                        <p>
                            b. O sistema deve permitir manutenção completa do cadastro do cliente: Inclusão,
                            Alteração, Consulta e Exclusão (CRUD).<p></p>
                            c. A Consulta de Clientes deve apresentar o usuário (login) que cadastrou e o que fez a
                            última alteração, com data e hora de cada ação.  
                        </p>
                    
                    </p>
                    <hr className="my-4"></hr>
                    <p></p>
                    <p className="lead">
                        <a class="btn btn-primary" href="https://www.github.com/ErikDantas" role="button">Visitar o GitHub</a>
                    </p>
                </div> 
            </div>
        )
    }
}





