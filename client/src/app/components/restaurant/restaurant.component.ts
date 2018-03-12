import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Restaurant, Section } from '../../models';
import { RestaurantService } from '../../services/restaurant.service';


@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  private restaurant: Restaurant;
  private sections: Section[];
  private restaurantCname: string;
  constructor(private restaurantService: RestaurantService, 
              private route: ActivatedRoute, 
              private router: Router) {}
  ngOnInit() {
    this.restaurantCname = this.route.snapshot.paramMap.get('cname');
    this.restaurantService.getRestaurant(this.restaurantCname)
      .subscribe(restaurant => this.restaurant = restaurant);
    this.restaurantService.getMenu(this.restaurantCname)
    .subscribe(sections => this.sections = sections);      
  }

}
