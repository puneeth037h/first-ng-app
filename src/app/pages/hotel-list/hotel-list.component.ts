import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HotelService, Hotel } from '../../services/hotel.service';

@Component({
  selector: 'app-hotel-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    // HttpClientModule not needed here anymore since it's provided in main.ts
  ],
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit {
  searchText = '';
  hotels: Hotel[] = [];

  constructor(private hotelService: HotelService) {}

  ngOnInit(): void {
    this.hotelService.getHotels().subscribe((data: Hotel[]) => {
      this.hotels = data;
    });
  }

  filteredHotels(): Hotel[] {
    return this.hotels.filter(hotel =>
      hotel.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      hotel.location.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
