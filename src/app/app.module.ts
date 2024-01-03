import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from "./material.module";
import {HEADERComponent} from "./components/header/header.component";
import {FOOTERComponent} from "./components/footer/footer.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule, Routes} from "@angular/router";
import {USERLISTComponent} from "./components/Admin/user-list/user-list.component";
import {PROFILEComponent} from "./components/customer/profile/profile.component";
import {LOGINComponent} from "./components/login/login.component";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MatTableModule} from "@angular/material/table";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {ReactiveFormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {UserReducer} from "./sharable/store/user/User.reducer";
import {UserEffects} from "./sharable/store/user/User.effects";
import {AppEffects} from "./sharable/store/common/App.Effects";
import {AuthInterceptor} from "./_auth/auth.interceptor";
import {AuthService} from "./services/Auth/auth.service";


@NgModule({
  declarations: [
    AppComponent,
    LOGINComponent,
    USERLISTComponent,
    FOOTERComponent,
    HEADERComponent,
    PROFILEComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    MatSnackBarModule,
    RouterModule,
    MatTableModule,
    AppRoutingModule,
    StoreModule.forRoot({userReducer : UserReducer}),
    EffectsModule.forRoot([UserEffects, AppEffects])
  ],
  providers: [
    AuthService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



