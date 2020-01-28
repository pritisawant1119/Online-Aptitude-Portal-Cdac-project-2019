import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
//import { AdmindashComponent } from './admindash/admindash.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SsublistComponent } from './ssublist/ssublist.component';
import { SublistService } from './sublist.service';
import { StopiclistComponent } from './stopiclist/stopiclist.component';
import { TopicService } from './topic.service';
import { SquelistComponent } from './squelist/squelist.component';
import { QuestionService } from './question.service';
import { ForgetpwdComponent } from './forgetpwd/forgetpwd.component';
import { SetpassComponent } from './setpass/setpass.component';
import { AsublistComponent } from './asublist/asublist.component';
import { AtopiclistComponent } from './atopiclist/atopiclist.component';
import { AquelistComponent } from './aquelist/aquelist.component';
import { AdminService } from './admin.service';
import { AddsubComponent } from './addsub/addsub.component';
import { AddtopicComponent } from './addtopic/addtopic.component';
import { AddqueComponent } from './addque/addque.component';
import { UpdatetopicComponent } from './updatetopic/updatetopic.component';
//import { UpdateQuestionComponent } from './update-question/update-question.component';
import { UpdatequeComponent } from './updateque/updateque.component';
//import { FeedbackComponent } from './feedback/feedback.component';
import { SfeedbackService } from './sfeedback.service';
import { FeedbackComponent } from './feedback/feedback.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    //AdmindashComponent,
    AboutusComponent,
    ContactusComponent,
    SsublistComponent,
    StopiclistComponent,
    SquelistComponent,
    ForgetpwdComponent,
    SetpassComponent,
    AsublistComponent,
    AtopiclistComponent,
    AquelistComponent,
    AddsubComponent,
    AddtopicComponent,
    AddqueComponent,
    UpdatetopicComponent,
   // UpdateQuestionComponent,
    UpdatequeComponent,
   FeedbackComponent,
   //FeedbackComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:"",component:HomeComponent},
      {path:"home",component:HomeComponent},
      {path:"aboutus",component:AboutusComponent},
      {path:"contactus",component:ContactusComponent},
      {path:"register",component:RegisterComponent},
      {path:"login",component:LoginComponent},
      {path:"ssublist",component:SsublistComponent},
      {path:"stopiclist",component:StopiclistComponent},
      {path:"squelist",component:SquelistComponent},
      {path:"forgetpwd",component:ForgetpwdComponent},
      {path:"asublist",component:AsublistComponent},
      {path:"atopiclist",component:AtopiclistComponent},
      {path:"addsub",component:AddsubComponent},
      {path:"setpass",component:SetpassComponent},
      {path:"aquelist",component:AquelistComponent},
      {path:"addtopic",component:AddtopicComponent},
      {path:"addque",component:AddqueComponent},
      {path:"updateTopic/:id",component:UpdatetopicComponent},
      {path:"updateQuestion/:id",component:UpdatequeComponent},
      {path:"feedback",component:FeedbackComponent}
    ])
  ],
  providers: [SublistService,TopicService,QuestionService,AdminService,SfeedbackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
