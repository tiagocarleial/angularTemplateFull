import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {Cliente} from '../cliente';
import { ClientesService} from '../../clientes.service'


@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {

  clientes: Cliente [] = [];  /* Array de cliente vazio */
  clienteSelecionado: Cliente;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor(
    private service: ClientesService, /* Componente precisa conectar com API (importa clienteService)*/
    private router: Router) {  /* Componente para rotear os links componentes)*/

   }

  ngOnInit(): void {
    this.service
      .getClientes()
      .subscribe (resposta => this.clientes = resposta);
  }

  novoCadastro(){ /* Metodo para local o qual deve navegar no html */
    this.router.navigate(['/clientes/form']) 
  }

  preparaDelecao (cliente: Cliente) {  /* metodo para pop-up de delecao de usuario */
    this.clienteSelecionado = cliente ;
  }

  deletarCliente () {
  this.service
      .deletar(this.clienteSelecionado)
      .subscribe (response => {this.mensagemSucesso = 'Cliente deletado com sucesso'
      this.ngOnInit(); /* atualiza a pagina apos deletar usuario */
    } , 
                  erro => this.mensagemErro = 'Ocorreu um erro ao deletar cliente')
  }

}
