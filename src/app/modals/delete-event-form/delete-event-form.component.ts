import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-event-form',
  templateUrl: './delete-event-form.component.html',
  styleUrls: ['./delete-event-form.component.css'],
})
export class DeleteEventFormComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { Event: any },
    private modalRef: MatDialogRef<DeleteEventFormComponent>,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {}

  onSave():void{
    this.modalRef.close();
  }

  onCancel():void{
    this.modalRef.close();
  }
}
