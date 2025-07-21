// app-routing.module.ts
import { Routes } from '@angular/router';
import { AlertsComponent } from './alerts/alerts.component';
import { CapteurComponent } from './capteur/capteur.component';
import { StationComponent } from './station/station.component';
import { LayoutComponent } from './layout/layout.component';
import { HistoriqueComponent } from './historique/historique.component';
import { Layout1Component } from './layout1/layout1.component';
import { SignupComponent } from './signup/signup.component'; // adapt the path if needed
import { LoginComponent } from './login/login.component'; // adapt the path if needed

export const routes: Routes = [
  // 1. Define specific routes first
  { path: 'signup', component: SignupComponent }, // <--- Explicitly define the /signup route
  { path: 'login', component: LoginComponent }, // <--- Explicitly define the /signup route

  // 2. Then define your application routes that need header/sidebar
  { path: 'layout', component: LayoutComponent },
  { path: 'historique', component: HistoriqueComponent },
  { path: 'layout1', component: Layout1Component },
  { path: 'alerts', component: AlertsComponent },
  { path: 'capteur', component: CapteurComponent },
  { path: 'station', component: StationComponent },

  // 3. Set a default redirect. If you want / to go to signup, use this:
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  // 4. Wildcard route should always be last
  { path: '**', redirectTo: '/login' } // Redirect any unknown route to signup
];