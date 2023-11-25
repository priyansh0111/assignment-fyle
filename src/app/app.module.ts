import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { DetailsComponent } from './details/details.component';
import { BiodataComponent } from './biodata/biodata.component';
import { RepolistComponent } from './repolist/repolist.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    BiodataComponent,
    RepolistComponent,
    SearchbarComponent,
    ErrorpageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
  ],
  exports: [AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
