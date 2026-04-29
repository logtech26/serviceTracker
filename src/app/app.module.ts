import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HealthSystemService } from './health-system.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './features/login/login.component';
import { FormsModule } from '@angular/forms';
import { UserFormatPipe } from './shared/pipes/user-format.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HealthSystemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
