import { Component, OnInit } from '@angular/core';
import { Login } from '../Dependencias/login';
import { RespuestaLogin } from '../Dependencias/respuestaLogin';
import { LoginService } from '../../Servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nombre:string;
  password:string;
  respuestaLogin:RespuestaLogin;

  constructor(private serviceLogin:LoginService) { }

   async login() {
        const user = new Login()
        user.nombre= this.nombre; 
        user.password= this.password;
         this.respuestaLogin =await this.serviceLogin.guardar(user)
        console.log(this.respuestaLogin)
          if (this.respuestaLogin.estado==true) {
            localStorage.setItem('token',this.respuestaLogin.token);
          }
          else{
            console.log("error")
          }
        
    }

  
  ngOnInit(): void {
  }

}
