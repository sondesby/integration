import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-event-form',
  templateUrl: './edit-event-form.component.html',
  styleUrls: ['./edit-event-form.component.css']
})
export class EditEventFormComponent implements OnInit{
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { Event: any },
    private modalRef: MatDialogRef<EditEventFormComponent>,
    private fb: FormBuilder,
  ){  }
  ngOnInit(): void {}

  get nom() {
    return this.EditForm.get('nom');
  }

  get date() {
    return this.EditForm.get('date');
  }

  get lieu() {
    return this.EditForm.get('lieu');
  }

  get hote() {
    return this.EditForm.get('hote');
  }

  get description() {
    return this.EditForm.get('description');
  }

  EditForm = this.fb.group({
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
