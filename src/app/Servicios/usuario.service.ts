import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Respuesta } from '../Componente/Dependencias/respuesta';
import { Usuario } from '../Componente/Dependencias/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }



  obtenerTodos(): Promise<Respuesta> {
      return this.http
        .get<Respuesta>("http://localhost:3000/usuario")
        .toPromise();
    }
  
    guardar(usuario: Usuario): Promise<void> {
      return this.http
        .post<void>('http://localhost:3000/usuario', usuario)
        .toPromise();
    }

}