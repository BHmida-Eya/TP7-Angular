import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RealisateursComponent } from './realisateurs/realisateurs.component';
import { AddRealisateurComponent } from './add-realisateur/add-realisateur.component';
import { UpdateRealisateurComponent} from './update-realisateur/update-realisateur.component';
const routes: Routes = [
  {path :"realisateur", component : RealisateursComponent},
  {path: "add-realisateur", component : AddRealisateurComponent},
  {path: "updateRealisateur/:id", component: UpdateRealisateurComponent},
  { path: "", redirectTo: "realisateurs", pathMatch: "full" }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
