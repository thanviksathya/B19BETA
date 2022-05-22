import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { HeaderComponent} from'./header/header.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgSelectModule } from '@ng-select/ng-select';
import { HighchartsChartModule } from 'highcharts-angular';
import { ApiService } from './services/api.service';
import { FormsModule } from '@angular/forms';
import { BookcartComponent } from './bookcart/bookcart.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    EmployeeDashboardComponent,
    HeaderComponent,
    AboutusComponent,
    BookcartComponent,
    ProductComponent,
    
   
  ],
  imports: [
   BrowserModule, 
   AgGridModule.withComponents([]),
   AppRoutingModule,
   HttpClientModule,
  FontAwesomeModule,
  NgSelectModule,
   HighchartsChartModule,
   FormsModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
 
})
export class AppModule { }
