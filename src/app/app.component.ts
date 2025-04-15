import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './componenets/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HomeComponent,NavbarComponent],
  template: `
    <app-navbar/>
      
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'Booking';
  logo="../../Assets/images/ace hotel black.png";
}
