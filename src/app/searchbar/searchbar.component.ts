import { Component } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent {
  formData: any = {}; 

  constructor(private router: Router) {}
  
  onSubmit() {
    let path = this.formData.name;
    console.log(path);
    this.router.navigateByUrl(this.formData.name).then(() => {
      window.location.reload();
    });
  }
}
