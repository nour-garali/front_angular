import { Component, EventEmitter, Input, Output } from '@angular/core';
import { University } from '../model/university.model';

@Component({
  selector: 'app-update-university',
  templateUrl: './update-university.component.html',
  styleUrls: ['./update-university.component.css']
})
export class UpdateUniversityComponent {

@Input()
university! : University;

@Input()
ajout!:boolean;

@Output() 
universityUpdated = new EventEmitter<University>();


ngOnInit(): void {
  console.log("ngOnInit du composant UpdateCategorie ",this.university);
  }

  saveUniversity(){
    this.universityUpdated.emit(this.university);
    }
  
}
