import { Component, OnInit } from '@angular/core';
import { Enseignant } from '../model/enseignant.model';
import { EnseignantService } from '../services/enseignant.service';
import { ActivatedRoute,Router } from '@angular/router';
import { University } from '../model/university.model';


@Component({
  selector: 'app-add-enseignant',
  templateUrl: './add-enseignant.component.html'
})
export class AddEnseignantComponent implements OnInit {
  
  newEnseignant = new Enseignant();
  universities! : University[];
  newIdUniv ! : number;
  // newUniversity! : University;


  constructor(private enseignantService: EnseignantService,private activatedRoute: ActivatedRoute,
    private router :Router ) {
  }
 


  addEnseignant(){
    //console.log(this.newEnseignant);
    this.newEnseignant.university = this.universities.find(unv => unv.idUniversity == this.newIdUniv)!;

    this.enseignantService.ajouterenseignant(this.newEnseignant)
    .subscribe(e => {console.log(e);
      
    this.router.navigate(['enseignants']);
  });
  }
  
  
    

  ngOnInit(): void {
    this.enseignantService.listeUniversities().
          subscribe(univs => {this.universities =univs ;
            console.log(univs);
        });}
      }
