import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendenceComponent } from './attendence/attendence.component';
import { ExaminationComponent } from './examination/examination.component';
import { FeepaymentComponent } from './feepayment/feepayment.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProflieComponent } from './proflie/proflie.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  {path:"header",component:HeaderComponent},
  {path:"navbar",component:NavbarComponent},
  {path:"home",component:HomeComponent},
  {path:"attendence",component:AttendenceComponent},
  {path:"feepayment",component:FeepaymentComponent},
  {path:"examination",component:ExaminationComponent},
  {path:"logout",component:LogoutComponent},
  {path:"sidebar",component:SidebarComponent},
  {path:"profile",component:ProflieComponent},
  {path:"footer",component:FooterComponent},
  {path:"main",component:MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
