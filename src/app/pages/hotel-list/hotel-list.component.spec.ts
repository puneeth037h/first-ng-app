import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelListComponent } from './hotel-list.component';
import { Hotel } from '../../models/hotel.model';



describe('HotelListComponent', () => {
  let component: HotelListComponent;
  let fixture: ComponentFixture<HotelListComponent>;

  const mockHotels: Hotel[] = [
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
      services: ['Free WiFi', 'Breakfast Included', 'Pool', 'Spa'],
      mapUrl: 'https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=New+York,NY'
    },
    // Add more mock hotels if needed
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelListComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(HotelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Example: Test filtering
  it('should filter hotels by name', () => {
    component.hotels = mockHotels;
    component.searchText = 'grand';
    const filtered = component.filteredHotels();
    expect(filtered.length).toBe(1);
    expect(filtered[0].name).toContain('Grand');
  });
});

