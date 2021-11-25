import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RealisateurService } from '../services/realisateur.service';
import { Realisateur } from '../model/Realisateur';
@Component({
  selector: 'app-update-realisateur',
  templateUrl: './update-Realisateur.component.html',
  styles: [
  ]
})
export class UpdateRealisateurComponent implements OnInit {
currentRealisateur = new Realisateur();
  constructor(private activatedRoute: ActivatedRoute,
              private realisateurService: RealisateurService,
              private router :Router) { }

  ngOnInit(): void {
this.currentRealisateur=this.realisateurService.consulterRealisateur(this.activatedRoute.snapshot.params.id);
console.log(this.currentRealisateur) ; }
updateRealisateur()
    {
    this.realisateurService.updateRealisateur(this.currentRealisateur);
    this.router.navigate(['realisateurs']);
    }
  }


   

