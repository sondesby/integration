import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-interface',
  templateUrl: './user-interface.component.html',
  styleUrls: ['./user-interface.component.css']
})
export class UserInterfaceComponent implements OnInit{
  constructor( private router : Router){

  }
  event1 = {
    img : "../../assets/event1.jpeg",
    name: "Event-1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "11/06/2023"
  };
  event2 = {
    img : "../../assets/event2.jpg",
    name: "Event-2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "11/06/2023"
  };
  event3 = {
    img : "../../assets/event3.jpg",
    name: "Event-3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "11/06/2023"
  }


  ngOnInit(): void {
    
  }
  redirector(event:any){
    this.router.navigate(["details", { data: JSON.stringify(event) }]);
  }
}
