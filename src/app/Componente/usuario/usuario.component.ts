import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../Dependencias/usuario';
import { Router } from '@angular/router';
import { UsuarioService } from '../../Servicios/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuario:Usuario[]=[];
  form:FormGroup; 
  enviado: boolean;

  constructor(private fb: FormBuilder,private router:Router,
              private serveusuario:UsuarioService){
      this.form = fb.group({
        nombre: ['', [Validators.required, Validators.maxLength(10),Validators.minLength(4)]],
        password:['', [Validators.required]],
        
      }) 
 }

  get f() { return this.form.controls; }

  async guardar(){

    this.enviado = true;

    if (this.form.valid) {

      var usuario = <Usuario>this.form.value;

      await this.serveusuario.guardar(usuario);

      this.router.navigate(['/listar'])

    }

  }
  

  ngOnInit(): void {
  }

}
