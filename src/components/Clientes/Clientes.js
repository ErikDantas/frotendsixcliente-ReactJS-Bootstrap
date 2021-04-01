import { Component } from "react";


export default class Clientes extends Component{

    state = {
        cnpj: "",
        razaoSocial: "",
        nomeFantasia: "",
        contatoPrincipal: "",
        telefone: "",
        clientes: [],
        clienteNovo: false,
        clienteAlterar: false
    }

    preencherTabelaClientes = () => {
        const url = window.servidor + '/clientes/'
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({clientes: data}));
    }

    funcCnpjChange = (event) => {
        this.setState({cnpj: event.target.value})
    }

    funcRazaoSocialChange = (event) => {
        this.setState({razaoSocial: event.target.value})
    }

    funcNomeFantasiaChange = (event) => {
        this.setState({nomeFantasia: event.target.value})
    }

    funcContatoPrincipalChange = (event) => {
        this.setState({contatoPrincipal: event.target.value})
    }

    funcTelefoneChange = (event) => {
        this.setState({telefone: event.target.value})
    }

    componentDidMount(){
        this.preencherTabelaClientes()
    }

    renderIncluirNovoCliente = () => {
        return(
            <div className="row mt-5 p-4">
                <h2 className="text-center">Cadastrar novo Cliente</h2>
                <form className="form-group">
                    <div className="col-3">
                        <label className="form-label">CNPJ</label>
                        <input maxLength='14' value={this.state.cnpj} onChange={this.funcCnpjChange} type="text" className="form-control" autoFocus></input>
                    </div>
                    <div className="col-5">
                        <label className="form-label">Razão Social</label>
                        <input maxLength='60' value={this.state.razaoSocial} onChange={this.funcRazaoSocialChange} type="text" className="form-control" ></input>
                    </div>
                    <div className="col-4">
                        <label className="form-label">Nome Fantasia</label>
                        <input maxLength='30' value={this.state.nomeFantasia} onChange={this.funcNomeFantasiaChange} type="text" className="form-control" ></input>
                    </div>
                    <div className="col-3">
                        <label className="form-label">Contato Principal</label>
                        <input maxLength='50' value={this.state.contatoPrincipal} onChange={this.funcContatoPrincipalChange} type="email" className="form-control" ></input>
                    </div>
                    <div className="col-2">
                        <label className="form-label">Telefone</label>
                        <input maxLength='11' value={this.state.telefone} onChange={this.funcTelefoneChange} type="text" className="form-control" ></input>
                    </div>
                    <div className="row p-2 mt-2">
                        <div className="col-1">
                            <button type="button" onClick={() => this.gravarCliente()} className="btn btn-success"> 
                                Salvar
                            </button>
                        </div>
                        <div className="col-1">
                                <button type="button" onClick={() => this.setState({clienteNovo: false, clienteAlterar: false})} className="btn btn-outline-secondary">
                                    Cancelar
                                </button> 
                        </div>
                    </div>
                </form>
            </div>
        )
    }

    novoClienteSetState = () => {
        this.setState({clienteNovo: true, codCliente:'', cnpj:'', nomeFantasia:'', razaoSocial:'', contatoPrincipal:'', telefone:''})
    }

    alterarClienteSetState = (cliente) => {
        this.setState({
            clienteAlterar: true,
            codCliente: cliente.codCliente,
            cnpj: cliente.cnpj,
            nomeFantasia: cliente.nomeFantasia,
            razaoSocial: cliente.razaoSocial,
            contatoPrincipal: cliente.contatoPrincipal,
            telefone: cliente.telefone
        })
    }

    gravarCliente = () => {
        const dados = {
            "cnpj": this.state.cnpj,
            "razaoSocial": this.state.razaoSocial,
            "nomeFantasia": this.state.nomeFantasia,
            "contatoPrincipal": this.state.contatoPrincipal,
            "telefone": this.state.telefone
        }

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        }

        const url = window.servidor + '/clientes/incluir/'

        fetch(url, requestOptions)
        .then(this.setState({clienteNovo: false}))
        .then(() => this.preencherTabelaClientes())
        .catch(erro => console.log(erro));
    }


    alterarCliente = () => {
        const dados = {
            "codigoCliente": this.state.codCliente,
            "cnpj": this.state.cnpj,
            "razaoSocial": this.state.razaoSocial,
            "nomeFantasia": this.state.nomeFantasia,
            "contatoPrincipal": this.state.contatoPrincipal,
            "telefone": this.state.telefone
        }

        const requestOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        }

        const url = window.servidor + '/clientes/alterar/'+this.state.codCliente

        fetch(url, requestOptions)
        .then(this.setState({clienteAlterar: false}))
        .then(() => this.preencherTabelaClientes())
        .catch(erro => console.log(erro));
    }


    excluirCliente = (cliente) => {

        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const url = window.servidor + '/clientes/'+cliente.codCliente

        fetch(url, requestOptions)
        .then(() => this.preencherTabelaClientes())
        .catch(erro => console.log(erro));
    }


    renderPreencherLista = () => {
        return(
            <div className="row mt-5 p-4">
                <h2 className="text-center">Clientes Cadastrados</h2>
                <div className="row mt-5">
                    <div className="p-2">
                    <button type="button" onClick={() => this.novoClienteSetState()} className="btn btn-dark"><i className="bi bi-plus-circle"></i> Novo Cliente</button>
                    </div>
                    <table className="table table-striped table-hover table-responsive">
                        <thead>
                            <tr>
                                <th scope="col">Código</th>
                                <th scope="col">CNPJ</th>
                                <th scope="col">Razão Social</th>
                                <th scope="col">Nome Fantasia</th>
                                <th scope="col">Contato Principal</th>
                                <th scope="col">Telefone</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.clientes && this.state.clientes.map(cliente => {
                                return <tr key={cliente.codCliente}>
                                    <th scope="row">{cliente.codCliente}</th>
                                    <td>{cliente.cnpj}</td>
                                    <td>{cliente.razaoSocial}</td>
                                    <td>{cliente.nomeFantasia}</td>
                                    <td>{cliente.contatoPrincipal}</td>
                                    <td>{cliente.telefone}</td>
                                    <td className="btn-group">
                                        <div className="m-1">
                                            <button onClick={() => this.alterarClienteSetState(cliente)} className="btn btn-sm btn-info"><i className="bi bi-pencil-square"></i></button>
                                        </div>
                                        <div className="m-1">
                                            <button onClick={() => this.excluirCliente(cliente)} className="btn btn-sm btn-warning"><i className="bi bi-trash"></i></button>
                                        </div>

                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                    
                </div>
            </div>
        );  
    }




    renderAlterarCliente = () => {
        return(
            <div className="row mt-5 p-4">
                <h2 className="text-center">Cadastrar novo Cliente</h2>
                <form className="form-group">
                    <div className="col-3">
                        <label className="form-label">Código do Cliente</label>
                        <input value={this.state.codCliente} readOnly type="text" className="form-control"></input>
                    </div>
                    <div className="col-3">
                        <label className="form-label">CNPJ</label>
                        <input value={this.state.cnpj} onChange={this.funcCnpjChange} type="text" className="form-control" autoFocus></input>
                    </div>
                    <div className="col-5">
                        <label className="form-label">Razão Social</label>
                        <input value={this.state.razaoSocial} onChange={this.funcRazaoSocialChange} type="text" className="form-control" ></input>
                    </div>
                    <div className="col-4">
                        <label className="form-label">Nome Fantasia</label>
                        <input value={this.state.nomeFantasia} onChange={this.funcNomeFantasiaChange} type="text" className="form-control" ></input>
                    </div>
                    <div className="col-3">
                        <label className="form-label">Contato Principal</label>
                        <input value={this.state.contatoPrincipal} onChange={this.funcContatoPrincipalChange} type="email" className="form-control" ></input>
                    </div>
                    <div className="col-2">
                        <label className="form-label">Telefone</label>
                        <input value={this.state.telefone} onChange={this.funcTelefoneChange} type="text" className="form-control" ></input>
                    </div>
                    <div className="row p-2 mt-2">
                        <div className="col-1">
                            <button type="button" onClick={() => this.alterarCliente()} className="btn btn-success"> 
                                Salvar
                            </button>
                        </div>
                        <div className="col-1">
                                <button type="button" onClick={() => this.setState({clienteNovo: false, clienteAlterar: false})} className="btn btn-outline-secondary">
                                    Cancelar
                                </button> 
                        </div>
                    </div>
                </form>
            </div>
        )
    }


    


    render(){
        let tela=''
        if(this.state.clienteNovo){
            tela = this.renderIncluirNovoCliente()
        }else{
            if(this.state.clienteAlterar){
                tela = this.renderAlterarCliente()
            }else{
                tela=this.renderPreencherLista()
            }
            
        }
        return tela
    }

}