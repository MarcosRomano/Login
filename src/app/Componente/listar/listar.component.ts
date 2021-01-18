import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../Servicios/usuario.service';
import { Usuario } from '../Dependencias/usuario';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
usuarios:Usuario[];
  constructor(private serviceUsuario:UsuarioService) { }

    

  async ngOnInit() {
     var resultado =await this.serviceUsuario.obtenerTodos();
        this.usuarios=resultado.personas; 
        console.log(this.usuarios);
  }

}
