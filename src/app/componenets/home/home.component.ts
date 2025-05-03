import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  bookingData = {
    location: '',
    checkIn: '',
    checkOut: '',
    adults: '1 adult',
    children: '0 child',
    rooms: '1 room'
  };

  checkAvailability() {
    console.log('Booking Data:', this.bookingData);
    // Future: Call your backend API to check room availability
  }
}

