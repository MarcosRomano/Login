import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './Componente/usuario/usuario.component';
import { LoginComponent } from './Componente/login/login.component';

const routes: Routes = [
   { path:"usuario", component:UsuarioComponent },
   { path:"login", component:LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
