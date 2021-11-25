import { Component, OnInit } from '@angular/core';
import { Realisateur } from '../model/Realisateur';
import { RealisateurService } from '../services/realisateur.service';
@Component({
  selector: 'app-add-realisateur',
  templateUrl: './add-realisateur.component.html'
})
export class AddRealisateurComponent implements OnInit {
newRealisateur = new Realisateur();
message :string;
constructor(private realisateurService: RealisateurService){ }

  
  addRealisateur(){
   
this.realisateurService.ajouterRealisateur(this.newRealisateur);    
}
ngOnInit(): void {
}
  
}
