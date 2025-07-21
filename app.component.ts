import { Component } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component'; // <-- Import HeaderComponent
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SidebarComponent, HeaderComponent, RouterOutlet, CommonModule], // <-- ajoute HeaderComponent ici
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'last';
  showSidebar = true;
  showHeader = true;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(event => {
      const navEndEvent = event as NavigationEnd;

      if (
        navEndEvent.url === '/login' || navEndEvent.urlAfterRedirects === '/login' ||
        navEndEvent.url === '/signup' || navEndEvent.urlAfterRedirects === '/signup'
      ) {
        this.showSidebar = false;
        this.showHeader = false;
      } else {
        this.showSidebar = true;
        this.showHeader = true;
      }
    });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }
}
