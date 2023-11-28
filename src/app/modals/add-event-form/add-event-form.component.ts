import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-event-form',
  templateUrl: './add-event-form.component.html',
  styleUrls: ['./add-event-form.component.css']
})
export class AddEventFormComponent implements OnInit{
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { Event: any },
    private modalRef: MatDialogRef<AddEventFormComponent>,
    private fb: FormBuilder,
  ){  }
  ngOnInit(): void {}

  get nom() {
    return this.AddForm.get('nom');
  }

  get date() {
    return this.AddForm.get('date');
  }

  get lieu() {
    return this.AddForm.get('lieu');
  }

  get hote() {
    return this.AddForm.get('hote');
  }

  get description() {
    return this.AddForm.get('description');
  }

  AddForm = this.fb.group({
    nom: ['', Validators.required],
    date: ['', [Validators.required]],
    lieu: ['', Validators.required],
    hote: ['', Validators.required],
    description: [''],
  });

  onSave():void{
    this.modalRef.close();
  }

  onCancel():void{
    this.modalRef.close();
  }
}
