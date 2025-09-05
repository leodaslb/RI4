import {Empresa, Cliente,Telefone,Endereco} from 'ri4'

let enderecoempresa1 = new Endereco('São José dos Campos, Rua Andorra n° 435', 'SP')
let empresa1 = new Empresa('Rodinei industria', 'LTDA', '777777', enderecoempresa1)
empresa1.telefones.add(new Telefone('12', '988776655'))
empresa1.telefones.add(new Telefone('11', '911223344'))
empresa1.clientes.add(new Cliente('Leonardo',new Endereco( 'São José dos Campos, AV evangelicos  8','SP'),'12344676544',[new Telefone('12', '999999999'), new Telefone('12', '88888888')]))
empresa1.clientes.add(new Cliente('Roberto ',new Endereco('Jacarei rua Vinte e tres n 30', 'SP'),'222202222',[new Telefone('12', '77777777'), new Telefone('12', '6666666')]))
empresa1.clientes.add(new Cliente('Joao',new Endereco('São José dos Campos, rua betocarrero n° 599', 'SP'),'1323488888',[new Telefone('12', '22222222'), new Telefone('12', '55555555555')]))
empresa1.clientes.add(new Cliente('Mari',new Endereco('São José dos Campos, AV bacabal n° 9000','SP'),'333333222227',[new Telefone('12', '111111111'), new Telefone('12', '333333333')]))
empresa1.clientes.add(new Cliente('Jonas',new Endereco('São José dos Campos, rua doze n° 5','SP'),'444444444444',[new Telefone('12', '000000000'), new Telefone('12', '4444444444')]))

console.log(empresa1.descricao())