// src/app/pages/hotel-detail.component.ts
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Hotel } from '../models/hotel.model';

@Component({
  selector: 'app-hotel-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.scss']
})
export class HotelDetailComponent {
  hotel: Hotel | undefined;

  hotels: Hotel[] = [ 
    {
      id: 1,
      name: 'Grand Palace Hotel',
      location: 'New York',
      image: 'assets/images/hotel1.jpg',
      description: 'A luxury hotel in the heart of the city.',
      price: 12000,
      rating: 4.5,
      roomImages: [
        'assets/images/hotel1-room1.jpg',
        'assets/images/hotel1-room2.jpg'
      ],
      services: ['Free WiFi', 'Breakfast Included', 'Swimming Pool', 'Spa', '24x7 Room Service'],
      mapUrl: 'https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Grand+Palace+Hotel,New+York'
    },
    {
      id: 2,
      name: 'Seaside Resort',
      location: 'Miami',
      image: 'assets/images/hotel2.jpg',
      description: 'Relax and unwind at our beachside resort.',
      price: 9500,
      rating: 4.2,
      roomImages: [
        'assets/images/hotel2-room1.jpg',
        'assets/images/hotel2-room2.jpg'
      ],
      services: ['Beach Access', 'Free Parking', 'Breakfast Buffet', 'Bar & Lounge'],
      mapUrl: 'https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Seaside+Resort,Miami'
    },
    {
      id: 3,
      name: 'Mountain View Inn',
      location: 'Denver',
      image: 'assets/images/hotel3.jpg',
      description: 'Enjoy scenic mountain views and cozy stays.',
      price: 7800,
      rating: 4.0,
      roomImages: [
        'assets/images/hotel3-room1.jpg',
        'assets/images/hotel3-room2.jpg'
      ],
      services: ['Mountain Tours', 'Fireplace', 'Pet Friendly', 'Free Breakfast'],
      mapUrl: 'https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Mountain+View+Inn,Denver'
    }/* same hotel list as in hotel-list.component */ ];

  constructor(private route: ActivatedRoute) {
    const hotelId = Number(this.route.snapshot.paramMap.get('id'));
    this.hotel = this.hotels.find(h => h.id === hotelId);
  }
}
