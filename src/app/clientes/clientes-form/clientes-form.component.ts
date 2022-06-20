import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from '../cliente';
import { Router , ActivatedRoute, Params} from '@angular/router'
import { Observable } from 'rxjs';
 
@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;
  success: boolean = false;
  errors: String [];
  id: number;

  constructor(
    private service : ClientesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    
    ) { 
    this.cliente = new Cliente ();
  }

  /* Parametro para mostrar o ID e dataCadastro quando clicar em Editar usuario */
  ngOnInit(): void {
    let params : Observable<Params>= this.activatedRoute.params
    params.subscribe( urlParams => {
      this.id =urlParams['id'];
      if(this.id){
        this.service
          .getClienteById(this.id)
          .subscribe(
            response => this.cliente = response,
            errorResponse => this.cliente = new Cliente ()
          )
      }
    })
   
  }
  
  onSubmit() {

    if ( this. id) {
      this.service
        .atualizar(this.cliente)
        .subscribe( response => {
            this.success = true;
            this.errors = null;
         }, errorResponse => {
           this.errors = ['Erro ao atualizar o cliente']
         }
         
        )

    } else {

      this.service
      .salvar(this.cliente)
      .subscribe( response => { 
        this.success = true ;
        this.errors = null; /* nula msg de erro quando cadastro sucesso */
        this.cliente = response; /* completa campo ID e dataCadastro */
      } , errorResponse => {
      this.success = false; /* nula msg de sucesso quando retorno der erro de cadastro */
      this.errors = errorResponse.error.errors
      }
      )

    }

   
  }
    retorno(){ /* Metodo para local o qual deve navegar no html */
    this.router.navigate(['/clientes/lista']) 
    }
}
