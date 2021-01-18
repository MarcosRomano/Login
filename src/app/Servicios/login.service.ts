import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../Componente/Dependencias/login';
import { RespuestaLogin } from '../Componente/Dependencias/respuestaLogin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }


  guardar(login: Login): Promise <RespuestaLogin> {
      return this.http
        .post<RespuestaLogin>('http://localhost:3000/login', login)
        .toPromise();
    }
    obtenerTodos(): Promise<Login> {
      return this.http
        .get<Login>("http://localhost:3000/usuario")
        .toPromise();
    }
}