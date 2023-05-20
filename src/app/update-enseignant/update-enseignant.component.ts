import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EnseignantService } from '../services/enseignant.service';
import { Enseignant } from '../model/enseignant.model';
import { University } from '../model/university.model';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-enseignant',
  templateUrl: './update-enseignant.component.html',
  styles:[]

})
export class UpdateEnseignantComponent implements OnInit {
  currentEnseignant = new Enseignant();
  universities! : University[];
  updatedUnivId! : number;

  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private EnseignantService: EnseignantService) {
      this.currentEnseignant.idEnseignant =0;
     }
  
  ngOnInit() {

    this.EnseignantService.listeUniversities().
    subscribe(univs => {this.universities = univs;
    console.log(univs);
    });

    // this.EnseignantService.consulterEnseignant(this.activatedRoute.snapshot.params['idEnseignant']).subscribe( ens =>{ this.currentEnseignant = ens; 
    //   this.updatedUnivId =   this.currentEnseignant.university.idUniversity;
    

    // this.EnseignantService.consulterEnseignant(this.activatedRoute.snapshot.params['idEnseignant']).subscribe(ens =>{this.updatedUnivId= ens;
    //   console.log(ens);

    this.EnseignantService.consulterEnseignant(this.activatedRoute.snapshot.params['idEnseignant']).subscribe(ens => {
      this.currentEnseignant = ens;
      this.updatedUnivId = this.currentEnseignant.university.idUniversity;
    });
    

    }

    updateEnseignant() {
      this.currentEnseignant.university = this.universities.find(u => u.idUniversity == this.updatedUnivId)!;
      this.EnseignantService.updateEnseignant(this.currentEnseignant).subscribe(() => {
        this.router.navigate(['enseignants']); // Redirection vers la liste des enseignants
      });
    }
    
    
  }

//   this.currentEnseignant.university = this.universities.find(cat => cat.idUniversity == this.currentEnseignant['idUniversity'])!;
//   this.EnseignantService
// .updateEnseignant(this.currentEnseignant)
// .subscribe((Voit) => {
// this.router.navigate(['enseignants']);
// });
// }







