import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ForgetpwdComponent } from './forgetpwd/forgetpwd.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    AboutComponent,
    ForgetpwdComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "", component: LoginComponent },
      { path: "home", component: HomeComponent },
      { path: "register", component: RegisterComponent },
      { path: "login", component: LoginComponent },
      { path: "dash", component: DashboardComponent },
      { path: "about", component: AboutComponent },
      {path:"list",component:ListComponent}

    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
