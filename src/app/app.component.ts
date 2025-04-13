import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './componenets/home/home.component';
import { HeaderComponent } from './componenets/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HomeComponent,HeaderComponent],
  template: `
    <h1>Welcome to {{title}}!</h1>
    <p>hello</p>
    
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'Booking';
}
