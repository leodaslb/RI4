class Cliente {
    #cpf 
    constructor(nome, endereco,cpf, telefones = []) {
        this.nome = nome 
        this.endereco = endereco
        this.telefones = new Set()
        this.#cpf = cpf

        telefones.forEach(telefone => this.telefones.add(telefone))

        this.getNomeMaiusculo = function() { return this.nome.toUpperCase() }
        this.getNomeMinusculo = function() { return this.nome.toLowerCase() }

    }
    get pegarCpf() {
        return this.#cpf
    }
} 

class Telefone {
    constructor (ddd, numero){
        this.ddd = ddd
        this.numero = numero
    }
}

class Endereco {
    constructor(logradouro, estado){
        this.logradouro = logradouro
        this.estado = estado

        this.getEstadoMaiusculo = function() { return this.estado.toUpperCase() }
        this.getEstadoMinusculo = function() { return this.estado.toLowerCase() }
    }
}

class Empresa{
    #cnpj
    constructor(razaoSocial, nomeFantasia, cnpj, endereco){
        this.endereco
        this.nomeFantasia = nomeFantasia
        this.razaoSocial = razaoSocial
        this.#cnpj = cnpj
        this.clientes = new Set()
        this.telefones = new Set()

        this.getNomeFantasiaMaiusculo = function () { return this.nomeFantasia.toLowerCase()}
        this.getNomeFantasiaMaiusculo = function () { return this.nomeFantasia.toUpperCase()}
    }
    get pegarCnpj () {
        return this.#cnpj
    }

    descricao(){

        let resultado = `Razão Social: ${this.razaoSocial}\nNome fantasia: ${this.nomeFantasia}\n--------------------  \n`

        this.clientes.forEach(cliente => {resultado += `Nome: ${cliente.nome}\n`
        resultado += `Endereço: ${cliente.endereco.estado}, ${cliente.endereco.logradouro}  \n`
        cliente.telefones.forEach(telefone => {resultado += `ddd: ${telefone.ddd} numero: ${telefone.numero} \n`
        })
        resultado += `\n----------------------------\n`
})

return resultado;
        
    }
}




export{Empresa, Cliente,Telefone,Endereco}