import { Routes } from '@angular/router';
import { HomeComponent } from './componenets/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HotelListComponent } from './pages/hotel-list/hotel-list.component';
import { HotelDetailComponent } from './pages/hotel-detail.component';

export const routes: Routes = [
    {path:"home",
        component:HomeComponent
    },
    {
        path:"about",
        component:AboutComponent
    },{
        path:"contact",
        component:ContactComponent
    },{
        path:"hotel-list",
        component:HotelListComponent
    },
    {   path: 'hotel/:id', 
        component: HotelDetailComponent },
];
