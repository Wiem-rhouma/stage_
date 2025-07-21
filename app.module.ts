// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component'; // <-- Import HeaderComponent

// <<-- Reverted to AngularFire Compatibility imports -->>
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { SignupComponent } from './signup/signup.component'; // adapte le chemin si besoin
import { LoginComponent } from './login/login.component'; // adapte le chemin si besoin

import { AlertsComponent } from './alerts/alerts.component';
import { Layout1Component } from './layout1/layout1.component'; // Keep your original path
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CapteurComponent } from './capteur/capteur.component';
import { StationComponent } from './station/station.component';
import { StationPanelComponent } from './station-panel/station-panel.component';
import { LayoutComponent } from './layout/layout.component';
import { StationnPanelComponent } from './stationn-panel/stationn-panel.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HistoriqueComponent } from './historique/historique.component';

import { routes } from './app.routes';
import { firebaseConfig } from './firebase.config'; // Your Firebase configuration

@NgModule({
  declarations: [
  HeaderComponent,
    LoginComponent,
    SignupComponent,
    AppComponent,
    SidebarComponent,
    CapteurComponent,
    StationComponent,
    AlertsComponent,
    HistoriqueComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    // <<-- CORRECTED: Use AngularFire Compatibility modules -->>
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    
    // Standalone components (if applicable)
    Layout1Component,
    StationnPanelComponent,
    LayoutComponent,
    StationPanelComponent,
    
    // Angular Material modules
    MatTabsModule,
    MatExpansionModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [], // Providers array can be empty or contain other services
  bootstrap: [AppComponent]
})
export class AppModule { }