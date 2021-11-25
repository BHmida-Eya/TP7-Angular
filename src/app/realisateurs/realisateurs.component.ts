import { Component, OnInit } from '@angular/core';
import { Realisateur } from '../model/Realisateur';
import { RealisateurService } from '../services/realisateur.service';

@Component({
  selector: 'app-realisateurs',
  templateUrl: './realisateurs.component.html'
})
export class RealisateursComponent implements OnInit {

  realisateurs : Realisateur[];

  constructor(private realisateurService: RealisateurService) {
   this.realisateurs = realisateurService.listeRealisateurs();
   }

  ngOnInit(): void {
  }
  supprimerRealisateur(prod: Realisateur)
{
//console.log(prod);
let conf = confirm("Etes-vous sur ?");
if (conf)
  this.realisateurService.supprimerRealisateur(prod);
}

}
