import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddEventFormComponent } from '../modals/add-event-form/add-event-form.component';
import { EditEventFormComponent } from '../modals/edit-event-form/edit-event-form.component';
import { DeleteEventFormComponent } from '../modals/delete-event-form/delete-event-form.component';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css'],
})
export class InterfaceComponent implements OnInit {
  constructor(private router: Router, private dialog: MatDialog) {}

  ngOnInit(): void {}
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

  
  addEvent(): void {
    this.dialog.open(AddEventFormComponent, {
      width: '800px',
    });
  }

  editEvent(): void {
    this.dialog.open(EditEventFormComponent, {});
  }

  delete(){
    this.dialog.open(DeleteEventFormComponent, {});
  }

}