import { Injectable } from '@angular/core';
import { Realisateur } from '../model/Realisateur';
@Injectable({
providedIn: 'root'
})
export class RealisateurService {
realisateurs : Realisateur[];
constructor() {
this.realisateurs = [
  {idRealisateur : 1, nomRealisateur : "Giuseppe Tornatore", Film : "Mallena", dateCreation : new Date("10/27/2000")},
  {idRealisateur : 2, nomRealisateur : "Gary Ross", Film : "Ocean's 8 ", dateCreation : new Date("09/12/2018")},
  {idRealisateur : 3, nomRealisateur : "Craig Gillespie", Film : "Cruelle", dateCreation : new Date("05/28/2000")},
  {idRealisateur : 4, nomRealisateur : "Natalie Portman", Film : "A Tale of Love and Darkness", dateCreation : new Date("11/06/2015")},
];
}
listeRealisateurs():Realisateur[] {


return this.realisateurs;
}
ajouterRealisateur( prod: Realisateur){
this.realisateurs.push(prod);
}
supprimerRealisateur( prod: Realisateur){
  const index = this.realisateurs.indexOf(prod, 0);
  if (index > -1) {
  this.realisateurs.splice(index, 1);
  }

  }
  consulterRealisateur(id:number): Realisateur{
    return  this.realisateurs.find(p => p.idRealisateur == id);
    
    }
    updateRealisateur(p:Realisateur)
     {
       this.supprimerRealisateur(p);
       this.ajouterRealisateur(p);
       this.trierRealisateurs();

  
     }
     trierRealisateurs(){
      this.realisateurs = this.realisateurs.sort((n1,n2) => {
      if (n1.idRealisateur > n2.idRealisateur) {
      return 1;
      }
      if (n1.idRealisateur < n2.idRealisateur) {
      return -1;
      }
      return 0;
      });
      }
    }