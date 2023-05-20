import { University } from "./university.model";

export class Enseignant {
    [x: string]: any;
    idEnseignant! : number;
    nomEnseignant! : string;
    villeEnseignant! : string;
    dateNaissance! : Date ;
    university! : University;
    //salaire? : number;
    }
    