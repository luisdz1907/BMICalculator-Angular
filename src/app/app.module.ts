import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { Routes, RouterModule } from '@angular/router';
import { ResultadoComponent } from './components/resultado/resultado.component';

const routes: Routes = [
  {path:'', component: InicioComponent},
  {path:'resultado/:valor', component: ResultadoComponent},
  {path:'**', redirectTo:''}
];

@NgModule({
  declarations: [AppComponent, InicioComponent, ResultadoComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
