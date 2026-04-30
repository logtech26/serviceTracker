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


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserFormatPipe,
    UsergitComponent,
    CartoonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HealthSystemService, UserService, CartoonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
