import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { RouterModule, Routes } from '@angular/router';
import { BiodataComponent } from './biodata/biodata.component';

const routes: Routes = [
  { path: '', component: ErrorpageComponent },
  { path: ':username', component: BiodataComponent },
]; 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
