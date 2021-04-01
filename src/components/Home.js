import { Component } from "react";


export default class Home extends Component{
    render(){
        return(
            <div className="mt-5 p-3 mb-5">
                <h2 className="text-center">Benvindo</h2>
                <div className="jumbotron p-3 p-md-5 mt-5 text-white rounded bg-dark">
                    <div className="col-md-6 px-0">
                    <h1 className="display-5 font-italic">Desafio Six - Crud de Clientes</h1>
                    <p className="lead my-3">Utilizando as tecnologias: Bootstrap, Javascript, Java, PostgreSQL, Spring Boot, React JS.</p>
                    <p className="lead mb-0"><a href="https://www.github.com/ErikDantas" className="text-white font-weight-bold">Ir para o Github/ErikDantas</a></p>
                    </div>
                </div>
            </div>
        )
    }
}





