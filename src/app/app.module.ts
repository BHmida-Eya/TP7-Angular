import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RealisateursComponent } from './realisateurs/realisateurs.component';
import { AddRealisateurComponent } from './add-realisateur/add-realisateur.component';
import { UpdateRealisateurComponent } from './update-realisateur/update-realisateur.component';

@NgModule({
  declarations: [
    AppComponent,
    RealisateursComponent,
    AddRealisateurComponent,
    UpdateRealisateurComponent
  ],
  imports: [
    BrowserModule,
AppRoutingModule,
FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
