import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ErrorComponent } from './error/error.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
    {path: "home", component: HomeComponent},
    {path: "services",component: ServicesComponent},
    {path: "contactus", component: ContactusComponent},
    {path: "register", component: RegisterComponent},
    {path: "**", component: ErrorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
