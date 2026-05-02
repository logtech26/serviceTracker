import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HealthSystemService } from './health-system.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './features/login/login.component';
import { FormsModule } from '@angular/forms';
import { UserFormatPipe } from './shared/pipes/user-format.pipe';
import { UsergitComponent } from './features/usergit/usergit.component';
import { UserService } from './services/user.service';
import { CartoonService } from './services/cartoon.service';
import { CartoonComponent } from './features/cartoon/cartoon.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { AccordionsComponent } from './components/accordions/accordions.component';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { SignupComponent } from './features/signup/signup.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SettingsComponent } from './features/settings/settings.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserFormatPipe,
    UsergitComponent,
    CartoonComponent,
    AccordionsComponent,
    DashboardComponent,
    SignupComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule,
   CdkAccordionModule,
    MatIconModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatInputModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatRadioModule
  
  ],
  providers: [HealthSystemService, UserService, CartoonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
